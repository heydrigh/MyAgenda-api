'use strict'

const Route = use('Route')
// User
Route.post('users', 'UserController.store')

// Sessions
Route.post('sessions', 'SessionController.store')

// Authenticated
Route.group(() => {
  Route.resource('contacts', 'ContactController').apiOnly()
}).middleware(['auth'])
