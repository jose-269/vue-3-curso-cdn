import getPokemonOptions, {
  getPokemons,
  getPokemonsNames,
} from "@/helpers/getPokemonOptions";

describe("getPokemonsOptoins", () => {
  test("debe regresar un arreglo de numeros", () => {
    const arrNumbersPokemons = getPokemons();
    expect(arrNumbersPokemons.length).toBe(650);
  });
  test("debe de retornar un arreglo de 4 elementos con nombres de pokemones", async () => {
    // const [p1, p2, p3, p4] = await getPokemonsNames([1,2,3,4]);
    const pokemons = await getPokemonsNames([1, 2, 3, 4]);

    expect(pokemons).toStrictEqual([
      { name: "bulbasaur", id: 1 },
      { name: "ivysaur", id: 2 },
      { name: "venusaur", id: 3 },
      { name: "charmander", id: 4 },
    ]);

    // console.log(pokemons    );
  });
  test("getPokemons debe de retornar un arreglo mezclado", async () => {
    // console.log(getPokemonOptions );
    const pokemons = await getPokemonOptions();
    console.log(pokemons);
    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
      {
        name: expect.any(String),
        id: expect.any(Number),
      },
    ]);

    // [
    //     { name: 'spinarak', id: 167 },
    //     { name: 'monferno', id: 391 },
    //     { name: 'giratina-altered', id: 487 },
    //     { name: 'cherubi', id: 420 }
    //   ]
  });
});
