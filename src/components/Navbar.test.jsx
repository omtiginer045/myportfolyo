import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar', () => {
  test('menü butonu açılıp kapanır, bölüm linki menüyü kapatır', () => {
    render(<Navbar />)
    const button = screen.getByRole('button', { name: 'Menüyü aç/kapat' })
    expect(button).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(screen.getByRole('link', { name: 'Hakkımda' }))
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  test('Escape tuşu açık menüyü kapatır', () => {
    render(<Navbar />)
    const button = screen.getByRole('button', { name: 'Menüyü aç/kapat' })
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  test('marka #top adresine bağlanır', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Ömer Coşkun' })).toHaveAttribute('href', '#top')
  })
})
