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

router.use('/series', checkRoleMd(['Simp']), seriesRouter)
router.use('/orders', checkRoleMd(['Simp']), ordersRouter)
router.use('/search', checkRoleMd(['Simp']), searchRouter)
router.use('/serial', checkRoleMd(['Simp']), serialRouter)
router.use('/popular', checkRoleMd(['Simp']), popularRouter)
router.use('/newest', checkRoleMd(['Simp']), newestRouter)
router.use('/all', checkRoleMd(['Simp']), allRouter)

router.get('/account', checkRoleMd(['Simp']), simpController.getAccount)
router.post('/account/change', checkRoleMd(['Simp']), simpController.changeInfo)
router.post('/account/sendReq', checkRoleMd(['Simp']), simpController.sendModReq)

module.exports = router