$(document).ready(function() {
    $("#button").click(function(){
        $.ajax({
            type:"POST",
            url: "./php/formulario.php",
            dataType: "json",
            data:{
                nome: $("#nome").val(),
                sobrenome: $("#sobrenome").val(),
                idade: $("#idade").val()
            },
            success: function(conclusao){
                alert("Concluido");
            }
        });
    })
    $("#button2").click(function(){
        $.ajax({
            type:"POST",
            url: "./php/listar.php",
            dataType: "json",
            data:{

            },
            success: function(retorno){
                alert(retorno);
            },
            error: function(){}
        });
    })
})
