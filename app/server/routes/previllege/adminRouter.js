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

router.use('/series', checkRoleMd(['Admin']), seriesRouter)
router.use('/search', checkRoleMd(['Admin']), searchRouter)
router.use('/serial', checkRoleMd(['Admin']), serialRouter)
router.use('/popular', checkRoleMd(['Admin']), popularRouter)
router.use('/newest', checkRoleMd(['Admin']), newestRouter)
router.use('/all', checkRoleMd(['Admin']), allRouter)
router.use('/orders', checkRoleMd(['Admin']),)

router.route('/adding', checkRoleMd(['Admin']))
    .get()
    .post()

router.get('/query', checkRoleMd(['Admin']),)
router.post('/query/:id', checkRoleMd(['Admin']),)

module.exports = router