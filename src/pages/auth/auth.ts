import Handlebars from 'handlebars/dist/handlebars.runtime';
import { form } from '../../modules/form';
import template from './auth.hbs';
import '../pages.css';
import './auth.css';
import { PageName } from '../types';
import { FORMS } from './constants';

Handlebars.registerPartial('form', form);

type AuthPageParams = PageName.Signin | PageName.Signup;

const authPageTemplate = (pageName: AuthPageParams = PageName.Signin) => {
  const contentObj = FORMS[pageName];

  return () => {
    const html = template({ ...contentObj });

    return html;
  }
}

export default authPageTemplate;
