import '@testing-library/jest-dom'

// Ensure a clean localStorage for each test run
beforeEach(() => {
  try {
    localStorage.clear()
  } catch {}
})
