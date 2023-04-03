import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './form.hbs';
import { button } from '../../components/button'
import { input } from '../../components/input';
import './form.css';

Handlebars.registerPartial('input', input);
Handlebars.registerPartial('button', button);

export default template;