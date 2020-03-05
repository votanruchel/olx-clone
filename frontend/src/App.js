import React from 'react';
import {connect} from 'react-redux';
// import { Container } from './styles';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import {Template} from './components/MainComponents';

import Header from './components/partials/Header';

import Footer from './components/partials/Footer';


export default function Page() {
  return (
    <BrowserRouter>
      <Template>
        <Header />

        <Routes />

        <Footer />
      </Template>
    </BrowserRouter>
  );
}
const mapStateToProps = state => {
  return {
    user:state.user
  }
};

const mapDispatchToProps = dispatch =>{
  return {

  }
}