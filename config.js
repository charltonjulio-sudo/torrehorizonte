// Configuração da Torre Horizonte (v0.4.0-alpha). Fica na mesma pasta do index.html.
// Se este arquivo não existir, o jogo usa os padrões. A Área do Professor gera uma versão nova
// quando você liga o Google Forms (aba Formulário) ou troca a frase-senha (aba Ferramentas).
window.TORRE_CONFIG = {
  // SHA-256 da frase-senha normalizada. A frase em si nunca fica escrita nos arquivos publicados.
  senhaHash: 'e44d0e597eed78e77e45858bec48e2620d12c349363d28d65b64f175677bfad6',
  // Link pré-preenchido do Google Forms, com {nome} {numero} {escola} {turma} {codigo} {nota}.
  formsUrl: '',
  // Link da planilha de respostas "Publicada na Web" como CSV (para o Mural). Não divulgue aos alunos.
  muralCsv: '',
  // Link do Classroom de cada turma, para o botão "Relatar problema". Vazio = página inicial do Classroom.
  // Mais fácil gerar pela Área do Professor > Ferramentas > Links do Classroom.
  classroom: {},
  // Colégios e turmas. Mudar o nome de uma turma invalida o código de quem já joga nela.
  escolas: [
    { sigla: 'IEEL', nome: 'Instituto de Educação Estadual de Londrina',
      turmas: ['1º ADM - Turma A', '1º ADM - Turma B', '1º ADM - Turma C', '1º ADM - Turma D', '2º ADM - Turma A', '2º ADM - Turma B', '2º ADM - Turma C'] },
  ],
};
