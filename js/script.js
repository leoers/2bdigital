$(document).ready(function(){
    $('.mobile').click(function(){
        $('.desktop').toggle();
    })

    $("input").blur(function(){
     if($(this).val() == "")
         {
             $(this).css({"border" : "1px solid #F00"});
         }
    });

    $("#button").click(function(){
     var cont = 0;
     $("#cadastro input").each(function(){
         if($(this).val() === "")
             {
                 $(this).css({"border" : "1px solid #F00"});
                 cont++;
             }
        });
     $("#cadastro .font-header").append("<div class='alert'>Preencha todos os campos</div>")
     if(cont == 0)
         {
             $("#cadastro").submit();
         }
    });
})

var data = '2019/03/31';
var falta = (new Date(data).getTime() - new Date().getTime()) / 1000;
var segundos = Math.round(falta % 60);
var minutos = Math.round(falta / 60 % 60);
var horas = Math.round(falta / 60 / 60 % 24);
var dias = Math.round(falta / 60 / 60 / 24);
var divs = document.querySelectorAll('#parcelas div');

setInterval(function () {
    if (segundos == 0) {
        segundos = 60;
        minutos--;
    }
    if (minutos == 0) {
        minutos = 60;
        horas--;
    }
    if (horas == 0) {
        horas = 24;
        dias--;
    }
    segundos--;
    var contador = [dias, horas, minutos, segundos].forEach(function (parcela, i) {
        divs[i].innerHTML = parcela;
    });

}, 1000);

