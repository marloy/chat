export const fields = [
  {
    name: 'login',
    type: 'text',
    label: 'Логин',
    attributes: 'autofocus'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Пароль'
  }
]

export const buttons = [
  {
    type: 'submit',
    label: 'Авторизоваться',
  }
]

export const link = {
  label: 'Нет аккаунта?',
  linkTo: 'renderPage(\'signup\')'
}