describe('mocks', () => {
  test('first example', () => {
    const myMock = jest
      .fn()
      .mockReturnValueOnce(true)
      .mockReturnValueOnce('Hello World')
      .mockReturnValueOnce(5)

    console.log(myMock)
    const result1 = myMock()
    const result2 = myMock()
    const result3 = myMock()

    expect(myMock).toHaveBeenCalled()
    expect(myMock).toHaveBeenCalledTimes(3)
    expect(result1).toBe(true)
    expect(result2).toBe('Hello World')
    expect(result3).toBe(5)
  })
})
