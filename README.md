This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# DEMO 
![Simulator Screen Recording - iPhone 16 Pro Max - 2025-11-05 at 17 37 33](https://github.com/user-attachments/assets/f6442467-b9f0-4b5d-bd9e-4366ac01c72e)

# CarApp

A small **React Native (Expo) + TypeScript** app demonstrating a feature-based structure, mock async data fetching, a swipable image carousel, navigation to a Product Details screen, and unit tests (Jest + React Native Testing Library).

---

# Overview

CarApp is a sample mobile app that displays a scrollable list of cars (25+), allows the user to open a product details screen for each car, shows multiple images per car via a swipeable carousel, displays additional details (available colors, description), and simulates a checkout action.

The project follows a **feature-based** organization (recommended for scalable apps) and includes unit tests and a suggested feature-branch workflow.

---

# Table of contents

1. Project structure
2. Quick start (install & run)
3. Available scripts
4. Feature-based architecture (explanation)
5. Important files (what each one does)
6. Testing (Jest + RTL)
7. Styling approach
8. Common issues & fixes (iOS Folly example)
9. Feature-branch workflow & git tips
10. Contributing

---

# 1. Project structure

Example (root-level view — adjust paths if you moved files to `src/`):

```
CarApp/
├── app/ or src/                  # feature-based app code (screens, navigation) depending on setup
│   └── features/
│       └── cars/
│           ├── components/
│           │   ├── CarCard.tsx
│           │   └── Carousel.tsx
│           ├── screens/
│           │   ├── CarListScreen.tsx
│           │   └── CarDetailsScreen.tsx
│           ├── types/
│           │   └── Car.ts
│           └── __tests__/
│               ├── CarCard.test.tsx
│               └── Carousel.test.tsx
├── data/
│   └── cars.ts                    # mocked car dataset (25+ items)
├── api/
│   └── localApi.ts               # simulated async fetch (setTimeout + Promise)
├── assets/
│   └── (images or placeholder)
├── __tests__/                    
├── package.json
├── tsconfig.json
├── babel.config.js
├── metro.config.js
├── jest.config.js or jest in package.json
├── README.md                    
└── ios/ android/                   
```

---

# 2. Quick start

1. Clone / unzip the project:

```bash
git clone <repo-url> CarApp
cd CarApp
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start Metro/Expo:

```bash
npm run start
# or
yarn start
```

4. Run on simulator/device:

```bash
npm run ios    # macOS + Xcode
npm run android
```

5. Run tests:

```bash
npm test
```

---

# 3. Available scripts (package.json)

Common scripts included or recommended:

* `npm start` — start expo / Metro bundler
* `npm run ios` — launch iOS simulator (if configured)
* `npm run android` — run Android emulator/device
* `npm test` — run Jest tests
* `npm run test:watch` — run Jest in watch mode (optional)

---

# 4. Feature-based architecture (why & how)

Structure app by feature (not by technical type). Each feature folder contains its components, screens, types, and tests.

Benefits:

* Easier to reason about and maintain large apps
* Teams can work on feature folders independently
* Tests and styles stay co-located with the feature

Example:

```
features/
  cars/
    components/    # small, reusable UI parts
    screens/       # pages / containers
    types/         # local types
    __tests__/     # feature tests
```

---

# 5. Important files explained

* `data/cars.ts` — local mock dataset (images are Unsplash URLs). Used by `utils/fetchCars.ts`.
* `utils/fetchCars.ts` — simulates fetching via `new Promise` + `setTimeout`.
* `features/cars/components/CarCard.tsx` — card UI used in list view. Contains `Carousel` usage and car summary.
* `features/cars/components/Carousel.tsx` — horizontal `FlatList` + `Animated` that provides paging + dot indicators.
* `features/cars/screens/CarListScreen.tsx` — renders list of cars (vertical `FlatList`), navigates to details.
* `features/cars/screens/CarDetailsScreen.tsx` — shows multiple images (swipeable), colors, description, and a Checkout button.
* Tests in `__tests__` — unit tests for components and screens (mocks FastImage, Animated helpers).

---

# 6. Testing

We use **Jest** + **@testing-library/react-native**.

General tips:

* Mock native image libs like `react-native-fast-image` in tests (return React Native `<Image />`).
* Mock Animated native helper to avoid warnings:

  ```js
  jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
  ```
* For Reanimated: mock `react-native-reanimated` using its provided mock if used:

  ```js
  jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));
  ```
* Use `UNSAFE_getAllByType(Image)` or `getAllByA11yRole('button')` when inspecting images / pressables.
* Keep components small and pure where possible — easier to test.

---

# 7. Styling

* Use React Native `StyleSheet` (co-located with components).
* Keep layout/spacing consistent: prefer fixed widths for carousels (e.g., `width - 48`) so `pagingEnabled` snapping works predictably.
* Use platform-safe shadows (iOS shadow props + Android `elevation`).

---

# 8. Common issues & fixes

**iOS build error: `folly/coro/Coroutine.h` file not found**
This indicates CocoaPods/Folly header issues (React Native native dependency). Fix steps:

1. `cd ios && rm -rf Pods Podfile.lock`
2. `pod cache clean --all`
3. `pod install --repo-update`
4. If it still fails: `rm -rf ~/Library/Developer/Xcode/DerivedData` and clean build folder in Xcode.
5. Ensure CocoaPods is recent (`>= 1.12+` recommended). Re-run pod install.

If you upgraded RN versions, consider `pod deintegrate` then `pod install`.

---

# 9. Feature-branch workflow & git tips

Recommended workflow:

* Create a short-lived branch per feature: `feature/cars-carousel`
* Keep PRs focused and small
* Rebase before opening PR:

  ```bash
  git fetch origin
  git rebase origin/main
  ```
* Require at least one reviewer and passing CI (tests) before merge.
* Add tests for new features inside the feature folder.

---

# 10. Contributing

Feel free to open issues or PRs. Include:

* A clear description of the problem/feature
* Steps to reproduce (if bug)
* Unit tests for the change
* Keep styles and folder layout consistent with the feature-based approach

---

# Appendix — Useful dev commands

* Clear Metro cache:

  ```bash
  npx react-native start --reset-cache
  # or for expo
  expo start -c
  ```
* Reinstall iOS pods:

  ```bash
  cd ios
  pod install --repo-update
  ```
* Run Jest in band (useful for CI):

  ```bash
  npm test -- --runInBand
  ``
  ```


