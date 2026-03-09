# Netflix GPT

## Setup
- Create React + Vite App
- Configured TailwindCSS

---

## Authentication
- Add Header
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Create SignUp user account
- Create Redux store with userSlice
- Implemented Sign Out
- Unsubscribed to the onAuthStateChanged callback

---

## API Integration
- Add hardcoded data to `constant.js`
- Register TMDB API & create app & get access token
- Get data from TMDB

---

## Movies Features
- Custom Hook for NowPlayingMovies
- Update Store with movies data
- Fetch Data for Trailer video
- Update Store with Trailer video Data
- Embedded YouTube video (autoplay & mute)
- Tailwind classes for Main Container
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Build `usePopularMovie` custom Hook

---

## GPT Search
- GPT Search Page
- GPT Search Bar
- Multi-Language Feature
- Get OpenAI API Key
- Get Search API Call
- Fetch `getMoviesSuggestions` from TMDB
- Create `gptSlice` and add data
- Reused MovieList component for movie suggestions
- Memoization

---

## Configuration
- Add `.env` file
- Made site responsive

---

# Bug Fix
- Sign up user displayName and profile picture update
- If user is not logged in redirect `/browse` to login page and vice-versa

---

# Redux
- Creating Store
- Creating Slice `{ userSlice }`
- Added Slice Reducer `{ addUser, removeUser }`
- Provide store to `App.js`

---

# Features

### Login / SignUp
- Sign In / Sign Up Form
- Redirect to Browse Page

### Browse (after authentication)
- Header
- Main Movie
  - Trailer in background
  - Title and description
- Movie Suggestions
  - Movie Lists

### NetflixGPT
- Search Bar
- Movie Suggestions

---

# Component Structure
MainContainer
- VideoBackground
- VideoTitle

SecondaryContainer
- MovieList * n
- Cards * n