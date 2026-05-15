// Código propositalmente com problemas para o ESLint detectar

    let usuarios = [];

    const botao = document.getElementById("btnCadastrar");

    botao.addEventListener("click", function(){

      let nome = document.getElementById("nome").value;
      let idade = document.getElementById("idade").value;

      if(nome === "" || idade === ""){
        alert("Preencha todos os campos");
        return;
      }

      let usuario = {
        nome: nome,
        idade: idade
      };

      usuarios.push(usuario);

      atualizarTela();

    });

    function atualizarTela(){

      const resultado = document.getElementById("resultado");

      resultado.innerHTML = "";

      for(let i = 0; i < usuarios.length; i++){

        resultado.innerHTML +=
          "<p>" +
          usuarios[i].nome +
          " possui " +
          usuarios[i].idade +
          " anos.</p>";

      }

    }

    console.log("Aplicação iniciada");