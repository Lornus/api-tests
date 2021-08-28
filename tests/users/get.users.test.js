const pet = require("../../api/controllers/pet.controller");

const assert = require('assert')

describe('User can', function () {
    it('get user by its id', async function () {
        const id = 23156772
        const body = await pet.getById(id)
        assert(body.id === id, `Expected body to have id ${body.id}`)
    })
})

describe('User can', function () {
    it('get pet by its status', async function () {
        const states = ['available', 'sold', 'pending',]
        states.map(async status => {
            const body = await pet.getByStatus(status)
            assert(body.length > 0)
        })
        const body = await pet.getByStatus(['sold', 'available'])
        assert(body.length > 0)
        assert(body.some(pet => pet.status === 'sold'))
        assert(body.some(pet => pet.status === 'available'))
        assert(body.some(pet => pet.status !== 'available'))
    })
})

describe('User can', function () {
    it('get pet by its tag', async function () {
        const tags = 'amet'
        const body = await pet.getByTag(tags)
        assert(body.every(pet =>
                pet.tags.some(tag =>
                    tag.name === `${tags}`)
            )
        )
    })
})
