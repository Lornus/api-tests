const got = require('got')
const assert = require('assert')

describe('User can', function (){
        it('get user by id',  async function (){
        const response = got('https://npplanets.herokuapp.com/users/6036a50333d65c355e25f050')
        //const body = JSON.parse(response.body)
        // assert(body.id == 6036a50333d65c355e25f050, `Expectet body to have ID ${body.id}` )
        assert(response === true)

    })
})