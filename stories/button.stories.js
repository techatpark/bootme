import { document } from 'global';
import { action } from '@storybook/addon-actions';
import { useEffect } from '@storybook/client-api';

export default {
  title: 'button',
};

// export const Heading = () => '<h1>Hello World</h1>';
// export const Headings = () =>
//   '<h1>Hello World</h1><h2>Hello World</h2><h3>Hello World</h3><h4>Hello World</h4>';

export const Alert = () => '<div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>';

export const Badge = () => '<button type="button" class="btn btn-primary">Notifications <span class="badge badge-light">4</span></button>';

export const Breadcrumb = () => '<nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item active" aria-current="page">Home</li></ol>';

export const Button = () => {
  const btn = document.createElement('button');
  btn.setAttribute('class',"btn btn-primary");
  btn.innerHTML = 'Primary';
  btn.addEventListener('click', action('Click'));
  return btn;
};


export const Card = () => 
'<div class="card" style="width: 18rem;"><img src="..." class="card-img-top" alt="..."> <div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>';



