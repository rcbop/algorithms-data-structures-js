module.exports = {
    testEnvironment: 'node',
    testMatch: [
        '**/exercises/**/test.js'
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '__fixtures__'
    ]
};