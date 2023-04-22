var repositorio = require('./repositorioBD.js');
// usada pelo teste de unidade
// para que o modelo passe a usar uma versão "mockada" de bd
function reconfig_repositorio() {
  repositorio = require('./repositorioMemoria.js');
}

// listar_perguntas retorna um array de objetos com os seguintes campos:
// { id_pergunta: int
//   texto: int
//   id_usuario: int
//   num_respostas: int 
// }
function listar_perguntas() {
  const perguntas = repositorio.recuperar_todas_perguntas();
  return perguntas;
}

function cadastrar_pergunta(texto) {
  repositorio.criar_pergunta(texto);
}

function cadastrar_resposta(id_pergunta, texto) {
  repositorio.criar_resposta(id_pergunta, texto);
}

function get_pergunta(id_pergunta) {
  const pergunta = repositorio.recuperar_pergunta(id_pergunta);
  return pergunta;

}

function get_respostas(id_pergunta) {
  const respostas = repositorio.recuperar_todas_respostas(id_pergunta);
  return respostas;
}

function get_num_respostas(id_pergunta) {
  const n_respostas = repositorio.recuperar_num_respostas(id_pergunta);
  return n_respostas;
}

exports.reconfig_repositorio = reconfig_repositorio;
exports.listar_perguntas = listar_perguntas;
exports.cadastrar_pergunta = cadastrar_pergunta;
exports.cadastrar_resposta = cadastrar_resposta;
exports.get_pergunta = get_pergunta;
exports.get_respostas = get_respostas;
exports.get_num_respostas = get_num_respostas;