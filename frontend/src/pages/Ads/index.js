import React, {useState, useEffect} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import { PageArea } from './styled';
import useApi from '../../helpers/OlxAPI';

import { PageContainer } from '../../components/MainComponents';


import AdItem from '../../components/partials/AdItem';
const Page = () => {
    const api = useApi();
    const history = useHistory();
    const useQueryString = () =>{
        return new URLSearchParams(useLocation().search);
    }
    const query = useQueryString();

    const [stateList, setStateList] = useState([])
    const [q, setQ] = useState( query.get('q') != null ? query.get('q') : '' );
    const [cat, setCat] = useState(query.get('cat') != null ? query.get('cat') : '')
    const [state, setState] = useState(query.get('state') != null ? query.get('state') : '')

    const [categories, setCategories] = useState([])
    const [adList, setAdList] = useState([])

    useEffect(()=>{
        let queryString = [];
        if(q){
            queryString.push(`q=${q}`);
        }
        if(cat){
            queryString.push(`cat=${cat}`);
        }
        if(state){
            queryString.push(`state=${state}`);
        }
        history.replace({
            search:`?${queryString.join('&')}`
        })
    }, [q,cat,state])

    useEffect(()=>{
        const getStates = async () =>{
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    },[])
    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, [])

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort:'desc',
                limit:8
            });
            setAdList(json.ads);

        }
        getRecentAds();
    }, [])
    return (
        <>
            <PageContainer>
                <PageArea>
                    <div className="leftSide">
                        <form method="GET">
                            <input 
                            type='text' 
                            name="q" 
                            placeholder="O que voce procura ?" 
                            value={q}
                            onChange={e=>setQ(e.target.value)}
                            />
                            <div className="filterName">
                                Estado:
                                <select 
                                name="state" 
                                value={state}
                                onChange={e=>setState(e.target.value)}
                                >
                                    <option></option>
                                    {stateList.map((i,k)=>
                                    <option value={i.name} key={k}>{i.name}</option>)}
                                </select>
                            </div>
                            <div className="filterName">
                                Categoria:
                                <ul>
                                    {categories.map((i,k)=>
                                    <li 
                                    key={k} 
                                    className={cat==i.slug?'categoryItem active':'categoryItem'}
                                    onClick={e=>setCat(i.slug)}
                                    >
                                        <img src={i.img} alt=""/>
                                        <span>{i.name}</span>
                                    </li>
                                    )}
                                </ul>
                            </div>
                        </form>
                    </div>
                    <div className="rightSide">

                    </div>
                </PageArea>

            </PageContainer>
        </>
    );
}

export default Page;