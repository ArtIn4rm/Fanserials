const Router = require('express')
const router = new Router()

const checkRoleMd = require('../middleware/checkRoleMd')

router.get('/:serial/list', )
router.get('/:serial/list/:page',)
router.get('/:serial/:season/list/',)
router.get('/:serial/:season/list/:page',)
router.get('/:serial/:season/:seria',)
router.post('/:serial/:season/:seria/comment', checkRoleMd(['Simp', 'Moderator', 'Admin']))
router.post('/:serial/:season/:seria/mark', checkRoleMd(['Simp', 'Moderator', 'Admin']))
router.post('/:serial/:season/:seria/:studio', )
router.post('/:serial/:season/:seria/like', checkRoleMd(['Simp', 'Moderator', 'Admin']))
router.delete('/:serial/:season/:seria/delete', checkRoleMd(['Moderator', 'Admin']))

module.exports = router