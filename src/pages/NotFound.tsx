import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="container">
      <h1>404 — Page not found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <p>
        <Link to="/">Return home</Link>
      </p>
    </main>
  );
}
