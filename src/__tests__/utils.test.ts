import { vi } from 'vitest'
import * as utils from '../utils'

vi.mock('../utils', async () => {
  const actual : {[key: string]: any;} = await vi.importActual('../utils')
  return {
    ...actual,
    examplePromise: vi.fn().mockResolvedValue({
      status: 'success',
      code: 200,
      value: 40
    })
  }
})

describe('utils', () => {
  test('examplePromise function', async () => {
    const getValue = await utils.examplePromise()
    expect(getValue).toEqual({
      status: 'success',
      code: 200,
      value: 40
    })
  })
})