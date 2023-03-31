import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./home.hbs";
import { button } from "../../components/button";
import './home.css'

Handlebars.registerPartial('button', button);

export default template;