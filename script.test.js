const calculos = require("./script")

test('Testando quantidade de combustível necessária com gasolina', () => {
    expect(calculos.calcularCombustivel(100000, 'gasolina')).toBe(7)
})

test('Testando quantidade de combustível necessária com etanol', () => {
    expect(calculos.calcularCombustivel(100000, 'etanol')).toBe(10)
})

test('Testando validação da distância', () => {
    expect(calculos.calcularCombustivel(-5000, 'diesel')).toBe(true)
})

test('Testando validação do combustível', () => {
    expect(calculos.calcularCombustivel(100000, 'diesel')).toBe(true)
})

test('Testando validação do tempo', () => {
    expect(calculos.numeroDeParadas(['adulto', 'adulto', 'adulto'], -5)).toBe(true)
})

test('Testando quantidade de paradas apenas com adultos', () => {
    expect(calculos.numeroDeParadas(['adulto', 'adulto', 'adulto'], 6)).toBe(4.0)
})

test('Testando quantidade de paradas com mais adultos do que crianças', () => {
    expect(calculos.numeroDeParadas(['adulto', 'adulto', 'crianca'], 6)).toBe(6.0)
})

test('Testando quantidade de paradas com mais crianças do que adultos', () => {
    expect(calculos.numeroDeParadas(['adulto', 'crianca', 'crianca'], 6)).toBe(9.0)
})

test('Testando validação da quantidade de paradas', () => {
    expect(calculos.numeroDeParadas(4,['adulto', 'adulto', 'adulto'])).toBe(true)
})

test('Testando gastos com refeições', () => {
    expect(calculos.numeroDeRefeicoes(4,['adulto', 'adulto', 'adulto'])).toBe(480)
})

test('Testando gastos com refeições', () => {
    expect(calculos.numeroDeRefeicoes(6,['adulto', 'adulto', 'crianca'])).toBe(660)
})

test('Testando gastos com refeições', () => {
    expect(calculos.numeroDeRefeicoes(9,['adulto', 'crianca', 'crianca'])).toBe(930)
})