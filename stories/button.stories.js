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

export const Collapse = () => '<div id="my-id"><button  class="btn btn-primary" type="button" aria-expanded="false" aria-controls="collapseExample">Button with data-target</button></div><div class="collapse"><div class="card card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div></div>';

export const Dropdown = () => 
'<div class="dropdown"><button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</button><div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div></div>';

export const Popovers = () => 
`<button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>`;
