import Handlebars from 'handlebars/dist/handlebars.runtime';
import { form } from '../../modules/form';
import { FORMS } from './constants';
import template from './auth.hbs';
import '../pages.css';
import './auth.css';

Handlebars.registerPartial('form', form);

const authPageTemplate = (pageName = 'signin') => {
  const contentObj = FORMS[pageName];

  return () => {
    const html = template({ ...contentObj });

    return html;
  }
}

export default authPageTemplate;
