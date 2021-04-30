/* eslint-disable camelcase */
'use strict'

const Contact = use('App/Models/Contact')

class ContactController {
  async index({ auth }) {
    const user_id = auth.user.id

    const contact = await Contact.query().where({ user_id }).fetch()
    return contact
  }

  async store({ request, response, auth }) {
    const data = request.only([
      'name',
      'email',
      'lastname',
      'address',
      'phone',
      'birthday'
    ])

    const dataToSave = {
      ...data,
      user_id: auth.user.id
    }

    const savedContact = await Contact.create(dataToSave)

    return savedContact
  }

  async show({ params, request, response, view }) {
    const contact = await Contact.findOrFail(params.id)

    return contact
  }

  async update({ params, request, response }) {
    const contact = await Contact.findOrFail(params.id)
    const data = request.only([
      'name',
      'email',
      'lastname',
      'address',
      'phone',
      'birthday'
    ])
    contact.merge(data)

    await contact.save()

    return contact
  }

  async destroy({ params, request, response }) {
    const project = await Contact.findOrFail(params.id)

    await project.delete()
  }
}

module.exports = ContactController
