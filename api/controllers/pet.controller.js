const got = require('got')
const baseUrl = 'https://petstore.swagger.io/v2/pet'

 class PetController {
    async getById(id) {
        const response = await got(`${baseUrl}/${id}`)
        return JSON.parse(response.body)
    }

    async getByStatus(status) {
        const endpoint = 'findByStatus'
        const response = await got(`${baseUrl}/${endpoint}?`,
            {
                searchParams: new URLSearchParams({status: `${status}`})
            })
        return JSON.parse(response.body)
    }

    async getByTag(tag) {
        const endpoint = 'findByTags'
        const response = await got(`${baseUrl}/${endpoint}?`,
            {
                searchParams: new URLSearchParams({tags: `${tag}`})
            })
        return JSON.parse(response.body)
    }
}

module.exports = new PetController()