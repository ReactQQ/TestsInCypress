import pokemonData from '../fixtures/pokemon.json';

type PokemonData = {
  name: string
  id: number
  spritesCount: number
  baseExperience: number
  type: string
}

interface PokemonApiResponse {
  species: { name: string }
  forms: { name: string, url: string }[]
  id: number
  sprites: Record<string, unknown>
  base_experience: number
  types: { type: { name: string } }[]
  abilities: unknown[]
  height: number
  stats: any[]
  moves: any[]
  weight: number
}

describe('Data Driven Test for an API using Cypress', () => {
  const pokemonDataJson: PokemonData[] = pokemonData;
  pokemonDataJson.forEach((pokemon) => {
    it(`Should validate "${pokemon.name}" Pokemon details from PokeAPI based on JSON data`, () => {
      cy.request(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then((response: Cypress.Response<PokemonApiResponse>) => {

          expect(response.status, `API request for ${pokemon.name} should return a 200 status`)
            .to.eq(200);

          const body: Record<string, any> = response.body
          expect(body.species.name, `Name check - spicies.name should be ${pokemon.name}`)
            .to.eq(pokemon.name)
          expect(body.forms[0].name, `Name check -forms.name should be ${pokemon.name}`)
            .to.eq(pokemon.name)
          expect(body.id, 'Pokemon id should match')
            .to.eq(pokemon.id)
          expect(Object.keys(body.sprites).length, `Length of sprites object should equal to ${pokemon.spritesCount}`)
            .to.eq(pokemon.spritesCount)
          expect(body.base_experience, 'Verifing base experience property value')
            .to.eq(pokemon.baseExperience)
          expect(body.types[0].type.name, 'Checking the type of pokemon')
            .to.eq(pokemon.type)

          // AI created
          expect(body.abilities, 'Abilities should be an array and not empty')
            .to.be.an('array').to.have.lengthOf.above(0)
          expect(body.base_experience, 'Base experience should be a number greater than 0')
            .to.be.a('number').and.greaterThan(0);
          expect(body.height, 'Height should be a number greater than 0')
            .to.be.a('number').and.greaterThan(0);
          expect(body.stats, 'Stats should be an array and not empty')
            .to.be.an('array').and.to.have.lengthOf.above(0)
          expect(body.moves, 'Moves should be an array and not empty')
            .to.be.an('array').and.to.have.lengthOf.above(0)
          expect(body.types, 'Types should be an array and not empty')
            .to.be.an('array').and.to.have.lengthOf.above(0)
          expect(body.sprites, 'Sprites should have a front_default property that is a non-empty string')
            .to.have.property('front_default').that.is.a('string').and.to.have.lengthOf.above(0)
          expect(body.weight, 'Weight should be a number greater than 0')
            .to.be.a('number').and.greaterThan(0)
          expect(body.stats[0], 'First stat should have a base_stat property that is a number greater than 0')
            .to.have.property('base_stat').that.is.a('number').and.greaterThan(0)
        })

    })


    it(`Should retrieve and validate "${pokemon.name}" Pokemon details from GET request data`, () => {

      cy.request(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then((response: Cypress.Response<PokemonApiResponse>) => {
          cy.request(`${response.body.forms[0].url}`)
            .then((secondResponse) => {
              expect(secondResponse.body.name).is.eq(pokemon.name)
              expect(secondResponse.body.id).is.eq(pokemon.id)
            })
        })

    })

  })

})
