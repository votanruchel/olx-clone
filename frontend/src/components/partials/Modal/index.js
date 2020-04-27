import React from 'react';

import {ModalStyle} from './styled';
import useApi from '../../../helpers/OlxAPI';


export default (props)=>{
    const api = useApi();
    const disableAd = async (id)=>{
        const response = await api.updateAd(id);
        alert(response);
    }   

    return (
        <ModalStyle>
        <input class="modal-state" id={props.data.id} type="checkbox" />
        <div class="modal">
        <label class="modal__bg" for={props.data.id}></label>
        <div class="modal__inner">
            <label class="modal__close" for={props.data.id}></label>
            <h2>Nome do anuncio: {props.data.title}</h2>
            <p>Descricao do anuncio: {props.data.description}</p>
            <p>Valor do produto: <strong>R${props.data.price}</strong></p>
            <p>Quantidade de visualizacoes: <strong>{props.data.views}</strong></p>
            <button onClick={()=>{disableAd(props.data.id)}}>Desabilitar este anuncio.</button> 
        </div>
        
        </div>
        </ModalStyle>
    )
}