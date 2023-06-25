import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: CardState = {
  cardList: [],
};

export const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.cardList.push(action.payload);
    },
    removeCard: (state, action: PayloadAction<Pick<Card, "cardNumber">>) => {
      state.cardList = state.cardList.filter(
        (card) => card.cardNumber !== action.payload.cardNumber
      );
    },
  },
});

export const { addCard, removeCard } = cardSlice.actions;

export const selectCardList = (state: { cards: CardState }) =>
  state.cards.cardList;

export default cardSlice.reducer;
