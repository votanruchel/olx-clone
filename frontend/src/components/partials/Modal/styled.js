import styled from 'styled-components';

export const ModalStyle = styled.div`
/* [Object] Modal
 * =============================== */
.modal {
  opacity: 0;
  visibility: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: left;
  background: rgba(0,0,0, .9);
  transition: opacity .25s ease;
}

.modal__bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
}

.modal-state {
  display: none;
}

.modal-state:checked + .modal {
  opacity: 1;
  visibility: visible;
}

.modal-state:checked + .modal .modal__inner {
  top: 0;
}

.modal__inner {
  transition: top .25s ease;
  position: absolute;
  top: -20%;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50%;
  margin: auto;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  padding: 1em 2em;
  height: 50%;
}

.modal__close {
  position: absolute;
  right: 1em;
  top: 1em;
  width: 1.1em;
  height: 1.1em;
  cursor: pointer;
}

.modal__close:after,
.modal__close:before {
  content: '';
  position: absolute;
  width: 2px;
  height: 1.5em;
  background: #ccc;
  display: block;
  transform: rotate(45deg);
  left: 50%;
  margin: -3px 0 0 -1px;
  top: 0;
}

.modal__close:hover:after,
.modal__close:hover:before {
  background: #aaa;
}

.modal__close:before {
  transform: rotate(-45deg);
}

@media screen and (max-width: 768px) {
	
  .modal__inner {
    width: 90%;
    height: 90%;
    box-sizing: border-box;
  }
}


/* Other
 * =============================== */
body {
  padding: 1%;
  font: 1/1.5em sans-serif;
  text-align: center;
}

.btn {
  cursor: pointer;
  background: #27ae60;
  display: inline-block;
  padding: .5em 1em;
  color: #fff;
  border-radius: 3px;
}

.btn:hover,
.btn:focus {
  background: #2ecc71;
}

.btn:active {
  background: #27ae60;
  box-shadow: 0 1px 2px rgba(0,0,0, .2) inset;
}

.btn--blue {
  background: #2980b9;
}

.btn--blue:hover,
.btn--blue:focus {
  background: #3498db;
}

.btn--blue:active {
  background: #2980b9;
}

p img {
  max-width: 200px;
  height: auto;
  float: left;
  margin: 0 1em 1em 0;
}

button{
    width: 300px;
    padding: 15px;
    margin:auto;
    border: 1px solid red;
    background-color: #fff;
    color: #000;
    line-height:25px;
    font-size: 16px;
    cursor:pointer;
    border-radius: 15px;
    outline: 0;
    &:hover{
        background-color: red;
        color: #FFF;
        border: 1px solid #FFF;
    }
}
`; 