import React, { useState } from 'react';

const UpdateProduct = () => {
    const [Product, setProduct] = useState({
        title: '',
        description: '',
        image: null,
        price: '',
        category: ''
    });

    const addProduct = (e) => {
        e.preventDefault();
        
        console.log(Product.title);
        console.log(Product.description);
        console.log(Product.image);
        console.log(Product.price);
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
            <header>
                <div>
                    <h1>Bem vindo a sua página de criação de Produtos</h1>
                </div>
            </header>
            <section>
                <form onSubmit={addProduct}>
                    <label>Digite o título do seu produto!</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={Product.title} 
                        onChange={handleInputChange} 
                    />
                    
                    <label>Digite a descrição do seu produto!</label>
                    <input 
                        type="text" 
                        name="description" 
                        value={Product.description} 
                        onChange={handleInputChange} 
                    />
                    
                    <label>Digite o Preço referente ao seu produto:</label>
                    <input 
                        type="number" 
                        name="price" 
                        value={Product.price} 
                        onChange={handleInputChange} 
                    />
                    
                    <label>Carregue sua Imagem!</label>
                    <input 
                        type="file" 
                        name="image" 
                        onChange={handleInputChange} 
                    />
                    

                    <input type="submit" value="Confirmar" />
                </form>
            </section>
        </>
    )
}

export { UpdateProduct };