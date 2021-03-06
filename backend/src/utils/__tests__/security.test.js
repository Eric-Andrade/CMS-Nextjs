import {
  encrypt,
  getBase64,
  setBase64
} from '../security'

describe('#encrypt', () => {
  it('should return a encrypted salted string', () => {
    expect(encrypt('foo')).toBe('64d04f26486c3473b90e8fe98bf9c6302a561675')
  })
})

describe('#getBase64', () => {
  it('should get a value from base64 string', () => {
    expect(getBase64('Zm9v')).toBe('foo')
  })

  it('should get a JSON from base64 string', () => {
    expect(getBase64('eyJmb28iOiJiYXIifQ==')).toEqual({ foo: 'bar' })
  })
})

describe('#setBase64', () => {
  it('should set a string value to base64 string', () => {
    expect(setBase64('foo')).toBe('Zm9v')
  })

  it('should set a JSON to base64 string', () => {
    expect(setBase64(JSON.stringify({ foo: 'bar' }))).toEqual('eyJmb28iOiJiYXIifQ==')
  })
})
