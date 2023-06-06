$(document).ready(function(){
    $('#carrossel').slick({
        autoplay:true,
    })

    $("#cpf").mask('000.000.000-00',{
        placeholder:'000.000.000-00'
    })

    $("#telefone").mask('(00)00000-0000',{
        placeholder: '(00)00000-0000'
    })

    $("#cep").mask('00000-000',{
        placeholder:'00000-000'
    })

    $("#ddn").mask('__/__/____',{
        placeholder:'01/01/1999'
    })

    $("form").validate({
        rules:{
            nome:{
                required:true,
            },
            telefone:{
                required:true,
                tel:true
            },
            email:{
                required:true,
                email:true
            },
            cep:{
                required:true
            },
            cpf:{
                required:true
            },
            ddn:{
                required:true
            }

        }
    })
})