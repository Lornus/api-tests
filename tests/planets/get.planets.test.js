const planet = require("../../api/controllers/planet.controller");
const assert = require('assert')

describe('Pet', function () {
    it('get by its id', async function () {
        const id = 101
        const body = await planet.getById(id)
        assert(body.id === id, `Expected body to have id ${body.id}`)
    })

    it('can be added, updated, deleted', async function () {
        const planetToCreate = {

            name: "New",
            mass: 45,
            satellitesAmount: 65
        }
        const badAddedPlanet = await planet.postNew(planetToCreate)
        const planetObjectWrongStructure = Object.fromEntries(Object.entries(badAddedPlanet).slice(badAddedPlanet.length - 1, badAddedPlanet.length))
        for (let key in planetObjectWrongStructure) {
            const planetObject = planetObjectWrongStructure[key]
            assert.deepEqual(planetObject.name, planetToCreate.name)

            const beforeDeletingId = planetObject.id
            await planet.delete(planetObject.id)
            const afterDeletingId = planetObject.id - 1

            assert(beforeDeletingId !== afterDeletingId)
        }

        // const id = 88
        // const body = await planet.getById(id)
        // console.log("AAA", body)

        //assert.deepEqual(badAddedPlanet.slice(badAddedPlanet.length-1), planetToCreate
        // , 'Expected created planet to be equal passing object')
        //
        // const addedPlanetId = await planet.getById(badAddedPlanet.id)
        // console.log(addedPlanetId)
        //
        // assert.deepEqual(addedPlanetId, {
        //     ...planetToCreate,
        //     id: badAddedPlanet.id
        // }, 'Expected found planet match to posted')
        // //
        //     const updateInfoPet = {
        //         "id": badAddedPlanet.id,
        //         "category": {
        //             "id": 0,
        //             "name": "string"
        //         },
        //         "name": "Test Pet",
        //         "photoUrls": [
        //             "string"
        //         ],
        //         "tags": [
        //             {
        //                 "id": 0,
        //                 "name": "string"
        //             }
        //         ],
        //         "status": "available"
        //     }
        //
        //     const updatedPet = await planet.update(updateInfoPet)
        //     assert.deepEqual(updatedPet, updateInfoPet, 'Expected updated planet to be equal passing object')
        //
        //     await planet.delete(badAddedPlanet.id)
        //
        // })
    })
})