const db = require('../config/database')

module.exports = {
    Query: {
        async getUser(_, { id }){
            return await db('users').where({ id: id })
        }
    }
}