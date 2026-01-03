import React from 'react'

export default function Footer() {
  return (
    <footer className="rc-footer">
      <div className="rc-footer-inner">© {new Date().getFullYear()} React Countries API</div>
    </footer>
  )
}
