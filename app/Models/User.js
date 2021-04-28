'use strict'

const Model = use('Model')

const Hash = use('Hash')

class User extends Model {
  static get hidden() {
    return ['password']
  }

  static boot() {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  contacts() {
    return this.hasMany('App/Models/Contact')
  }

  tokens() {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
