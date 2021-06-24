let num = window.document.querySelector('input#num')
let list = window.document.querySelector('p#list')
let res = window.document.querySelector('p#res')
let lista = []
let cont = 0;

function intervalo(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else{
        return false
    }
}
function naLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adiciona(){
    if (intervalo(num.value) && !naLista(num.value, lista)) {
        lista.push(Number(num.value))
        list.innerHTML += `Valor adicionado: ${lista[cont]} </br>`
        cont++
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}
function finalizar(){
    if (lista.length==0) {
        window.alert('Digite algum valor para finalizar.')
    }else{
        res.innerHTML = ``
        let tot = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let media = 0
        for (let cont in lista) {
            if(maior < lista[cont]) maior = lista[cont]
            if(menor > lista[cont]) menor = lista[cont]
            soma += lista[cont] 
            media = soma/tot
        }
        res.innerHTML += `O total de numeros é: ${tot}</br>` 
        res.innerHTML += `A soma é: ${soma}</br>` 
        res.innerHTML += `A média é: ${media}</br>` 
        res.innerHTML += `O maior numero é: ${maior}</br>` 
        res.innerHTML += `O menor numero é: ${menor}</br>` 
    }
}