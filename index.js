// Dados do Herói
let heroiNome = "joao gabriel"
let heroiHp = 50
let heroiAtaque = 15

// Dados do Monstro
let monstroNome = "everson do mal"
let monstroHp = 25
let monstroDefesa = 10
let monstroNivel = "Chefe"

console.log(`
 Batalha Iniciada: ${heroiNome} VS ${monstroNome}
      `)




let resumo = `
 ================================
 Nome = ${heroiNome}
 Hp = ${heroiHp}
 Ataque = ${heroiAtaque}
 ================================

 ================================
 Nome = ${monstroNome}
 Hp = ${monstroHp}
 Defesa = ${monstroDefesa}
 Nivel = ${monstroNivel}
 ===============================

`
console.log(resumo)

// 1. CÁLCULO DO ATAQUE DO HERÓI
let danoCausado = heroiAtaque - monstroDefesa

if (danoCausado <= 0) {
    console.log(` O ${monstroNome} defendeu o golpe! Nenhum dano causado.`)
} else {
    monstroHp = monstroHp - danoCausado;
    console.log(` ${heroiNome} atacou com sucesso! Causou ${danoCausado} de dano.`)
}

// 2. VERIFICAÇÃO SE O MONSTRO MORREU
if (monstroHp <= 0) {
    console.log(` O ${monstroNome} foi derrotado!`)
    
    // 3. DISTRIBUIÇÃO DE RECOMPENSAS (IF ANINHADO)
    console.log(" Calculando Recompensas...")
    if (monstroNivel === "Comum") {
        console.log(" Recompensa: 10 Moedas de Ouro.")
    } else if (monstroNivel === "Elite") {
        console.log(" Recompensa: 50 Moedas de Ouro + Poção de Vida.")
    } else if (monstroNivel === "Chefe") {
        console.log(" RECOMPENSA LENDÁRIA: 200 Moedas + 32GB RAM ")
    }

} else {
    // 4. CONTRA-ATAQUE DO MONSTRO (Se ele sobreviveu)
    console.log(` O ${monstroNome} sobreviveu com ${monstroHp} de HP e contra-atacou!`)
    let danoMonstro = 15
    heroiHp = heroiHp - danoMonstro
    
    if (heroiHp <= 0) {
        console.log(` Fim de Jogo! ${heroiNome} caiu em combate.`)
    } else {
        console.log(` ${heroiNome} resistiu ao golpe! HP restante: ${heroiHp}`)
    }
}

