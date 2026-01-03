import React from 'react'

type Props = {
  page: number
  totalPages: number
  onNext: () => void
  onPrev: () => void
  onPage: (p: number) => void
}

export default function Pagination({ page, totalPages, onNext, onPrev, onPage }: Props) {
  const pages = [] as number[]
  for (let i = 1; i <= totalPages; i++) pages.push(i)

  return (
    <nav aria-label="Pagination" style={{display:'flex',gap:8,alignItems:'center',justifyContent:'center',marginTop:16}}>
      <button onClick={onPrev} disabled={page <= 1} aria-label="Previous page">Prev</button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPage(p)}
          aria-current={p === page ? 'page' : undefined}
          style={{fontWeight: p === page ? '600' : '400'}}
        >
          {p}
        </button>
      ))}
      <button onClick={onNext} disabled={page >= totalPages} aria-label="Next page">Next</button>
    </nav>
  )
}
