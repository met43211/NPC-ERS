const db = require('../db/db')

class Author {
    async create(authorDto){
        const fields = Object.keys(authorDto)
        const fieldsLine = fields.join(", ")
        const placeholdersLine = fields.map((_, i) => `$${i + 1}`).join(", ")
        const values = Object.values(authorDto)
        const authors = await db.query(
            `INSERT INTO authors (${fieldsLine}) VALUES (${placeholdersLine}) RETURNING *`
            , values)
        return authors[0]
    }
    async getOne(id){
        const authors = await db.query(`SELECT * FROM authors WHERE id=$1`, [id])
        return authors[0]
    }
    async getAll(offset){
        return await db.query(`SELECT * FROM authors LIMIT 30 OFFSET $1`, [offset])
    }
    async update(id, authorDto){
        const fields = Object.keys(authorDto)
        const updateLines = fields.map((field, i)=> `${field} = $${i+1}`)
        const fullUpdateLine = updateLines.join(", ")
        const values = [...Object.values(authorDto), id];
        const authors = await db.query(`UPDATE authors SET ${fullUpdateLine} WHERE id = $${fields.length + 1} RETURNING *`,
            values
        )
        return authors[0]
    }
    async delete(id){
        const authors = await db.query(`DELETE FROM authors WHERE id=$1 RETURNING *`, [id])
        return authors[0]
    }
    async searchByName(line){
        const authors = await db.query(
            `SELECT name, second_name, patronymic, id
             FROM authors 
             WHERE name ILIKE $1 
             OR second_name ILIKE $1 
             OR patronymic ILIKE $1`,
            [`%${line}%`]
        )
        return authors;
    }
}

module.exports = new Author()