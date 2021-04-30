'use strict'

const Route = use('Route')
// User
Route.post('users', 'UserController.store').validator('User')

// Sessions
Route.post('sessions', 'SessionController.store').validator('Session')

// Authenticated
Route.group(() => {
  Route.post('contacts', 'ContactController.store').validator('Contact')
  Route.get('contacts', 'ContactController.index')
  Route.get('contacts/:id', 'ContactController.show')
  Route.put('contacts/:id', 'ContactController.update')
  Route.delete('contacts/:id', 'ContactController.destroy')
}).middleware(['auth'])
