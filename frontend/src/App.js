import React from 'react';
import {connect} from 'react-redux';
// import { Container } from './styles';

export default function Page() {
  return (
    <div>Tste</div>
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