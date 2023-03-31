export const FORMS = {
  signin: {
    title: 'Вход',
    form: {
      fields: [
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
      ],
      buttons: [
        {
          type: 'submit',
          label: 'Авторизоваться',
        }
      ],
    },
    link: {
      label: 'Нет аккаунта?',
      linkTo: 'renderPage(\'signup\')'
    },
  },
  signup: {
    title: 'Регистрация',
    form: {
      fields: [
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
      ],
      buttons: [
        {
          type: 'submit',
          label: 'Зарегистрироваться',
        }
      ]
    },
    link: {
      label: 'Войти',
      linkTo: 'renderPage(\'signin\')'
    }
  }
}