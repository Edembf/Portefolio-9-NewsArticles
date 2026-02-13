# NewsArticles

A simple Expo React Native news app demonstrating category-filtered articles, custom article creation (stored locally), and Redux-powered favorites.

## 🚀 Quick summary

- Browse news by **category** and view article details.
- Add, edit and delete **custom articles** (persisted with `AsyncStorage`).
- Mark articles as **favorites** (managed with `Redux Toolkit`).
- Built with **Expo**, `react-navigation`, and modern React Native libraries.

---

## 📦 Features

- Category tab bar with quick navigation to `My News` and `My Favorites`. ✅
- Grid of articles with detail view (`ArticleDetailScreen`). 🔍
- Create/edit/delete custom articles (`NewsFormScreen`, `MyArticlesScreen`) stored in `AsyncStorage`. 💾
- Favorite/unfavorite any article using Redux (`favoritesSlice`). ❤️
- Responsive layout using `react-native-responsive-screen`. 📱

---

## 🔧 Tech stack & libraries

- React Native (Expo)
- Navigation: `@react-navigation/native`, `@react-navigation/native-stack`
- State: `@reduxjs/toolkit`, `react-redux`
- Persistence: `@react-native-async-storage/async-storage`
- UI helpers: `react-native-responsive-screen`, `react-native-reanimated`
- Other: `expo-image-picker`, `react-native-webview`, `axios`

(See `package.json` for full dependency list.)

---

## ▶️ Run locally

Prerequisites: Node.js and Expo CLI (optional — you can use `npx expo` commands).

1. Install dependencies

```bash
npm install
# or
# yarn
```

2. Start the app

```bash
npm start       # opens Expo DevTools
npm run android # start on Android emulator/device
npm run ios     # start on iOS simulator/device
npm run web     # run in browser (expo for web)
```

---

## 🗂 Project structure (key files)

- `App.js` — app entry, provides Redux `Provider` and navigation.
- `src/navigation/index.js` — app navigation stack.
- `src/screens/` — all screens (Home, Welcome, ArticleDetail, MyArticles, CustomNews, NewsForm, FavoriteScreen).
- `src/components/` — reusable UI components (`Articles`, `Categories`).
- `src/redux/` — `favoritesSlice.js` and `store.js` (Redux state for favorites).
- `assets/images/` — static images used across the app.

---

## 🧭 How to use

- Home: choose a category to filter articles.
- Tap an article card to open details (`ArticleDetailScreen`).
- Favorite an article by tapping the heart on the detail screen.
- Open `My News` to add/edit/delete user-created articles (persisted locally).
- Open `My Favorites` to view articles added to favorites (managed in Redux).

> Note: Custom articles are saved to `AsyncStorage` under the key `customArticles`. Favorites are stored in the Redux store (not persisted across restarts).

---

## ✨ Possible improvements

- Persist favorites (e.g. `redux-persist`).
- Replace hardcoded articles with a remote API.
- Add image upload or local caching for custom articles.
- Unit / E2E tests.

---

## 🤝 Contributing

Contributions are welcome. Please open an issue or submit a pull request with a short description of your changes.

---

## 📄 License

No license specified — add a `LICENSE` file if you want to open-source this project.

---

If you want, I can: add a `LICENSE`, wire up `redux-persist`, or create a brief demo GIF for the README. Which would you like next?
