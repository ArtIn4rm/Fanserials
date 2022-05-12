const ApiError = require('../errors/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {user: User, role: Role, user_status: User_status} = require('../models/model')

const generateJwt = (id, email, role) => {
    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

class UserController{
    async registrate(req, res, next){
        const {email, password, role, info} = req.body
        if(!email || !password || !role){
            return next(ApiError.badRequest("not correct data"))
        }
        const candidate = await User.findOne({where: {email}})
        if(candidate){
            return next(ApiError.badRequest("email is using"))
        }
        let hashPassword = await bcrypt.hash(password, 5)

        let roleId = await Role.findOne({where: {name: role}})
        if(!roleId){
            roleId = await Role.create({name: role})
        }

        let statusId = await User_status.findOne({where: {name: "Authorized"}})
        if(!statusId){
            statusId = await User_status.create({name: "Authorized"}, {fields: ['name']})
        }

        let user = User.create({role: roleId.id, status: statusId.id, email: email, password: hashPassword, 
            avatar: "default_avatar.jpg", username: info.username, surname: info.surname, name: info.name})
        
        const token = generateJwt(user.id, email, role)
        return res.json({token})
    }

    async login(req, res, next){
        const {email, password} = req.body
        let user = await User.findOne({where: {email}, include:[{model: Role, as: 'role_role'}]})

        if(!user){
            return next(ApiError.badRequest('user with this email not found'))
        }
        let cmp = bcrypt.compareSync(password, user.password)
        if(!cmp){
            return next(ApiError.badRequest('password not correct'))
        }
        const token = generateJwt(user.id, email, user.role_role.name)
        return res.json({token})
    }

    async auth(req, res){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()