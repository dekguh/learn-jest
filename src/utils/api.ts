import axios from 'axios'

type TGetFirstAlbumTitle = () => Promise<string>;
type TGetListAlbums = () => Promise<TDataAlbums>;

export type TDataAlbums = Array<{
  userId?: number;
  id?: number;
  title?: string;
}>

export const getFirstAlbumTitle : TGetFirstAlbumTitle = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
    return response.data[0].title || ''
  } catch (err) {
    return '-'
  }
}

export const getListAlbums : TGetListAlbums = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/albums')
    return response?.data || []
  } catch (err) {
    return []
  }
}