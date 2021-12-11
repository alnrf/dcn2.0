export function toCurrency(amount: number | string) {
    let amountCents: any = typeof amount === 'string' ? parseInt(amount)/100 : amount/100;
    return formatMoneyBR(amountCents);
  }
  
  export function toCents(amount: string) {
    return parseInt(String(amount).replace(',', '').replace('.', ''), 10);
  }  
  
  function formatMoneyBR(amount: number) {
    let formated = amount.toLocaleString('pt-br', { minimumFractionDigits: 2 });  
    // formated = formated
    //   .split(',')
    //   .join('p')
    //   .split('.')
    //   .join('v')
    //   .split('v')
    //   .join(',')
    //   .split('p')
    //   .join('.');
    return formated;
  }