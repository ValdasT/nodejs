const uppercase = require('./uppercase');

test('throw when inputs are not string', async () => {
    expect(() => uppercase(5)).toThrowError(
      Error('input must be a string')
    )
    expect(() => uppercase({})).toThrowError(
      Error('input must be a string')
    )
    expect(() => uppercase(null)).toThrowError(
        Error('input must be a string')
      )
  })
  test('return uppercase', async () => {
    expect(uppercase('this is string')).toStrictEqual('THIS IS STRING')
  })