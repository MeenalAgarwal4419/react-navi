import { configureStore } from '@reduxjs/toolkit';
import listsReducer from './ListComponent/ListSlice';
export default configureStore({
  reducer: {
    lists: listsReducer,
  },
});
