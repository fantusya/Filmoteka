import { refs } from '../constants/refs';

export default class Spinner {
    constructor() {
        this.refs = refs;
    }
  
    show() {
      this.refs.spinner.classList.remove('is-hidden');
  };  
  
    hide() {
      this.refs.spinner.classList.add('is-hidden'); 
  };
}