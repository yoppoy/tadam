const fetch = require('node-fetch');

module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: [
        './Tests/setup',
    ],
    globals: {
        window: {},
        fetch: fetch,
    },
    transformIgnorePatterns: [],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};
