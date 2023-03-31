import Handlebars from 'handlebars/dist/handlebars.runtime';
import { form } from '../../modules/form';
import { fields, buttons, link } from './constants';
import { fullscreenTemplate } from '../../layouts/fullscreen';

Handlebars.registerPartial('content', form);

const signinPageTemplate = () => {
  const html = fullscreenTemplate({ 
    title: 'Вход',
    link,
    form: {
      fields,
      buttons,
    }
  });

  return html;
}

export default signinPageTemplate;
