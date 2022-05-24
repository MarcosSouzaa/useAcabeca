function bark(name, weight){ // <--- Esses são parâmetros, eles recebem valores quando a função é chamada.
    if(weight > 20) {
        console.log(name + " says WOOF WOOF")
    } else {
        console.log(name + " says woof woof")
    }
}
//nome("nome", peso) <--- são argumentos da função
bark("Rover", 23) // Invocar uma função ou chamar uma função.
bark("Spot", 13)
bark("Spike", 53)

bark("Juno", 20)
bark("Scottie", -1)
bark("Dino", 0, 0)
bark("Fido", "20")
bark("Lady", 10)
bark("Bruno", 21)
