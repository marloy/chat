import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './profile.hbs';
import { button } from "../../components/button";
import { BUTTONS, FIELDS } from "./constants";
import './profile.css';

Handlebars.registerPartial('button', button);

const profilePageTemplate = () => () => template({ fields: FIELDS, buttons: BUTTONS });

export default profilePageTemplate;