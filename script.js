function ageVerif() {
    var agora = new Date();
    var anoatual = agora.getFullYear()
    var anonasc = window.document.querySelector('input#enviodata')
    var idade = anoatual - Number(anonasc.value)
    var msg = window.document.querySelector('div#queme')
    var img = window.document.querySelector('div#evoce')
    var sexo = window.document.getElementsByName('sex')
    var gen = ''
    var faixaet = ''
    
    /*msg.innerHTML = `idade é ${idade}`*/

    if (Number(anonasc.value) > anoatual || anonasc.value.length == 0) {
        window.alert('Verifique os dados selecionados')
    } else {
        if (sexo[0].checked) {
            var gen = 'homem'
            if (idade>=0 && idade<10) {
                var faixaet = `um menino`
            } else if (idade<21) {
                var faixaet = `um ${gen} jovem`
            } else if (idade<50) {
                var faixaet = `um ${gen} adulto`
            } else {
                var faixaet = `um ${gen} idoso`
            }
        }

        else if (sexo[1].checked) {
            var gen = 'mulher'
            if (idade>=0 && idade<10) {
                var faixaet = `uma menina`
            } else if (idade<21) {
                var faixaet = `uma ${gen} jovem`
            } else if (idade<50) {
                var faixaet = `uma ${gen} adulta`
            } else {
                var faixaet = `uma ${gen} idosa`
            }
        }
    }

    msg.innerHTML = `Aparentemente, você é ${faixaet} de ${idade} anos.`
}

/*
Idades que Deverão ser Documentadas:
[Imagens que Posso Utilizar]

-Homens
.00 anos -> BB do Nevermind
.05 anos -> Criança do U2
.08 anos -> Crianças do Clube da Esquina <--
.12 anos -> Namoradinho da Suzy <-- 
.15 anos -> Andy Warhol do álbum The Smiths
.20 anos -> Renato Russo <--
.40 anos -> Dave Ghrol <--
.60 anos -> Anthony Hopkins

-Mulheres
.00 anos -> Maggy Simpson
.05 anos -> Criança do Yellow Ledbetter
.08 anos -> Crianças do No Quarter <--
.12 anos -> Suzy do Moonrise Kingdom <--
.15 anos -> Siouxsie and The Banshees
.20 anos -> Janis Joplin <--
.40 anos -> Rita Lee <--
.60 anos -> Fernanda Montenegro

para quem estiver lendo e vendo essa porcaria acima, saiba que fiquei sem ideia de personagens e personalidades para colocar. Queria poder fazer algo conceitual com uma seleção "perfeita"... mas, levando em conta que isso é somente um estudo acadêmico, por assim dizer, decidi não focar muito em "quem escolher" pra não perder muito tempo, sabe? Enfim, de qualquer maneira, essas pessoas que escolhi são bem legais: umas eu admiro, outras somente amo kk.
*/