const jsonRequest = require('../request')
const baseUrl = 'http://localhost:2120/api/planets'

class PlanetController {
    async getById(id) {
        return (
            await jsonRequest.url(`${baseUrl}/${id}`)
                .send()
        ).body
    }



    //
    async postNew(planet) {
        return (await jsonRequest.url(`${baseUrl}`)
                .method('POST')
                .body(planet)
                .send()
        ).body
    }
    //
    async update(pet) {
        return (await jsonRequest.url(`${baseUrl}`)
                .method('PUT')
                .body(pet)
                .send()
        ).body
    }
    //
    async delete(id) {
        return (await jsonRequest.url(`${baseUrl}/${id}`)
                .method('DELETE')
                .send()
        ).body
    }

}

module.exports = new PlanetController()