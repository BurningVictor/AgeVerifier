function ageVerif() {
    var agora = new Date();
    var anoatual = agora.getFullYear()
    var anonasc = window.document.querySelector('input#enviodata')
    var idade = anoatual - anoatual
    var msg = window.document.querySelector('div#queme')
    var img = window.document.querySelector('div#evoce')
    var sexomas = window.document.querySelector('div#imas')
    var sexfem = window.document.querySelector('input#ifem')

    msg.innerHTML = `idade é ${idade}`
}

/*
Idades que Deverão ser Documentadas:

-Homens
.00 anos -> BB do Nevermind
.05 anos -> Criança do U2
.08 anos -> Crianças do Clube da Esquina
.12 anos -> Namoradinho da Suzy
.15 anos -> Andy Warhol do álbum The Smiths
.20 anos -> Renato Russo
.40 anos -> Dave Ghrol
.60 anos -> Anthony Hopkins

-Mulheres
.00 anos -> Maggy Simpson
.05 anos -> Criança do Yellow Ledbetter
.08 anos -> Crianças do No Quarter
.12 anos -> Suzy do Moonrise Kingdom
.15 anos -> Siouxsie and The Banshees
.20 anos -> Janis Joplin
.40 anos -> Rita Lee
.60 anos -> Fernanda Montenegro

para quem estiver lendo e vendo essa porcaria acima, saiba que fiquei sem ideia de personagens e personalidades para colocar. Queria poder fazer algo conceitual com uma seleção "perfeita"... mas, levando em conta que isso é somente um estudo acadêmico, por assim dizer, decidi não focar muito em "quem escolher" pra não perder muito tempo, sabe? Enfim, de qualquer maneira, essas pessoas que escolhi são bem legais: umas eu admiro, outras somente amo kk.
*/