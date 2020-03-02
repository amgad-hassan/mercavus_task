module.exports = {
    roots: ['<rootDir>/test'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleDirectories: [
      'node_modules',
      'src'
    ],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    globals: {
      'ts-jest': {
        tsConfig: {
          importHelpers: true
        }
      }
    }
  }
  