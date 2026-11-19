import { render, screen, within } from '@testing-library/react'
import Projects from './Projects'
import { projects } from '../data/projects'

describe('Projects', () => {
  it('Projeler başlığını ve 8 kartı gösterir', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { level: 2, name: 'Projeler' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(8)
  })

  it('"Devam ediyor" rozeti tam 2 kez görünür', () => {
    render(<Projects />)
    expect(screen.getAllByText('Devam ediyor')).toHaveLength(2)
  })

  it('GNGJam kartında "2.lik" rozeti vardır', () => {
    render(<Projects />)
    expect(screen.getAllByText('2.lik')).toHaveLength(1)
  })

  it('repo olmayan kartta link yoktur', () => {
    render(<Projects />)
    const card = screen
      .getByRole('heading', { level: 3, name: 'AppJam — Mobil Sağlık Uygulaması' })
      .closest('article')
    expect(within(card).queryByRole('link')).not.toBeInTheDocument()
  })

  it('repo olan kartta GitHub linki vardır', () => {
    render(<Projects />)
    const withRepo = projects.filter((p) => p.repo)
    expect(withRepo.length).toBeGreaterThan(0)
    for (const { title, repo } of withRepo) {
      const card = screen.getByRole('heading', { level: 3, name: title }).closest('article')
      const link = within(card).getByRole('link', { name: /GitHub'da incele/ })
      expect(link).toHaveAttribute('href', `https://github.com/omtiginer045/${repo}`)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
  })
})
