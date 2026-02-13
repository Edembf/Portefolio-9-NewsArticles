import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteArticles: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const article = action.payload;
      const existingIndex = state.favoriteArticles.findIndex(
        (item) => item.idArticle === article.idArticle
      );
      if (existingIndex >= 0) {
        state.favoriteArticles.splice(existingIndex, 1);
      } else {
        state.favoriteArticles.push(article);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
