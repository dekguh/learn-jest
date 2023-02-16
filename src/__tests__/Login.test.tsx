import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Login from '../Pages/Login'

describe('Login Page', () => {
  // render test
  test('renderer correctly', () => {
    render(<Login />)

    const emailElement = screen.getByRole('email')
    expect(emailElement).toBeInTheDocument()

    const passwordElement = screen.getByRole('password')
    expect(passwordElement).toBeInTheDocument()

    const loginElement = screen.getByRole('login')
    expect(loginElement).toBeInTheDocument()
  })

  // event test
  test('event change and click', () => {
    const { container } = render(<Login />)

    const emailElement = container.querySelector('div[role="email"] input') as Element | Node | Document | Window
    fireEvent.change(emailElement, {
      target: {
        value: 'kadek@kadek.id'
      }
    })
    expect(emailElement).toHaveValue('kadek@kadek.id')

    const passwordElement = container.querySelector('div[role="password"] input') as Element | Node | Document | Window
    fireEvent.change(passwordElement, {
      target: {
        value: '123456'
      }
    })
    expect(passwordElement).toHaveValue('123456')
  })
})