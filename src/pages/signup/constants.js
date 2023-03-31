export const fields = [
  {
    name: 'login',
    type: 'text',
    label: 'Логин',
    attributes: 'autofocus'
  },
  {
    name: 'email',
    type: 'email',
    label: 'Почта'
  },
  {
    name: 'first_name',
    type: 'text',
    label: 'Имя'
  },
  {
    name: 'second_name',
    type: 'text',
    label: 'Фамилия'
  },
  {
    name: 'phone',
    type: 'tel',
    label: 'Телефон'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Пароль'
  },
  {
    name: 'password_repeat',
    type: 'password',
    label: 'Пароль (ещё раз)'
  }
]

export const buttons = [
  {
    type: 'submit',
    label: 'Зарегистрироваться',
  }
]

export const link = {
  label: 'Войти',
  linkTo: 'renderPage(\'signin\')'
}