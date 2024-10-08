const fileManager = require('../helpers/file-manager.js');
const authorModel = require('../models/author.model.js');
const bookModel = require('../models/book.model.js');


class AuthorController{
    async create(req, res){
        try {
            const file = req.file
            let image_url = null
            if(file){
                const fileName = await fileManager.createFile(file)
                image_url = `${process.env.CURRENT_URL}media/${fileName}`
            }
            const author = await authorModel.create({...req.body, image_url});
            res.status(201).json(author);
        } catch (err) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
    }
    async getOne(req, res){
        try {
            const id = +req.params.id; 
            const author = await authorModel.getOne(id)
            if(author){
                res.status(200).json(author);
            }else{
                res.status(404).json({ message: 'Author not found' });
            }
        } catch (err) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
    }
    async getAll(req, res){
        try {
            const page = +req.query.page || 1
            const offset = (page-1) * 30
            const authors = await authorModel.getAll(offset)
            res.status(200).json(authors);
        } catch (err) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
    }
    async update(req, res){
        try {
            const updateAuthorDto = req.body
            const id = +req.params.id; 
            const author = await authorModel.getOne(id)
            const oldImageUrl = author.image_url
            if(author){
                const file = req.file
                if(file){
                    if(oldImageUrl){
                        const oldImageName = oldImageUrl.split('/').at(-1)
                        await fileManager.deleteFile(oldImageName)
                    }
                    const fileName = await fileManager.createFile(file)
                    const image_url = `${process.env.CURRENT_URL}media/${fileName}`
                    updateAuthorDto.image_url = image_url
                }
                else{
                    if('image_url' in updateAuthorDto && !updateAuthorDto.image_url){
                        if(oldImageUrl){
                            const oldImageName = oldImageUrl.split('/').at(-1)
                            await fileManager.deleteFile(oldImageName)
                        }
                        updateAuthorDto.image_url = null
                    }
                }
                const updatedAuthor = await authorModel.update(id, updateAuthorDto)
                if(updatedAuthor){
                    res.status(200).json(updatedAuthor);
                }else{
                    throw new Error('Updating error')
                }
            }else{
                res.status(404).json({ message: 'Author not found' });
            }
        } catch (err) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
    }
    async delete(req, res){
        try {
            const id = +req.params.id; 
            const author = await authorModel.getOne(id)
            const oldImageUrl = author.image_url
            if(author){
                const deletedAuthor = authorModel.delete(id)
                if(deletedAuthor){
                    if(oldImageUrl){
                        const oldImageName = oldImageUrl.split('/').at(-1)
                        await fileManager.deleteFile(oldImageName)
                    }
                    res.status(200).json({message: "Author successfully deleted"});
                }else{
                    throw new Error('Deleting error')
                }
            }else{
                res.status(404).json({ message: 'Author not found' });
            }
        } catch (err) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
    }
    async getAuthorBooks(req, res){
        try {
            const id = +req.params.id; 
            const author = await authorModel.getOne(id)
            if(author){
                const books = await bookModel.getAllByAuthorId(id)
                res.status(200).json(books);
            }else{
                res.status(404).json({ message: 'Author not found' });
            }
        } catch (err) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
    }
    async searchByName(req, res){
        try {
            const searchLine = req.query.search

            if (!searchLine) {
                return res.status(400).json({ message: 'Search parameter is required' });
            }

            const authors = await authorModel.searchByName(searchLine)
            res.status(200).json(authors);
        } catch (err) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
    }
}

module.exports = new AuthorController()