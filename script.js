//substituir texto
/*let texto ="Estão chegando as provas"
console.log(texto.replace("provas", "avaliações"))

//fixar o valor
let num =223.455555
console.log(num.toFixed(2))

// caixa alert
//alert("Olá meu amigo(a)")

//caixa de confirmação
let teste =confirm("Você é um aluno?")
console.log(teste)

//Caixa de prompt
let texto1=prompt("Digite seu nome")
//console.log("O nome dele é:", texto1)
document.write("O nome dele é: ", texto1)

document.write("<br>")*/

//if
if(20 > 15){
    document.write("20 é maior")
}

document.write("<br><br>")

//if else
if(25 > 15){
    document.write("Numero maior")
}
else{
    document.write("Número menor")
}

document.write("<br><br>")

//if else declarando variável
let num =10
if(num >= 10){
    document.write("O número é maior")
}
else{
    document.write("O número é menor")
}

document.write("<br><br>")

//If else encadeado
//let idade =18
let idade =prompt("Digite sua idade: ")
if(idade <= 12){
    document.write("É uma criança")
}
else if(idade <= 17){
    document.write("É um adolecente")
}
else if(idade <= 30){
    document.write("É um adulto")
}
else{
    document.write("Um adulto experiente vulgo maduro")
}

// pode entrar na balada ou não?
let idade1 =prompt("Bem vindo")
