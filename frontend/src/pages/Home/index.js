import React from 'react';

import {Link} from 'react-router-dom';

const Page = () =>{
    return(
        <div> Pagina inicial
        <br/>

        <Link to="/about">Sobre</Link>
        </div>

    )
}


export default Page;