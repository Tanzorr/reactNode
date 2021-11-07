const AppError = require('../error/ApiError');

class UserController{
    async registration(req, res){

    }

    async login(req, res){

    }

    async check (req, res, next){
        const {id} = req.query
        if(!id){
            return next(AppError.badRequest('Have no Id'))
        }
        res.json(id)
    }
}

module.exports = new UserController();