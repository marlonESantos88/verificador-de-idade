function verificar (){
    var data =new Date()
    var ano = data.getFullYear()
    var fano=document.getElementById('textano')
    var res= document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) >ano) {
        window.alert('[ERRO] verifique os dados novamente!')
    }else {
        var fsex=document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var genero = ''
        var img =document.createElement ('img')
        img.setAttribute ('id','foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >=0 && idade <10) {
                 // Criança
                 img.setAttribute('SRC', 'criançaM.png')
            } else if  (idade < 21){
                //Jovem  
                img.setAttribute('SRC', 'jovemM.png')
            } else if (idade <50){
                //Adulto
                img.setAttribute('SRC', 'adultoM.png')
            } else {
                //Idoso
                img.setAttribute('SRC', 'idosoM.png')
            }

        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade <10) {
                // Criança
                img.setAttribute('SRC', 'criançaF.png')
           } else if  (idade < 21){
               //Jovem  
               img.setAttribute('SRC', 'jovemF.png')
           } else if (idade <50){
               //Adulto
               img.setAttribute('SRC', 'adultoF.png')
           } else {
               //Idoso
               img.setAttribute('SRC', 'idosaF.png')
           }
        }
        res.style.textAlign= 'center'
        res.innerHTML = ` Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}
