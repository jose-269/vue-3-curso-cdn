

describe('Example Components', () => {

  test('Debe de ser mayor a 10', () => {
    // Arrange Arreglar
    let value = 12;

    //Act Estimulo
    value = value + 2;

    //Afirm Observar el resultado
    expect(value).toBeGreaterThan(10)
  })

});
