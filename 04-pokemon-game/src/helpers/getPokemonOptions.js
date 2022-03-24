import pokemonApi from "../api/pokemonA";

const getPokemons = () => {
    const pokemonsArr = Array.from( Array(650) );

    return pokemonsArr.map( (el, i) => i +1)

}

const getPokemonsOptions = async () => {

    const mixedPokemons = getPokemons().sort( () => Math.random() - 0.5  )

    const pokemons = await getPokemonsNames(mixedPokemons.slice(0,4))
    try {
        return pokemons
        
    } catch (error) {
        console.log(error);
    }
}

const getPokemonsNames = async (  [a,b,c,d] = [] ) => {
    // const req = await pokemonApi(`/1`)

    const promiseArr =  [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ];
    const [p1, p2, p3, p4] =  await Promise.all(promiseArr)
    
    try {
        return [{name:p1.data.name, id: p1.data.id},
            {name:p2.data.name, id: p2.data.id},
            {name:p3.data.name, id: p3.data.id},
            {name:p4.data.name, id: p4.data.id}]
            
           
    } catch (error) {
        console.log(error);
    }
}

export default getPokemonsOptions;