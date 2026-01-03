import React from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/layout.css'
import { AppProviders } from '../contexts'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <AppProviders>
      <div className="rc-app">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content" className="rc-main" tabIndex={-1}>{children}</main>
        <Footer />
      </div>
    </AppProviders>
  )
}
