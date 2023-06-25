interface Card {
  cardHolder: string;
  cardNumber: string;
  expiryDate: string;
}

interface CardState {
  cardList: Card[];
}
