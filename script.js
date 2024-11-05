var age = Number(prompt("Жасыңызды жазыңыз:"));

if(age < 18) {
    alert( "сіз кәмелетке толмағансыз!")
} else {
    alert("Сіз ересексіз!")
}

var temperature = Number(prompt("Сыртқы температураны жазыңыз:"))

if(temperature < 0) {
    alert("Күн бұлтты жаңбыр немесе қар жауады, қалың киім киуіңізді сұраймын!")
} else if(temperature > 0 && temperature < 14) {
    alert("Күн салқын жылы киініңіз!")
} else if (temperature > 14 && temperature <34) {
    alert("Жеңіл шортый және фудболка киіңіз өзіңізбен салқын  су алыңыз басыңыздан күн өтіп кетпесін абай болыңыз!")
}else if(temperature > 34){
    alert("Далаға шықпауыңызды сұраймын!")
}