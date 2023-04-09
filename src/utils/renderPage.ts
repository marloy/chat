import { homePageTemplate } from '../pages/home'
import { authPageTemplate } from '../pages/auth';
import { errorPageTemplate } from '../pages/error';
import { profilePageTemplate } from '../pages/profile';
import { chatPageTemplate } from '../pages/chat';
import { PageName } from '../pages/types';

const PAGES = {
  [PageName.Home]: homePageTemplate(),
  [PageName.Signin]: authPageTemplate(PageName.Signin),
  [PageName.Signup]: authPageTemplate(PageName.Signup),
  [PageName.NotFound]: errorPageTemplate(PageName.NotFound),
  [PageName.InternalServerError]: errorPageTemplate(PageName.InternalServerError),
  [PageName.Profile]: profilePageTemplate(),
  [PageName.Chat]: chatPageTemplate(),
}

export const renderPage = (name: PageName) => {
  const template = PAGES[name];
  const html = template();

  const root = document.getElementById('app');

  if (!root) {
    const div = document.createElement('div');
    div.setAttribute('id', 'app');
    div.innerHTML = html;
    document.body.append(div);
    return;
  }

  root.innerHTML = '';
  root.innerHTML = html;
}
