export const validate = {
  name: (str) => {
    const regex = /^[A-Za-zА-Яа-я]{3,12}$/

    return regex.test(str)
      ? { isValid: true }
      : {
          isValid: false,
          errorMessage:
            'Cyrillic and Latin characters allowed, not less than 3 and not more than 12 characters',
        }
  },

  email: (str) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

    return regex.test(str)
      ? { isValid: true }
      : {
          isValid: false,
          errorMessage: 'Enter a valid email address',
        }
  },
}
