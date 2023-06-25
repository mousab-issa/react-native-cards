interface Card {
  cardHolder: string;
  cardNumber: string;
  expiryDate: string;
  ccv: string;
}

interface CardState {
  cardList: Card[];
}
