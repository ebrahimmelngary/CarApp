module.exports = {
  preset: 'react-native',
  "jest": {
  "preset": "react-native",
  "setupFilesAfterEnv": ["@testing-library/jest-native/extend-expect"],
  "transformIgnorePatterns": [
    "node_modules/(?!react-native|@react-native|react-clone-referenced-element)"
  ]
}
};
