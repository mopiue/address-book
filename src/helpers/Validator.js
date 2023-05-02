export const validate = {
  name: (str) => {
    const regex = /^[A-Za-zА-Яа-я]{3,12}$/

    return regex.test(str)
      ? { isValid: true }
      : {
          isValid: false,
          errorMessage:
            'Допускается кириллица и латиница, неменьше 3 и небольше 12 символов',
        }
  },

  email: (str) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

    return regex.test(str)
      ? { isValid: true }
      : {
          isValid: false,
          errorMessage: 'Укажите валидный адрес электронной почты',
        }
  },
}
