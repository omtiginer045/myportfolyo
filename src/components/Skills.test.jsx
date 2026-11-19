import { render, screen } from '@testing-library/react'
import Skills from './Skills'
import About from './About'

describe('Skills', () => {
  it('6 kategori başlığını gösterir', () => {
    render(<Skills />)
    for (const name of [
      'Programlama Dilleri',
      'Web Teknolojileri',
      'Yapay Zekâ ve Siber Güvenlik',
      'Veri, Veritabanları ve DevOps',
      'Donanım ve Gömülü Sistemler',
      'Oyun Geliştirme',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
  })

  it('etiketleri gösterir ve yüzde içermez', () => {
    const { container } = render(<Skills />)
    expect(screen.getByText('Docker')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('RAG')).toBeInTheDocument()
    expect(container.textContent).not.toContain('%')
  })
})

describe('About', () => {
  it('Hakkımda başlığını ve fotoğrafı gösterir', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: 'Hakkımda' })).toBeInTheDocument()
    expect(screen.getByAltText('Ömer Coşkun')).toBeInTheDocument()
  })
})
