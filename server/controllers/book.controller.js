const authorModel = require('../models/author.model.js');
const bookModel = require('../models/book.model.js');


class BookController{
    async create(req, res){
        try {
            const authorId = req.body.author_id
            const author = await authorModel.getOne(authorId)
            if(author){
                const book = await bookModel.create(req.body);
                res.status(201).json(book);
            }else{
                res.status(404).json({ message: 'Author not found' });
            }
        } catch (err) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
    }
    async getOne(req, res){
        try {
            const id = +req.params.id; 
            const book = await bookModel.getOne(id)
            if(book){
                res.status(200).json(book);
            }else{
                res.status(404).json({ message: 'Book not found' });
            }
        } catch (err) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
    }
    async getAll(req, res){
        try {
            const page = +req.query.page || 1
            const offset = (page-1) * 30
            const books = await bookModel.getAll(offset)
            res.status(200).json(books);
        } catch (err) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
    }
    async update(req, res){
        try {
            const authorId = req.body.author_id
            if(authorId){
                const author = await authorModel.getOne(authorId)
                if(author){
                    const updateBookDto = req.body
                    const id = +req.params.id; 
                    const book = await bookModel.getOne(id)
                    if(book){
                        const updatedBook = await bookModel.update(id, updateBookDto)
                        if(updatedBook){
                            res.status(200).json(updatedBook);
                        }else{
                            throw new Error('Updating error')
                        }
                    }else{
                        res.status(404).json({ message: 'Book not found' });
                    }
                }else{
                    res.status(404).json({ message: 'Author not found' });
                }
            }
        } catch (err) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
    }
    async delete(req, res){
        try {
            const id = +req.params.id; 
            const book = await bookModel.getOne(id)
            if(book){
                const deletedBook = bookModel.delete(id)
                if(deletedBook){
                    res.status(200).json({message: "Book successfully deleted"});
                }else{
                    throw new Error('Deleting error')
                }
            }else{
                res.status(404).json({ message: 'Book not found' });
            }
        } catch (err) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
    }
}

module.exports = new BookController()