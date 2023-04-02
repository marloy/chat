import { homePageTemplate } from '../pages/home'
import { authPageTemplate } from '../pages/auth';
import { errorPageTemplate } from '../pages/error';
import { profilePageTemplate } from '../pages/profile';
import { chatPageTemplate } from '../pages/chat';

const PAGES = {
  'home': homePageTemplate(),
  'signin': authPageTemplate('signin'),
  'signup': authPageTemplate('signup'),
  '404': errorPageTemplate('404'),
  '500': errorPageTemplate('500'),
  'profile': profilePageTemplate(),
  'chat': chatPageTemplate(),
}

export const renderPage = (name = 'home') => {
  const root = document.getElementById('app');
  root.innerHTML = '';
  
  const template = PAGES[name];
  const html = template();
  
  root.innerHTML = html;
}
