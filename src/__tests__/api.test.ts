import { vi } from 'vitest'
import { getFirstAlbumTitle, getListAlbums } from '../utils/api'
import axios from 'axios'

vi.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('api', () => {
  test('getFirstAlbumTitle resolved', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        {
          id: 1,
          title: 'dek',
          userId: 1,
        }
      ]
    })
    
    const result = await getFirstAlbumTitle()
    expect(result).toEqual('dek')
  })

  test('getFirstAlbumTitle rejected', async () => {
    mockedAxios.get.mockRejectedValueOnce({
      status: 'error'
    })

    const result = await getFirstAlbumTitle()

    expect(result).toEqual('-')
  })

  test('getListAlbums resolved', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        {
          userId: 1,
          id: 1,
          title: 'dek'
        },
        {
          userId: 2,
          id: 2,
          title: 'esa'
        }
      ]
    })

    const getList = await getListAlbums()

    expect(getList).toEqual([
      {
        userId: 1,
        id: 1,
        title: 'dek'
      },
      {
        userId: 2,
        id: 2,
        title: 'esa'
      }
    ])
  })

  test('getListAlbums rejected', async () => {
    mockedAxios.get.mockRejectedValueOnce({
      status: 'error',
      data: []
    })

    const getList = await getListAlbums()

    expect(getList).toEqual([])
  })
})