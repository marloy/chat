import { homePageTemplate } from '../pages/home'
import { authPageTemplate } from '../pages/auth';
import { errorPageTemplate } from '../pages/error';

const PAGES = {
  'home': homePageTemplate,
  'signin': authPageTemplate('signin'),
  'signup': authPageTemplate('signup'),
  '404': errorPageTemplate('404'),
  '500': errorPageTemplate('500'),
}

export const renderPage = (name = 'home') => {
  const root = document.getElementById('app');
  root.innerHTML = '';
  
  const template = PAGES[name];
  const html = template();
  
  root.innerHTML = html;
}
