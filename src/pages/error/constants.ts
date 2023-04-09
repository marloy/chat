import { PageName } from "../types";

export const ERRORS = {
  [PageName.NotFound]: {
    status: '404',
    description: 'Не туда попали',
    link: {
      label: 'Назад к чатам',
      linkTo: 'renderPage(\'home\')'
    }
  },
  [PageName.InternalServerError]: {
    status: '500',
    description: 'Мы уже фиксим',
    link: {
      label: 'Назад к чатам',
      linkTo: 'renderPage(\'home\')'
    }
  }
}