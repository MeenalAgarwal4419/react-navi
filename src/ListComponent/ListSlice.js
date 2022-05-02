import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    lists: {
      0: {
        heading: 'Teams',
        id: 0,
        cards: [],
      },
    },
  },
  reducers: {
    addList: (state, action) => {
      const payload = action?.payload;
      const listsState = { ...state?.lists };
      const listDetails = {
        id: payload?.id,
        heading: payload?.name,
        cards: [],
      };
      listsState[payload?.id] = listDetails;
      state.lists = listsState;
    },
    removeList: (state, action) => {
      const payload = action?.payload;
      const listsState = { ...state?.lists };
      delete listsState[payload?.id];
      state.lists = listsState;
    },
    addCard: (state, action) => {
      const payload = action?.payload;
      const listsState = { ...state?.lists };
      listsState[payload?.id].cards.push(payload?.cardDetails);
    },
    removeCard: (state, action) => {
      const payload = action?.payload;
      let listsState = { ...state?.lists };
      listsState[payload?.listId].cards.filter(
        (card) => card.id != payload?.cardId
      );
      console.log('listsState', listsState);
      state.lists = listsState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addList, removeList, addCard, removeCard } = listSlice.actions;

export default listSlice.reducer;
