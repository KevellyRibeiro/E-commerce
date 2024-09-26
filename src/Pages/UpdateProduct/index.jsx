import React, { useState, useEffect } from 'react';
import '../UpdateProduct/style.css';
import axios from 'axios';
const UpdateProduct = () => {
    const [Product, setProduct] = useState({
        title: '',
        description: '',
        images: [],
        price: '',
        category: '',
        tags: ''
    });
    const [imagePreview, setImagePreview] = useState('');
    const [isDivCelVisible, setIsDivCelVisible] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'image') {
            const imageUrls = Array.from(files).map(file => URL.createObjectURL(file));
            setImagePreview(imageUrls);

            setProduct(prevState => ({
                ...prevState,
                images: [...prevState.images, ...files]
            }));
        } else {
            setProduct(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    const addProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', Product.title);
        formData.append('description', Product.description);
        Product.images.forEach((image, index) => {
            formData.append(`image${index + 1}`, image);
        });
        formData.append('price', Product.price);
        formData.append('category', Product.category);
        formData.append('tags', Product.tags);

        axios.post('http://localhost:3000/products', Product).then(response =>{
            console.log(response.data)
        })

        
    };

    const toggleDivCel = () => {
        setIsDivCelVisible(prevState => !prevState);
    }

    useEffect(() => {
        // Você pode chamar loadProducts() para carregar os produtos ao montar o componente
        // loadProducts();
    }, []);

    return (
        <>
            <section>
                <div className='containerHeader'>
                    <h1>Create new product</h1>
                </div>
                <div className='containerHeaderCel'>
                    
                    <i className="fi fi-rr-menu-burger" id='MenuCel' onClick={toggleDivCel}></i>
                    <div className='paiDivCel' style={{ display: isDivCelVisible ? 'flex' : 'none' }}>
                        <div><h3>Pagina Inicial</h3></div>
                        <div><h3>Relatorios</h3></div>
                        <div><h3>Produtos</h3></div>
                        <div><h3>Ofertas</h3></div>
                    </div>
                    
                </div>
                <div className='containerFather'>
                    <div className='menuToogle'>
                        <div><h3>Pagina Inicial</h3></div>
                        <div><h3>Relatorios</h3></div>
                        <div><h3>Produtos</h3></div>
                        <div><h3>Ofertas</h3></div>
                    </div>
                    <i className="fi fi-ts-arrow-small-left" id='buttonBack'></i>
                    <div className='containerForm'>
                        <form onSubmit={addProduct} className='formProduct'>
                            <div>
                                <label>Digite o título do seu produto!</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={Product.title}
                                    id='titleInput'
                                    onChange={handleInputChange}
                                    placeholder='Aspirador de pó'
                                />
                            </div>
                            <div className='descLabel'>
                                <label>Digite a descrição do seu produto!</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={Product.description}
                                    onChange={handleInputChange}
                                    placeholder='Cor vermelha com voltagem....'
                                    id='inputDesc'
                                />
                            </div>
                            <div>
                                <label>Digite o Preço referente ao seu produto:</label>
                                <input
                                    type="number"
                                    name="price"
                                    id='priceInput'
                                    value={Product.price}
                                    onChange={handleInputChange}
                                    placeholder='25,00 R$'
                                />
                            </div>
                            <div>
                                <label>Carregue suas Imagens!</label>
                                <input type="file" name="image" onChange={handleInputChange} multiple />
                            </div>
                            <div>
                                {imagePreview && imagePreview.map((url, index) => (
                                    <div key={index} className="image-preview">
                                        <img src={url} alt={`Imagem ${index + 1}`} className="preview-image" />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <label>Tags</label>
                                <input
                                    type="text"
                                    name="tags"
                                    value={Product.tags}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='encapEstAndCat'>
                                <label>Estoque</label>
                                <input type="number" name="" id="inputEstoque" />
                                <label>Categoria</label>
                                <select name="category" id="categorySelect" onChange={handleInputChange}>
                                    <option value="eletronicos">Eletronicos</option>
                                    <option value="moda">Moda e Vestuario</option>
                                    <option value="decoracao">Casa e Decoração</option>
                                    <option value="beleza">Beleza e Cuidados Pessoais</option>
                                    <option value="esportes">Esportes e Fitness</option>
                                    <option value="livros">Livros e Midia</option>
                                    <option value="brinquedos">Brinquedos e Jogos</option>
                                    <option value="alimentos">Alimentos e Bebidas</option>
                                    <option value="moveis">Moveis</option>
                                    <option value="automotivo">Automotivo e Ferramentas</option>
                                    <option value="saude">Saúde</option>
                                    <option value="joias">Jóias e acessorios</option>
                                    <option value="pet">Pet</option>
                                    <option value="eletronicosHome">Eletronicos para casa</option>
                                    <option value="instrumentos">Instrumentos</option>
                                    <option value="papelaria">Papelaria</option>
                                    <option value="camping">Camping e Outdoor</option>
                                    <option value="festas">Festas e Eventos</option>
                                </select>
                            </div>
                            <input type="submit" value="Adicionar Produto" id='addNewProducts' />
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export { UpdateProduct };