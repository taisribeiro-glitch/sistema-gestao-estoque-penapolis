// Simulação de banco de dados local para testes
let estoqueMock = [
  { id: 1, nome: 'Leite Integral 1L', categoria: 'Alimentos', qtd: 45, validade: '2026-09-28', status: 'Atencao' },
  { id: 2, nome: 'Cesta Básica Tipo 1', categoria: 'Alimentos', qtd: 12, validade: '2026-09-22', status: 'Urgente' },
  { id: 3, nome: 'Sabonete 90g', categoria: 'Higiene', qtd: 120, validade: '2027-05-10', status: 'OK' },
  { id: 4, nome: 'Arroz 5kg', categoria: 'Alimentos', qtd: 8, validade: '2026-10-15', status: 'Critico' }
];

export const api = {
  // Buscar todos os produtos do estoque
  async getProdutos() {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...estoqueMock]), 300);
    });
  },

  // Registrar nova doação (Entrada)
  async cadastrarDoacao(dados) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const novoItem = {
          id: estoqueMock.length + 1,
          ...dados,
          qtd: Number(dados.quantidade),
          status: 'OK'
        };
        estoqueMock.push(novoItem);
        resolve({ sucesso: true, item: novoItem });
      }, 300);
    });
  },

  // Dar baixa no estoque (Saída)
  async registrarSaida(produtoId, quantidade) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const item = estoqueMock.find((p) => p.id === Number(produtoId));
        if (!item) {
          reject(new Error('Produto não encontrado'));
          return;
        }
        if (item.qtd < quantidade) {
          reject(new Error('Quantidade insuficiente em estoque'));
          return;
        }
        item.qtd -= Number(quantidade);
        resolve({ sucesso: true, itemAtualizado: item });
      }, 300);
    });
  }
};