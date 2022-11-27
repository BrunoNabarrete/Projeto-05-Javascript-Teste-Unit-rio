const productDetails = require('../src/productDetails');

/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/
// const item1 = productDetails('teste1', 'teste2')[0];
// const object1 = item1.details.productId
// const array1 = object1.split('');
// const validation1 = array1.slice(-3);

// const item2 =  productDetails('teste1', 'teste2')[1];
// const object2 = item1.details.productId
// const array2 = object1.split('');
// const validation2 = array1.slice(-3);

const trueFunction = (object) => {
  const item1 = object[0];
  const object1 = item1.details.productId
  const array1 = object1.split('');
  const validation1 = array1.slice(-3);
  const item2 =  object[1];
  const object2 = item2.details.productId
  const array2 = object2.split('');
  const validation2 = array2.slice(-3); 
  if (validation1[0] === '1' && validation1[1] === '2' && validation1[2] === '3' && validation2[0] === '1' && validation2[1] === '2' && validation2[2] === '3') {
    return true;
  }
  return false;
}

trueFunction(productDetails('teste1', 'teste2'));

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function')
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails())).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro
    expect(productDetails('teste1', 'teste2')).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('teste1', 'teste2')).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('teste1', 'teste2')).toEqual([
      { name: 'teste1', details: { productId: 'teste1123' } },
      { name: 'teste2', details: { productId: 'teste2123' } }
    ]);
    // Teste se os dois productIds terminam com 123.
    expect(trueFunction(productDetails('teste1', 'teste2'))).toBe(true);
  });
});
