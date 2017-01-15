'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

//Route.on('/').render('welcome')
Route.get('/', 'MovieController.index')

Route.get('/login', 'UserController.login')
Route.post('/login', 'UserController.doLogin')
Route.get('/logout', 'UserController.logout')
Route.get('/register', 'UserController.register')
Route.post('/register', 'UserController.doRegister')

Route.get('/movies/:id', 'MovieController.show')

Route.get('/create', 'MovieController.createMovie').as('movieCreate').middleware('auth')
Route.post('/create', 'MovieController.doCreateMovie').middleware('auth')
Route.get('/movies/:id/reserve', 'MovieController.reserveMovie').as('movieReserve')
Route.post('/movies/:id/reserve', 'MovieController.doReserveMovie')

Route.group('ajax', function () {
  Route.post('/login', 'UserController.ajaxLogin')
  Route.post('/register', 'UserController.ajaxRegister')
  Route.post('/create', 'MovieController.ajaxCreateMovie')
}).prefix('/ajax')