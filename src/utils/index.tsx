export const getTitle = (title: string) => {
    return title.length > 50 ? title?.slice(0, 49) + '...' : title;
  };
  
  export const getCurrency = (currencyCode: string) => {
    if (currencyCode === 'USD') {
      return '$';
    }
  
    if (currencyCode === 'EUR') {
      return '€';
    }
  
    return currencyCode + ' ';
  };
  
  export const getQuantity = (quantity: number) => {
    if (quantity <= 10) {
      return 'item-quantity level-low'
    }
    if (quantity <= 20) {
      return 'item-quantity level-medium'
    }
  
    return 'item-quantity level-high'
  }