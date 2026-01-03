import { useMemo, useState } from 'react'

export function usePagination(totalItems: number, initialPerPage = 20) {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(initialPerPage)

  const totalPages = useMemo(() => Math.max(1, Math.ceil(totalItems / perPage)), [totalItems, perPage])

  function next() {
    setPage((p) => Math.min(totalPages, p + 1))
  }

  function prev() {
    setPage((p) => Math.max(1, p - 1))
  }

  function reset() {
    setPage(1)
  }

  return { page, perPage, setPage, setPerPage, totalPages, next, prev, reset }
}

export default usePagination
