const tsPreset = require('ts-jest/jest-preset')
const baserunPreset = require('baserun/jest-preset')

module.exports = {
    ...tsPreset,
    ...baserunPreset,
    testTimeout: 20000,
}
