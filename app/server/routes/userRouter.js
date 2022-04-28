const Router = require('express')
const router = new Router()
const authMd = require('../middleware/authMd')
const userController = require('../controllers/userController')
const moderatorRouter = require('./previllege/moderatorRouter')
const adminRouter = require('./previllege/adminRouter')
const simpRouter = require('./previllege/simpRouter')

router.post('/registrate', userController.registrate)
router.post('/login', userController.login)
router.get('/auth', authMd, userController.auth)

router.use('/moderator', moderatorRouter)
router.use('/admin', adminRouter)
router.use('/simp', simpRouter)

module.exports = router