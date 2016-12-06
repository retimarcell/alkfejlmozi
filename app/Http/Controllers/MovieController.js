'use strict'
 
const Database = use('Database')
const Category = use('App/Model/Category')
const Movie = use('App/Model/Movie')
const Reserved = use('App/Model/Reserveds')
const Validator = use('Validator')
const fs = use('fs')
 
class MovieController {
 
    * index(request, response) {
        const categories = yield Category.all()
 
        for (let category of categories) {
            const movies = yield category.movies().limit(3).fetch();
            category.topMovies = movies.toJSON();
        }
 
        yield response.sendView('main', {
            name: '',
            categories: categories.toJSON()
        })
    }
 
    * show(request, response) {
        const id = request.param('id');
        const movie = yield Movie.find(id);
        yield movie.related('category').load();
        yield response.sendView('movieShow', {
            movie: movie.toJSON()
        })
    }
 
    *createMovie(request,response) {
        const categories = yield Category.all()
        yield response.sendView('movieCreate', {
            categories: categories.toJSON()
        })
    }
 
    *doCreateMovie(request,response) {
        const movieData = request.except('_csrf');
 
        const rules = {
            name: 'required',
            description: 'required',
            hossz: 'required',
            category_id: 'required'
        };
 
        const validation = yield Validator.validateAll(movieData, rules)
 
        if (validation.fails()) {
            yield request
                .withAll()
                .andWith({errors: validation.message()})
                .flash()
            response.redirect('back')
            return
        } else {
            const newmovie = new Movie()
            newmovie.name = movieData.name
            newmovie.description = movieData.description
            newmovie.hossz = movieData.hossz
            newmovie.category_id = movieData.category_id
            yield newmovie.save()
            response.redirect('/')
        }
 
        //const movie = yield Movie.create(movieData)
        
    }
 
    *reserveMovie(request, response) {
        const movieID = request.param('id')
        const movie = yield Movie.find(movieID)
        const seats = yield Reserved.all()
 
        if (movie) {
            yield response.sendView('movieReserve', {
                movie: movie.toJSON(),
                seats: seats.toJSON()
            })
        }
    }
 
    *doReserveMovie(request,response) {
        const reserveData = request.all()
        const movieID = request.param('id')
        const movie = yield Movie.find(movieID)
 
        const seats = yield Reserved.all()
        const seatID = yield Reserved.ids()
        var i;
 
        for (i = 0; i < seats.count; i++) {
            if (reserveData == 1) {
                const tmp = yield Reserved.find(ids[i]);
                tmp.taken = 1;
                yield tmp.update();
            }
        }
        response.route('/')
    }
}
 
module.exports = MovieController