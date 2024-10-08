const Router = require('express')
const router = new Router()
const authorController = require('../controllers/author.controller')
const upload = require('../middlewares/upload.middleware')
const {authorSchema, updateAuthorSchema} = require('../validators/author.validator')
const { validateMiddleware } = require('../middlewares/validate.middleware')

router.post('/authors', upload.single('image'), validateMiddleware(authorSchema), authorController.create)
router.get('/authors', authorController.getAll)
router.get('/authors/search', authorController.searchByName)
router.get('/authors/:id', authorController.getOne)
router.get('/authors/:id/books', authorController.getAuthorBooks)
router.patch('/authors/:id', upload.single('image'),  validateMiddleware(updateAuthorSchema), authorController.update)
router.delete('/authors/:id', authorController.delete)

//сделал все основные эндпоинты которые были бы в поноценном приложении

module.exports = router