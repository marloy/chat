import template from './error.hbs';
import { ERRORS } from './constants';
import '../pages.css';
import './error.css';

const errorPageTemplate = (status = '404') => {
  const errorStatus = status;

  return () => {
    const html = template({ ...ERRORS[errorStatus] });

    console.log('hello', ERRORS[errorStatus])

    return html;
  }
}

export default errorPageTemplate