const Livro = require("../src/models/livros.js");

//Vamos começar a testar nossa rota de GET/READ da nossa API.
//Usando os métodos describe, expect, toBe.

describe("Testes do modelo Livros", () => {
  const livro = new Livro({
    id: 10,
    titulo: "Amora",
    autor: "Emicida",
    editora: "Companhia das Letrinhas",
    numeroPaginas: 44,
  });
  it("Deve chamar o schema e retornar um novo livro", () => {
    expect(livro.titulo).toBe("Amora");
  });
  it("Deve salvar no banco de dados o novo livro", () => {
    livro.save().then((dados) => {
      expect(dados.titulo).toBe("Amora");
    });
  });
});


