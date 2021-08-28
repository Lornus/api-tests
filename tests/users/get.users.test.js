const pet = require("../../api/controllers/pet.controller");

const assert = require('assert')

describe('Pet',  function () {
    it('get by its id', async function () {
        const id = 9223372000666056127
        const body = await pet.getById(id)
        assert(body.id === id, `Expected body to have id ${body.id}`)
    })

    it('get by its status', async function () {
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

    it('get by its tag', async function () {
        const tags = 'amet'
        const body = await pet.getByTag(tags)
        assert(body.every(pet =>
                pet.tags.some(tag =>
                    tag.name === `${tags}`)
            )
        )
    })

    it('can be added, updated, deleted', async function (){
        const petToCreate =  {
            "category": {
            "id": 0,
                "name": "string"
        },
            "name": "Updated test Pet",
            "photoUrls": [
            "string"
        ],
            "tags": [
            {
                "id": 0,
                "name": "string"
            }
        ],
            "status": "pending"
        }
        const addedPet = await pet.postNew(petToCreate)
        assert.deepEqual(addedPet, {
            ...petToCreate,
            id: addedPet.id
        }, 'Expected created pet to be equal passing object')

       const addedPetId = await pet.getById(addedPet.id)

        assert.deepEqual(addedPetId, {
            ...petToCreate,
            id: addedPet.id
        }, 'Expected found pet match to posted')

        const updateInfoPet = {
            "id": addedPet.id,
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": "Test Pet",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": "available"
        }

        const updatedPet = await pet.update(updateInfoPet)
        assert.deepEqual(updatedPet, updateInfoPet, 'Expected updated pet to be equal passing object')

        await pet.delete(addedPet.id)

    })
})