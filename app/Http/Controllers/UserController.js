'use strict'
 
const Validator = use('Validator')
const User = use('App/Model/User')
const Hash = use('Hash')
 
class UserController {
    *login(request, response) {
        const logged = yield request.auth.check()
        if (logged) {
            response.redirect('/')
        }
 
        yield response.sendView('login')
    }
 
    * doLogin(request, response) {
        const email = request.input('email')
        const password = request.input('password')
 
        try {
            yield request.auth.attempt(email, password)
 
            if (login) {
                response.redirect('/')
                return
            }
        }
        catch (err) {
            yield request
                .withAll()
                .andWith({
                    errors: [
                        {
                            message: 'Invalid credentails'
                        }
                    ]
                })
                .flash()
 
            response.redirect('login')
        }
    }
 
* ajaxLogin(request, response) {
    const email = request.input('email')
    const password = request.input('password')
	
    try {
      const login = yield request.auth.attempt(email, password)
      if (login) {
        response.send({ success: true })
        return
      }
    } 
    catch (err) {
      response.send({ success: false })
    }
  }

 
    *logout(request, response) {
        yield request.auth.logout()
        response.redirect('/')
    }
 
    * register(request, response) {
        const isLoggedIn = yield request.auth.check()
        if (isLoggedIn) {
            response.redirect('main')
        }
 
        yield response.sendView('register')
    }
 
    * doRegister(request, response) {
        const userData = request.all()
 
        const validation = yield Validator.validateAll(userData, {
        username: 'required|alpha_numeric|unique:users',
        email: 'required|email|unique:users',
        password: 'required',
        password_confirm: 'required|same:password'
        })
 
        if (validation.fails()) {
        yield request
            .withOut('password', 'password_confirm')
            .andWith({ errors: validation.messages() })
            .flash()
 
        response.route('register')
        return;
       
        }
       
        const user = new User()
        user.username = userData.username
        user.email = userData.email
        user.password = yield Hash.make(userData.password)
 
        yield user.save()
 
        yield request.auth.login(user)
       
        response.route('/')
}


* ajaxRegister(request, response) {
        const userData = request.all()
       
        const user = new User()
        user.username = userData.username
        user.email = userData.email
        user.password = yield Hash.make(userData.password)
 
        yield user.save()
 
        yield request.auth.login(user)
        response.send({ success: true })
        return
    }
 
}
 
module.exports = UserController