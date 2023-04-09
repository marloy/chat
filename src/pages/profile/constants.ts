export const FIELDS = [
  {
    name: 'email',
    type: 'email',
    label: 'Почта',
    defaultValue: 'ivanivanov@pochta.ru'
  },
  {
    name: 'login',
    type: 'text',
    label: 'Логин',
    defaultValue: 'ivanivanov'
  },
  {
    name: 'first_name',
    type: 'text',
    label: 'Имя',
    defaultValue: 'Иван'
  },
  {
    name: 'second_name',
    type: 'text',
    label: 'Фамилия',
    defaultValue: 'Иванов'
  },
  {
    name: 'phone',
    type: 'tel',
    label: 'Телефон',
    defaultValue: '+7 (123) 456-78-90'
  }
];

export const BUTTONS = [
  {
    type: 'button',
    label: 'Изменить данные'
  },
  {
    type: 'button',
    label: 'Изменить пароль'
  },
  {
    type: 'button',
    label: 'Выйти',
    className: 'button_style_outline',
    onClick: 'renderPage(\'home\')'
  }
]