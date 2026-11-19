import { render, screen } from '@testing-library/react'
import App from './App'

test('renders without crashing', () => {
  render(<App />)
  expect(screen.getByRole('main')).toBeInTheDocument()
})

test('shows internship organization and period', () => {
  render(<App />)
  expect(
    screen.getByText('Balıkesir Üniversitesi Bilgi İşlem Daire Başkanlığı'),
  ).toBeInTheDocument()
  expect(screen.getByText(/Temmuz 2026 – Eylül 2026/)).toBeInTheDocument()
})

test('never exposes a phone number', () => {
  render(<App />)
  expect(document.body.textContent).not.toContain('537')
})

test('has no contact form', () => {
  const { container } = render(<App />)
  expect(container.querySelector('form')).toBeNull()
})

test('all external links use noopener noreferrer', () => {
  const { container } = render(<App />)
  const links = container.querySelectorAll('a[target="_blank"]')
  expect(links.length).toBeGreaterThan(0)
  links.forEach((a) => expect(a).toHaveAttribute('rel', 'noopener noreferrer'))
})
