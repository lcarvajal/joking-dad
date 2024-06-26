/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+[^esm]\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ]
};

module.exports = config;