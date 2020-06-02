/* eslint-disable no-unused-vars */
const data = {
  form: {
    legend: 'Добавить комментарий к книге',
    fields: [
      {
        type: 'input',
        modifier: 'text',
        text: 'Имя'
      },
      {
        type: 'input',
        modifier: 'email',
        text: 'E-mail'
      },
      {
        type: 'input',
        modifier: 'select',
        text: 'Выберите книгу',
        list: [
          'JavaScript ниндзя',
          'Pragmatic Guide to JavaScript',
          'Pro JavaScript Techniques',
          'Выразительный JavaScript'
        ]
      },
      {
        type: 'textarea',
        modifier: 'textarea',
        text: 'Ваш отзыв'
      },
      {
        type: 'input',
        modifier: 'submit',
        text: 'Отправить'
      }
    ]
  }
};
