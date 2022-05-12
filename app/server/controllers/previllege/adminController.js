const ApiError = require('../../errors/apiError')

class AdminController{
    async manage(req, res){
        switch(req.info.code){
            case 'serial' : { return await addSerial(req, res)}
            case 'seria' : { return await addSeria(req, res)}
            case 'studio' : { return await addStudio(req, res)}
            case 'task' : { return await taskReady(req, res)}
            case 'answer' : { return await answerMod(req, res)}
            default: {return next(ApiError.badRequest("not correct code"))}
        }
    }

    async getOrders(req, res){

    }

    async getQuerys(req, res){

    }

    async answerQuerys(req, res){

    }

    async addSerial(req, res){

    }

    async addSeria(req, res){

    }

    async addStudio(req, res){
        
    }

    async taskReady(req, res){
        
    }

    async answerMod(req, res){
        
    }
}

module.exports = new AdminController()