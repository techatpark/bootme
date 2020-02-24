import { document } from 'global';
import { action } from '@storybook/addon-actions';
import { useEffect } from '@storybook/client-api';

export default {
  title: 'Components/Alerts',
};

// export const Heading = () => '<h1>Hello World</h1>';
// export const Headings = () =>
//   '<h1>Hello World</h1><h2>Hello World</h2><h3>Hello World</h3><h4>Hello World</h4>';

export const Alertprimary = () => '<div class="alert alert-primary" role="alert">A simple primary alert—check it out!</div>';
export const Alertsecondary = () => '<div class="alert alert-secondary" role="alert">A simple secondary alert—check it out!</div>';
export const Alertsuccess = () => '<div class="alert alert-success" role="alert">A simple success alert—check it out!</div>';
export const Alertdanger = () => '<div class="alert alert-danger" role="alert">A simple danger alert—check it out!</div>';
export const Alertwarning = () => '<div class="alert alert-warning" role="alert">A simple warning alert—check it out!</div>';
export const Alertinfo = () => '<div class="alert alert-info" role="alert">A simple info alert—check it out!</div>';
export const Alertlight = () => '<div class="alert alert-light" role="alert">A simple light alert—check it out!</div>';
export const Alertdark = () => '<div class="alert alert-dark" role="alert">A simple dark alert—check it out!</div>';


//Link color

export const Alertlinkprimary = () => '<div class="alert alert-primary" role="alert">A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>';
export const Alertlinksecondary = () => '<div class="alert alert-secondary" role="alert">A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>';
export const Alertlinksuccess = () => '<div class="alert alert-success" role="alert">A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>';
export const Alertlinkdanger = () => '<div class="alert alert-danger" role="alert">A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>';
export const Alertlinkwarning = () => '<div class="alert alert-warning" role="alert">A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>';
export const Alertlinkinfo = () => '<div class="alert alert-info" role="alert">A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>';
export const Alertlinklight = () => '<div class="alert alert-light" role="alert">A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>';
export const Alertlinkdark = () => '<div class="alert alert-dark" role="alert">A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>';


//Dismissing Alert
export const Dismisswarning = () => '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Holy guacamole!</strong> You should check in on some of those fields below.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>';
