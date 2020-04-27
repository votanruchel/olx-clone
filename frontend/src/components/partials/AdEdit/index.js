import React from 'react';
import { Item } from './styled';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
export default (props) => {
    console.log(props.data)
    if(props.data.status !== true){
        return;
    }

    return (
       
        <Item className="aditem"> 
                <label class="btn btn--blue" for={props.data.id}>   
                <div className="itemName">Nome do anuncio: {props.data.title}</div>
                <div className="itemPrice">Preço: {props.data.price}</div>
                <div className="itemViews">Quantidade de visualizaçoes: {props.data.views}</div>
                Clique para editar
                </label>
                <Modal data={props.data}/>
        </Item>
        
        
    )
}