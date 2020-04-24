import React from 'react';
import { Item } from './styled';
import { Link } from 'react-router-dom';
export default (props) => {
    console.log(props.data)
    if(props.data.status !== true){
        return;
    }
    return (
       
        <Item className="aditem">
            <Link to={`/ad/edit/${props.data.id}`}>
                <div className="itemName">Nome do anuncio: {props.data.title}</div>
                <div className="itemPrice">Preço: {props.data.price}</div>
                <div className="itemViews">Quantidade de visualizaçoes: {props.data.views}</div>
                <div>Clique para editar</div>
            </Link>
        </Item>
        
        
    )
}