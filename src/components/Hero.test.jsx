import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  beforeEach(() => render(<Hero />))

  test('h1 olarak adı gösterir', () => {
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Ömer Coşkun')
  })

  test('GitHub ve LinkedIn linkleri doğru adrese gider ve güvenli açılır', () => {
    const github = screen.getByRole('link', { name: 'GitHub' })
    expect(github).toHaveAttribute('href', 'https://github.com/omtiginer045')
    expect(github).toHaveAttribute('rel', 'noopener noreferrer')
    expect(github).toHaveAttribute('target', '_blank')

    const linkedin = screen.getByRole('link', { name: 'LinkedIn' })
    expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/in/omercoskun45')
    expect(linkedin).toHaveAttribute('rel', 'noopener noreferrer')
    expect(linkedin).toHaveAttribute('target', '_blank')
  })

  test('e-posta linki mailto kullanır', () => {
    const mail = screen.getByRole('link', { name: 'E-posta' })
    expect(mail).toHaveAttribute('href', 'mailto:ocoskun684@gmail.com')
    expect(mail).not.toHaveAttribute('target')
  })

  test("CV'yi İndir linki indirme özniteliğine sahiptir", () => {
    const cv = screen.getByRole('link', { name: "CV'yi İndir" })
    expect(cv).toHaveAttribute('href', '/Omer-Coskun-CV.pdf')
    expect(cv).toHaveAttribute('download')
  })
})
