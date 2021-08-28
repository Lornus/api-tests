const jsonRequest = require('../request')
const baseUrl = 'https://petstore.swagger.io/v2/pet'

class PetController {
    async getById(id) {
        return (
            await jsonRequest.url(`${baseUrl}/${id}`)
                .send()
        ).body
    }

    async getByStatus(status) {
        const endpoint = 'findByStatus'
        return (await jsonRequest.url(`${baseUrl}/${endpoint}?`)
                .searchParams(`${status}`)
                .send()
        ).body
    }

    async getByTag(tag) {
        const endpoint = 'findByTags'
        return (await jsonRequest.url(`${baseUrl}/${endpoint}?`)
                .searchParams(`${tag}`)
                .send()
        ).body
    }

    async postNew(pet) {
        return (await jsonRequest.url(`${baseUrl}`)
                .method('POST')
                .body(pet)
                .send()
        ).body
    }

    async update(pet) {
        return (await jsonRequest.url(`${baseUrl}`)
                .method('PUT')
                .body(pet)
                .send()
        ).body
    }

    async delete(id) {
        return (await jsonRequest.url(`${baseUrl}/${id}`)
                .method('DELETE')
                .send()
        ).body
    }

}

module.exports = new PetController()