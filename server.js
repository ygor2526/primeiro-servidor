
import express from 'express';

const app = express();
const porta = 3000;

app.get('/', (req, res) => {
  res.send('Bem-vindo à Central de Informações da Escola!');
});

app.get('/status', (req, res) => {
  res.json({
    status: 'online'
  });
});


app.get('/escola', (req, res) => {
  res.json({
    nome: 'Escola Técnica Horizonte',
    cidade: 'Campinas',
    tipo: 'Ensino Técnico'
  });
});


app.get('/cursos', (req, res) => {
  res.json([
    { id: 1, nome: 'Desenvolvimento de Sistemas' },
    { id: 2, nome: 'Redes de Computadores' },
    { id: 3, nome: 'Administração' }
  ]);
});


app.get('/professor', (req, res) => {
  res.json({
    nome: 'Carlos Oliveira',
    disciplina: 'Programação Back-End'
  });
});


app.get('/ajuda', (req, res) => {
  res.send(
    'Rotas disponíveis: /, /status, /escola, ' +
    '/cursos, /professor e /ajuda. ' +
    'Elas mostram a mensagem inicial, o status, ' +
    'os dados da escola, os cursos, o professor ' +
    'e as orientações do sistema.'
  );
});


app.get('/requisicao', (req, res) => {
  res.json({
    metodo: req.method,
    caminho: req.path,
    mensagem: 'Solicitação recebida com sucesso!'
  });
});


app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
