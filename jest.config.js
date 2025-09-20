// jest.config.js
import nextJest from 'next/jest.js'

/** @type {import('jest').Config} */
const createJestConfig = nextJest({
    dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
}

export default createJestConfig(customJestConfig)