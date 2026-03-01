// --- Sistema de login ---
// Objetivo deste código é simular um processo de login, onde o usuário tenta acessar o sistema usando um nome de usuário e senha pré-cadastrados. Identifique se há erros na lógica de execução do código e corrija-os, se necessário.

// Os valores de usuário e senha cadastrados não devem ser alterados.
const usuarioCadastrado = "admin"
const senhaCadastrada = "1234";

let tentativaUsuario = "admin";
let tentativaSenha = "1234";

//Só juntei as mensagens pra caso o login falhasse, apenas a certa seria mostrada

if ((tentativaUsuario == usuarioCadastrado && tentativaSenha == senhaCadastrada)) console.log("Login realizado com sucesso!");
else console.log("Login incorreto! Tente novamente mais tarde.");
