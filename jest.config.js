module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\](?!(react-markdown|vfile|vfile-message|markdown-table|unist-.*|unified|bail|is-plain-obj|trough|remark-.*|mdast-util-.*|escape-string-regexp|micromark.*|decode-named-character-reference|character-entities|property-information|hast-util-whitespace|space-separated-tokens|comma-separated-tokens|pretty-bytes|ccount)).+\\.(js|jsx|mjs|cjs|ts|tsx)$"
  ],
};
