import React, {useState, useRef, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { PageArea, ListAds } from './styled';
import useApi from '../../helpers/OlxAPI';
import AdEdit from '../../components/partials/AdEdit';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';
const Page = () => {
    const api = useApi();

    const history = useHistory();


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const [ads, setAds] = useState([]);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(async ()=>{
        const userInfo = await api.getMe();
        setName(userInfo.name);
        setEmail(userInfo.email);
        setState(userInfo.state);
        setAds(userInfo.ads);
    }, [])
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setDisabled(true);

        if(password === passwordConfirm && password !== '' && passwordConfirm !== ''){
            const updatepass = await api.updateMe(password);
            if(updatepass.error === ''){
                alert("Senha alterada com sucesso!");
            }
        }
        
        let errors = [];

        
        setDisabled(false)
    }

    const priceMask = createNumberMask({
        prefix:'R$ ',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol:'.',
        allowDecimal:true,
        decimalSymbol:','
    })
    return (
        <PageContainer>
            <PageTitle>Minha conta</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Nome Completo</div>
                        <div className="area--input">
                            <input 
                            type="text" 
                            disabled={disabled}
                            value={name}
                            readOnly
                            />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input
                            type="text"
                            disabled={disabled}
                            value={email}
                            readOnly
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Estado</div>
                        <div className="area--input">
                            <input 
                            type="text"
                            disabled={disabled}
                            value={state}
                            readOnly
                            />
                            </div>
                    </label>
                    
                    <label className="area">
                        <div className="area--title">Nova senha</div>
                        <div className="area--input">
                        <input 
                            type="password"
                            disabled={disabled}
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                            />
                        <input 
                            type="password"
                            disabled={disabled}
                            value={passwordConfirm}
                            onChange={e=>setPasswordConfirm(e.target.value)}
                            />
                        </div>
                    </label>
                    

                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disabled}>Alterar</button>
                        </div>
                    </label>
                    <hr/>
                </form>
            <PageTitle>Meus anúncios</PageTitle>
                <div className="myads-area">
                    
                    <div className="ads-length">Você tem {ads.length} anuncios ativos.</div>
                    <ListAds>
                        {ads.map((i,k)=>
                            <AdEdit key={k} data={i}/>
                        )} 
                    </ListAds>
                    
                    
                </div>
            </PageArea>
        </PageContainer>
    );
}

export default Page;