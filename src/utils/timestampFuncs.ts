// @ts-nocheck sim eu fiz com GPT sao 7:47 da manha e timestamp é boring
export function getTimestamp() {
    // Obtém a data atual
    let dataAtual = new Date();
  
    // Configura o fuso horário para Brasília (UTC-3)
    let options = {
      timeZone: 'America/Sao_Paulo',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
  
    // Formata a data e hora de acordo com as opções fornecidas
    let horaFormatada = new Intl.DateTimeFormat('pt-BR', options).format(dataAtual);
  
    return horaFormatada;
  }


  // Função para comparar duas horas no formato "HH:MM"
export function compareTimestamp(hora1, hora2) {
  // Converte as strings para objetos Date
  const data1 = new Date(`2000-01-01T${hora1}:00`);
  const data2 = new Date(`2000-01-01T${hora2}:00`);

  // Realiza a comparação
  if (data1 < data2) {
    return -1;
  } else if (data1 > data2) {
    return 1;
  } else {
    return 0; // As horas são iguais
  }
}