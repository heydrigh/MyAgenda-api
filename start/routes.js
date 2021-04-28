'use strict'

const Route = use('Route')
// User
Route.post('users', 'UserController.store').validator('User')

// Sessions
Route.post('sessions', 'SessionController.store').validator('Session')

// Authenticated
Route.group(() => {
  Route.resource('contacts', 'ContactController').apiOnly().validator('Contact')
}).middleware(['auth'])
