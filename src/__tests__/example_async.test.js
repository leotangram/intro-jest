// Callbacks
const asyncCallback = callback => {
  setTimeout(() => {
    callback(true)
  }, 1000)
}

// Promises
const asyncPromise = () => new Promise(resolve => resolve(true))

describe('async code', () => {
  test('example async with async callback', done => {
    asyncCallback(result => {
      expect(result).toBe(true)
      done()
    })
  })
  test('example async with async promises', () => {
    return asyncPromise().then(result => expect(result).toBe(true))
  })

  test('example async with async await', async () => {
    const result = await asyncPromise()
    expect(result).toBe(true)
  })
})
