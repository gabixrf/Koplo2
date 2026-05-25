import { useState } from "react";

// Ajustado o nome da prop para refletir o cadastro completo (Nome, Senha, Email)
function FomularioCadastro({ adicionarEmail }) {
  // Estados dos inputs
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");

  function salvarCadastro(evento) {
    evento.preventDefault(); 

    // Validação simples
    if (!email || !senha || !nome) {
      alert("Preencha todos os campos.");
      return;
    }
    
    // Cria um objeto com os dados digitados
    const novoUsuario = { email, senha, nome };

    // 1. Busca a lista existente no localStorage ou cria uma nova vazia
    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // 2. Adiciona o novo objeto à lista local
    listaUsuarios.push(novoUsuario);

    // 3. Salva a lista atualizada no localStorage
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

    // 4. Envia o objeto para o componente App (Atualizado com o novo nome da prop)
    if (adicionarEmail) {
      adicionarEmail(novoUsuario);
    }

    // Limpa os campos após salvar
    setEmail("");
    setSenha("");
    setNome("");
  }

  return (
    <form className="formulario" onSubmit={salvarCadastro}>
      <h2>Novo Cadastro</h2>

      <input
        type="email"
        placeholder="Email. Ex: Diney123@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Senha. Ex: 12345678"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <input
        type="text"
        placeholder="Nome. Ex: Gabriel"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default FomularioCadastro;
