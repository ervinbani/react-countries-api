import React from 'react';

type Props = {
  page: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
  onPage: (p: number) => void;
};

export default function Pagination({ page, totalPages, onNext, onPrev, onPage }: Props) {
  if (totalPages <= 1) return null;

  const pages = [] as number[];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <nav aria-label="Pagination" className="pagination">
      <div className="pagination-dots">
        {pages.map(p => (
          <button
            key={p}
            onClick={() => onPage(p)}
            className={`pagination-dot ${p === page ? 'active' : ''}`}
            aria-current={p === page ? 'page' : undefined}
            aria-label={`Page ${p}`}
          />
        ))}
      </div>
    </nav>
  );
}
