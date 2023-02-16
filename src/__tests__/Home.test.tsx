import React from 'react'
import { vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import Home from '../Pages/Home'
import axios from 'axios'

vi.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Home', () => {
  test('title should rendered', async () => {
    await act(() => render(<Home />))

    expect(screen.getByText((content) => content.startsWith('Learning')))
  })

  test('albums list is rendered', async () => {
    mockedAxios.get.mockResolvedValue({
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

    await act(() => render(<Home />))

    expect(screen.getByTestId('home-id')).toBeInTheDocument()
    expect(screen.getByTestId('home-id')).toHaveTextContent(/dek/g)
    expect(screen.getByTestId('home-id')).toHaveTextContent(/esa/g)
  })
})