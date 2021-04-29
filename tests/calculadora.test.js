const {suma, resta} = require("../Calculadora.js")



describe("Suma",()=>{
    test("Suma de dos números.", ()=>{
        const resultado = suma(4,5)
        expect(resultado).toBe(9)
    })
    test("Suma de dos ceros.", ()=>{
        const resultado = suma(0,0)
        expect(resultado).toBe(0)
    })
})




test("Resta de dos números.", ()=>{
    const resultado = resta(3,2)
    expect(resultado).toBe(1)
})