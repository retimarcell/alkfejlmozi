'use strict'

const Database = use('Database')
const Category = use('App/Model/Category')
const Movie = use('App/Model/Movie')
const Validator = use('Validator')

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
        }

        const movie = yield Movie.create(movieData)
        response.redirect('/')
    }
}

module.exports = MovieController
