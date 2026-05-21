module.exports = {
  default: {
    require: [
      'features/step_definitions/*.ts',
      'features/support/*.ts'
    ],
    requireModule: ['ts-node/register']
  }
}