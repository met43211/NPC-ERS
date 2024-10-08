const db = require('../db/db')

class Book {
    async create(authorDto){
        const fields = Object.keys(authorDto)
        const fieldsLine = fields.join(", ")
        const placeholdersLine = fields.map((_, i) => `$${i + 1}`).join(", ")
        const values = Object.values(authorDto)
        const books = await db.query(
            `INSERT INTO books (${fieldsLine}) VALUES (${placeholdersLine}) RETURNING *`
            , values)
        return books[0]
    }
    async getOne(id){
        const books = await db.query(`
            SELECT b.*, a.second_name AS author_second_name
            FROM books b
            JOIN authors a ON b.author_id = a.id
            WHERE b.id = $1`, 
            [id]
        );
        return books[0]
    }
    async getAll(offset){
        return await db.query(`
            SELECT b.*, a.second_name AS author_second_name
            FROM books b
            JOIN authors a ON b.author_id = a.id
            ORDER BY b.id
            LIMIT 30 OFFSET $1`, 
            [offset]
        );
    }
    async update(id, authorDto){
        const fields = Object.keys(authorDto)
        const updateLines = fields.map((field, i)=> `${field} = $${i+1}`)
        const fullUpdateLine = updateLines.join(", ")
        const values = [...Object.values(authorDto), id];
        const books = await db.query(`UPDATE books SET ${fullUpdateLine} WHERE id = $${fields.length + 1} RETURNING *`,
            values
        )
        return books[0]
    }
    async delete(id){
        const books = await db.query(`DELETE FROM books WHERE id=$1 RETURNING *`, [id])
        return books[0]
    }
    async getAllByAuthorId(id){
        return await db.query(`SELECT * FROM books WHERE author_id=$1`, [id])
    }
}

module.exports = new Book()

