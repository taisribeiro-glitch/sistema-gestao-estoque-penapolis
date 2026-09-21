// Formata datas para o padrão brasileiro (DD/MM/AAAA)
export function formatarData(dataIso) {
  if (!dataIso) return 'N/A';
  const [ano, mes, dia] = dataIso.split('-');
  return `${dia}/${mes}/${ano}`;
}

// Formata quantidades com a unidade
export function formatarQuantidade(qtd, unidade = 'un') {
  return `${Number(qtd).toLocaleString('pt-BR')} ${unidade}`;
}

// Calcula o status do produto com base na validade e na quantidade
export function calcularStatusProduto(validadeIso, quantidade) {
  if (quantidade <= 10) {
    return { status: 'Critico', rotulo: 'Estoque Baixo', cor: 'bg-orange-100 text-orange-700' };
  }

  if (!validadeIso) {
    return { status: 'OK', rotulo: 'Normal', cor: 'bg-emerald-100 text-emerald-700' };
  }

  const hoje = new Date();
  const dataValidade = new Date(validadeIso);
  const diferencaDias = Math.ceil((dataValidade - hoje) / (1000 * 60 * 60 * 24));

  if (diferencaDias <= 7) {
    return { status: 'Urgente', rotulo: 'Validade Urgente', cor: 'bg-rose-100 text-rose-700' };
  } else if (diferencaDias <= 30) {
    return { status: 'Atencao', rotulo: 'Próximo Vencimento', cor: 'bg-amber-100 text-amber-700' };
  }

  return { status: 'OK', rotulo: 'Normal', cor: 'bg-emerald-100 text-emerald-700' };
}