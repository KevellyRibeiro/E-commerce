import React, { useState } from 'react';
import '../UpdateProduct/style.css';

const UpdateProduct = () => {
    const [Product, setProduct] = useState({
        title: '',
        description: '',
        image: null,
        price: '',
        category: '',
        tags: ''  // Adicionando tags ao estado
    });

    const addProduct = (e) => {
        e.preventDefault();
        
        console.log(Product.title);
        console.log(Product.description);
        console.log(Product.image);
        console.log(Product.price);
        console.log(Product.tags);  // Adicionando log para tags
    }

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'image') {
            setProduct(prevState => ({
                ...prevState,
                [name]: files[0]
            }));
        } else {
            setProduct(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    return (
        <>
            <section>
                <div className='menuToogle'>
                    <div><h3>Pagina Inicial</h3></div>
                    <div><h3>Relatorios</h3></div>
                    <div><h3>Produtos</h3></div>
                    <div><h3>Ofertas</h3></div>
                    <div></div>
                </div>
                <div className='containerFather'>
                    <div className='containerHeader'>
                    <h1>Create new product</h1>
                     </div>
                    <div className='containerForm'>
                        <form onSubmit={addProduct} className='formProduct'>
                        <label>Digite o título do seu produto!</label>
                        <input 
                            type="text" 
                            name="title" 
                            value={Product.title} 
                            onChange={handleInputChange} 
                            placeholder='Aspirador de pó'
                        />
                        <label>Digite a descrição do seu produto!</label>
                        <input 
                            type="text" 
                            name="description" 
                            value={Product.description} 
                            onChange={handleInputChange} 
                            placeholder='Cor vermelha com voltagem....'
                            id='inputDesc'
                        />
                        <div>
                            <label>Digite o Preço referente ao seu produto:</label>
                            <input 
                                type="number" 
                                name="price" 
                                value={Product.price} 
                                onChange={handleInputChange} 
                                placeholder='25,00 R$'
                            />
                        </div>
                        <label>Carregue sua Imagem!</label>
                        <input 
                            type="file" 
                            name="image" 
                            onChange={handleInputChange} 
                        />
                        <label>Tags</label>
                        <input 
                            type="text" 
                            name="tags"  // Corrigindo o nome para tags
                            value={Product.tags}  // Associando ao estado
                            onChange={handleInputChange} 
                        />
                        <label >Estoque</label>
                        <input type="number" name="" id="inputEstoque" />
                        <label >Categoria</label>
                        <select name="" id="">
                            <option value="eletronicos">Eletronicos</option>
                            <option value="moda">
                                Moda e Vestuario
                            </option>
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
                        <input type="submit" value="Confirmar" />

                        </form>

                    </div>
                </div>
                
            </section>
        </>
    )
}

export { UpdateProduct };
