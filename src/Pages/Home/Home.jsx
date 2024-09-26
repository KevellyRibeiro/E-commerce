import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Ocorreu um erro ao buscar os produtos:', error);
      });
  }, []);

    

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {product.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export {HomePage};
