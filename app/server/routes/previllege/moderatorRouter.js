const Router = require('express')
const router = new Router()
const serialRouter = require('./serialRouter')
const seriesRouter = require('./routines/seriesRouter')
const ordersRouter = require('./routines/ordersRouter')
const searchRouter = require('./routines/searchRouter')
const popularRouter = require('./routines/popularRouter')
const newestRouter = require('./routines/newestRouter')
const allRouter = require('./routines/allRouter')
const checkRoleMd = require('../../middleware/checkRoleMd')

router.use('/series', checkRoleMd(['Moderator']), seriesRouter)
router.use('/search', checkRoleMd(['Moderator']), searchRouter)
router.use('/serial', checkRoleMd(['Moderator']), serialRouter)
router.use('/popular', checkRoleMd(['Moderator']), popularRouter)
router.use('/newest', checkRoleMd(['Moderator']), newestRouter)
router.use('/all', checkRoleMd(['Moderator']), allRouter)

router.get('/account', checkRoleMd(['Simp']), simpController.getAccount)
router.post('/account/change', checkRoleMd(['Simp']), simpController.changeInfo)

router.use('/orders', checkRoleMd(['Moderator']),)

module.exports = router