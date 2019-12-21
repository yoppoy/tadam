const fetch = require('node-fetch');

module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: [
        './Tests/setup',
    ],
    globals: {
        fetch: fetch,
        window: {}
    },
    transformIgnorePatterns: [
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};
