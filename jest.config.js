module.exports = {
  setupFiles: ["<rootDir>/jest.setup.ts"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.after.ts"],
  maxWorkers: "50%",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/__tests__/helpers",
  ],
  testTimeout: 10000,
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__tests__/helpers/mocks/fileMock.js",
    "\\.(css|sass)$": "<rootDir>/__tests__/helpers/mocks/styleMock.js",
  },
};
