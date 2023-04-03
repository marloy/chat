import Handlebars from "handlebars/dist/handlebars.runtime";
import template from "./home.hbs";
import { button } from "../../components/button";
import { BUTTONS } from "./constants";
import './home.css';

Handlebars.registerPartial('button', button);

const homePage = () => () => template({ buttons: BUTTONS });

export default homePage;