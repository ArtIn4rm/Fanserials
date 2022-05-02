const Router = require('express')   
const router = new Router()
const checkRoleMd = require('../../middleware/checkRoleMd')

router.get('/list',)
router.get('/list/:page',)
router.post('/list/answer/:id', checkRoleMd(['Moderator']))

module.exports = router