const Router = require('express')
const router = new Router()
const {bookSchema, updateBookSchema} = require('../validators/book.validator')
const { validateMiddleware } = require('../middlewares/validate.middleware')
const bookController = require('../controllers/book.controller')

router.post('/books', validateMiddleware(bookSchema), bookController.create)
router.get('/books', bookController.getAll)
router.get('/books/:id', bookController.getOne)
router.patch('/books/:id', validateMiddleware(updateBookSchema), bookController.update)
router.delete('/books/:id', bookController.delete)

module.exports = router