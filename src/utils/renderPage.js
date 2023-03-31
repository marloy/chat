import { homePageTemplate } from "../pages/home"
import { signinPageTemplate } from "../pages/signin";
import { signupPageTemplate } from "../pages/signup";

const PAGES = {
  'home': homePageTemplate,
  'signin': signinPageTemplate,
  'signup': signupPageTemplate,
}

export const renderPage = (name = 'home') => {
  const root = document.getElementById('app');
  root.innerHTML = '';
  
  const template = PAGES[name];
  const html = template();
  
  root.innerHTML = html;
}
