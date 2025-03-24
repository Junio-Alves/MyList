module.exports = {
    preset: 'react-native',
    setupFiles: ['<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js'],
    transformIgnorePatterns: [
      "node_modules/(?!(@react-native|react-native|@react-native-community)/)"
    ],
  };
  