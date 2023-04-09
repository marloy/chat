import template from './error.hbs';
import { ERRORS } from './constants';
import '../pages.css';
import './error.css';
import { PageName } from '../types';

type ErrorPageParams = PageName.InternalServerError | PageName.NotFound;

const errorPageTemplate = (status: ErrorPageParams = PageName.NotFound) => {
  const errorStatus = status;

  return () => {
    const html = template({ ...ERRORS[errorStatus] });

    return html;
  }
}

export default errorPageTemplate