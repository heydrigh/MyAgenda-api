'use strict'

class Contact {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      email: 'required|email',
      name: 'required',
      lastname: 'required',
      phone: 'required',
      address: 'required',
      birthday: 'required'
    }
  }
}

module.exports = Contact
