var botaoLogin = document.querySelector("#btn-login");
  botaoLogin.addEventListener("click", function(event) {
    event.preventDefault();

    var loginNome = document.querySelector("#form-login");
      var login = loginNome.querySelector("#login-Nome");
        var nome = login.value;

    var loginEmail = document.querySelector("#form-login");
      var loginE = loginEmail.querySelector("#login-Email");
        var email = loginE.value;

    console.log(nome);
      console.log(email);

    document.getElementById("div_popfundo").remove();
      document.getElementById("div_poplogin").remove();

  })

var botaoAdicionar = document.querySelector("#enviar-form");
  botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

  var resposta1 = obter_resultado();
    var resposta2 = obter_resultado2();
      var resposta3 = obter_resultado3();
        var resposta4 = obter_resultado4();
          var resposta5 = obter_resultado5();
            var resposta6 = obter_resultado6();

          var soma = resposta1 + resposta2 + resposta3 + resposta4 + resposta5 + resposta6;

  if (soma < 10) {
    document.querySelector("#myModal");
      var div = document.querySelector(".modal-body");
        div.textContent = "Sua pontuação é considerada FRACA, somando apenas " +soma+ " pontos.Você deve rever seus conceitos sobre Marketing Pessoal. Deve dar a devida importância a vender a sua imagem pessoal. Aprofunde-se sobre temas básicos como conhecer a si mesmo e melhorar sua rede de relacionamentos pessoais e profissionais. Tente encarar sua carreira como um negócio que necessita de investimentos. ";
  }
      if (soma>=10 && soma<=14) {
          document.querySelector("#myModal");
            var div = document.querySelector(".modal-body");
              div.textContent = "Sua pontuação foi REGULAR com " +soma+ " pontos.\n Você já sabe a importância que o Marketing Pessoal tem no seu desenvolvimento pessoal e também na sua carreira profissional. No entanto, ainda pode adquirir um algo a mais para alcançar o sucesso objetivado; procure expor- se mais e não tenha medo de competir e se abrir para as oportunidades que se lhe apresentam.";
      }
        else if (soma>=15 && soma<=18){
          document.querySelector("#myModal");
            var div = document.querySelector(".modal-body");
              div.textContent = "Sua pontuação foi satisfatória com " +soma+ " pontos.\nParabéns. Você encara sua carreira como um negócio e faz os devidos investimentos nela. Sabe construir sua rede de relacionamentos e dar a apropriada atenção ao que sua imagem pessoal necessita. Mantenha-se assim, zelando por seu Marketing Pessoal.";
        }
});

var modal = document.getElementById('myModal');
  var btn = document.getElementById("enviar-form");
    var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function obter_resultado() {

    var resposta = document.querySelectorAll(".perg1");

    for (var i=0; i<3;i++) {
        if (resposta[i].checked)
           var resp = resposta[i].value;
      }
        switch (resp) {
          case "a":
              var res = 2;
          break;

          case "b":
            var res = 3;
          break;

          case "c":
            var res = 0;
          break;
        }
      return res;
  }

  function obter_resultado2() {

      var resposta = document.querySelectorAll(".perg2");

      for (var i=0; i<3;i++) {
          if (resposta[i].checked)
             var resp = resposta[i].value;
        }
          switch (resp) {
            case "a":
                var res = 1;
            break;

            case "b":
              var res = 0;
            break;

            case "c":
              var res = 3;
            break;
          }
        return res;
    }

    function obter_resultado3() {

        var resposta = document.querySelectorAll(".perg3");

        for (var i=0; i<3;i++) {
            if (resposta[i].checked)
               var resp = resposta[i].value;
          }
            switch (resp) {
              case "a":
                  var res = 3;
              break;

              case "b":
                var res = 0;
              break;

              case "c":
                var res = 1;
              break;
            }
          return res;
      }

      function obter_resultado4() {

          var resposta = document.querySelectorAll(".perg4");

          for (var i=0; i<3;i++) {
              if (resposta[i].checked)
                 var resp = resposta[i].value;
            }
              switch (resp) {
                case "a":
                    var res = 0;
                break;

                case "b":
                  var res = 1;
                break;

                case "c":
                  var res = 3;
                break;
              }
            return res;
        }

        function obter_resultado5() {

            var resposta = document.querySelectorAll(".perg5");

            for (var i=0; i<3;i++) {
                if (resposta[i].checked)
                   var resp = resposta[i].value;
              }
                switch (resp) {
                  case "a":
                      var res = 0;
                  break;

                  case "b":
                    var res = 3;
                  break;

                  case "c":
                    var res = 2;
                  break;
                }
              return res;
          }

          function obter_resultado6() {

              var resposta = document.querySelectorAll(".perg6");

              for (var i=0; i<3;i++) {
                  if (resposta[i].checked)
                     var resp = resposta[i].value;
                }
                  switch (resp) {
                    case "a":
                        var res = 3;
                    break;

                    case "b":
                      var res = 2;
                    break;

                    case "c":
                      var res = 0;
                    break;
                  }
                return res;
            }
