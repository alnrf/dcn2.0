export const getOrderStatus = (status: string) => {
    switch (status) {
        case "CREATED":
        return "CRIADO";
      case "CONFIRMED":
        return "CONFIRMADO";
      case "PREPARING":
        return "PREPARANDO";
      case "DELIVERING":
        return "SAIU PARA ENTREGA";
      case "COMPLETED":
        return "FINALIZADO";
      case "CANCELED":
        return "CANCELADO";
      case "CANCEL_REQUESTED":
        return "CANC. SOLICITADO";
      default:
        return "CRIADO";
    }
}