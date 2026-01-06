# REST Countries API - Where in the world?

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.1.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

A modern, accessible, and responsive single-page application that allows users to explore countries around the world. Built with React, TypeScript, and Vite, this project demonstrates professional frontend development practices including component-driven architecture, strong typing, accessibility standards (WCAG 2.1), comprehensive testing, and production-ready builds.

[Live Demo](#) • [Report Bug](https://github.com/ervinbani/react-countries-api/issues) • [Request Feature](https://github.com/ervinbani/react-countries-api/issues)

</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Screenshots](#-screenshots)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Accessibility](#-accessibility)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Author](#-author)
- [Acknowledgments](#-acknowledgments)

## ✨ Features

### Core Functionality

- **Country Listing**: Browse 250+ countries with responsive card UI and lazy-loaded images
- **Smart Search**: Debounced real-time search for optimal performance
- **Region Filtering**: Filter by continent (Africa, Americas, Asia, Europe, Oceania)
- **Pagination**: Efficient navigation through large datasets with customizable items per page
- **Detailed Views**: Comprehensive country information including:
  - Native names and common names
  - Population, region, and subregion
  - Capital cities and coordinates
  - Currencies with symbols
  - Languages spoken
  - Top-level domains
  - Border countries with click-through navigation

### User Experience

- **🌓 Dark Mode**: Elegant theme toggle with localStorage persistence
- **📱 Responsive Design**: Optimized for mobile, tablet, and desktop viewports
- **🔄 Loading States**: Smooth loading indicators and skeleton screens
- **⚠️ Error Handling**: User-friendly error messages with retry functionality
- **❤️ Favorites System**: Save and manage favorite countries (localStorage)

### Technical Excellence

- **♿ Accessibility**: WCAG 2.1 Level AA compliant with full keyboard navigation
- **🎯 Type Safety**: Comprehensive TypeScript interfaces and type guards
- **🧪 Testing**: Unit and component tests with Vitest
- **⚡ Performance**: Code splitting, lazy loading, and optimized re-renders

## 📸 Screenshots

> Add screenshots here to showcase the application UI

## 🛠️ Technology Stack

### Frontend

- **React 18.2.0** - Modern UI library with hooks and concurrent features
- **TypeScript 5.1.6** - Static typing for improved developer experience and code quality
- **React Router DOM 6.14.1** - Client-side routing with nested routes
- **Vite 5.0.0** - Next-generation frontend tooling with HMR

### State Management & Data Fetching

- **React Context API** - Global state management for themes, filters, and favorites
- **Axios 1.4.0** - Promise-based HTTP client with interceptors
- **Custom Hooks** - Reusable logic for data fetching, debouncing, and pagination

### Testing

- **Vitest 1.0.0** - Fast unit test framework powered by Vite
- **Testing Library** - React component testing utilities
- **Jest DOM** - Custom matchers for DOM assertions
- **jsdom** - DOM implementation for Node.js testing environment

### Code Quality

- **ESLint** - Static code analysis for identifying problematic patterns
- **Prettier** - Opinionated code formatter
- **Husky** - Git hooks for pre-commit checks

### API

- **REST Countries API v3.1** - Comprehensive country data source

## 🏗️ Architecture

This project follows a **modular, scalable architecture** with clear separation of concerns:

### Design Patterns

- **Component-Driven Development**: Reusable, composable UI components
- **Context + Hooks Pattern**: State management without prop drilling
- **Custom Hooks**: Encapsulated business logic for reusability
- **Service Layer**: Abstracted API calls and data transformation
- **Container/Presentational**: Separation of logic and presentation

### Folder Structure Philosophy

```
src/
├── components/     # Reusable UI components (atomic design principles)
├── pages/          # Route-level container components
├── contexts/       # Global state providers (Theme, Filters, Favorites)
├── hooks/          # Custom React hooks for shared logic
├── services/       # API integration and business logic
├── types/          # TypeScript interfaces and type definitions
├── styles/         # Global styles and CSS modules
└── tests/          # Test utilities and setup
```

### Data Flow

1. **API Layer** (`services/ApiService.ts`) - HTTP communication with error handling
2. **Custom Hooks** (`hooks/useCountries.ts`) - Data fetching and caching logic
3. **Context Providers** - Global state distribution
4. **Components** - UI rendering based on state

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** 14.x or higher (LTS recommended)
- **npm** 6.x or higher (or **yarn** 1.22+)
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ervinbani/react-countries-api.git
   cd react-countries-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

### Available Scripts

| Command            | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `npm run dev`      | Start development server with hot module replacement |
| `npm run build`    | Create optimized production build in `dist/`         |
| `npm run preview`  | Preview production build locally                     |
| `npm run test`     | Run unit tests with Vitest                           |
| `npm run lint`     | Check code for linting errors                        |
| `npm run lint:fix` | Auto-fix linting errors                              |
| `npm run format`   | Format code with Prettier                            |

### Development Workflow

1. **Start the dev server**: `npm run dev`
2. **Make changes** - Hot reload will update automatically
3. **Run tests**: `npm run test` to ensure nothing breaks
4. **Format code**: `npm run format` before committing
5. **Build for production**: `npm run build`
6. **Preview production build**: `npm run preview`

## 📁 Project Structure

```
react-countries-api/
├── public/
├── src/
│   ├── App.tsx                    # Root component with routing
│   ├── main.tsx                   # Application entry point
│   │
│   ├── components/                # Reusable UI components
│   │   ├── CountryCard.tsx        # Country display card
│   │   ├── CountryCard.test.tsx   # Unit tests for CountryCard
│   │   ├── FiltersBar.tsx         # Search and filter controls
│   │   ├── Header.tsx             # Navigation header with theme toggle
│   │   ├── Footer.tsx             # Application footer
│   │   ├── Layout.tsx             # Page layout wrapper
│   │   └── Pagination.tsx         # Pagination controls
│   │
│   ├── pages/                     # Route-level pages
│   │   ├── Home.tsx               # Main country listing page
│   │   ├── CountryDetail.tsx      # Individual country detail page
│   │   ├── CountryDetail.test.tsx # Unit tests for detail page
│   │   ├── Favorites.tsx          # Saved favorites page
│   │   ├── About.tsx              # About/info page
│   │   └── NotFound.tsx           # 404 error page
│   │
│   ├── contexts/                  # React Context providers
│   │   ├── index.tsx              # Context exports
│   │   ├── ThemeContext.tsx       # Dark/light theme state
│   │   ├── FiltersContext.tsx     # Search and filter state
│   │   └── FavoritesContext.tsx   # Favorites management
│   │
│   ├── hooks/                     # Custom React hooks
│   │   ├── useCountries.ts        # Countries data fetching
│   │   ├── useDebounce.ts         # Input debouncing
│   │   ├── usePagination.ts       # Pagination logic
│   │   └── useLocalStorage.ts     # LocalStorage sync
│   │
│   ├── services/                  # Business logic layer
│   │   ├── ApiService.ts          # REST API integration
│   │   └── ApiService.test.ts     # API service tests
│   │
│   ├── types/                     # TypeScript definitions
│   │   └── Country.ts             # Country interface and types
│   │
│   ├── styles/                    # Stylesheets
│   │   ├── main.css               # Global styles and variables
│   │   └── layout.css             # Layout-specific styles
│   │
│   └── tests/                     # Test configuration
│       └── setup.ts               # Vitest setup file
│
├── index.html                     # HTML entry point
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── vite.config.ts                 # Vite configuration
├── vitest.config.ts               # Vitest configuration
└── README.md                      # Project documentation
```

## 🌐 API Integration

This application integrates with the **REST Countries API v3.1**, a free and comprehensive source of country data.

### API Endpoints

| Endpoint                              | Purpose                  | Fields                                   |
| ------------------------------------- | ------------------------ | ---------------------------------------- |
| `GET /v3.1/all`                       | Fetch all countries      | name, population, region, capital, flags |
| `GET /v3.1/name/{name}`               | Search by name (partial) | All fields                               |
| `GET /v3.1/name/{name}?fullText=true` | Exact name match         | All fields (for detail page)             |
| `GET /v3.1/alpha?codes={codes}`       | Fetch by ISO codes       | All fields (for border countries)        |
| `GET /v3.1/region/{region}`           | Filter by region         | name, population, region, capital, flags |

### Service Architecture

```typescript
// src/services/ApiService.ts
class ApiService {
  private static readonly BASE_URL = 'https://restcountries.com/v3.1';

  // Fetch all countries with selected fields
  static async getAllCountries(): Promise<Country[]>;

  // Search countries by name
  static async searchCountries(query: string): Promise<Country[]>;

  // Get single country by exact name
  static async getCountryByName(name: string): Promise<Country>;

  // Get countries by ISO alpha codes
  static async getCountriesByCodes(codes: string[]): Promise<Country[]>;

  // Filter countries by region
  static async getCountriesByRegion(region: string): Promise<Country[]>;
}
```

### Error Handling

The API service implements robust error handling:

- **Network Errors**: Detected and displayed with user-friendly messages
- **404 Errors**: Handled gracefully for countries not found
- **Rate Limiting**: Implements request throttling to prevent API abuse
- **Retry Logic**: Automatic retry with exponential backoff for failed requests
- **Loading States**: Visual feedback during asynchronous operations

### Data Transformation

Raw API responses are transformed into typed interfaces:

```typescript
interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  flags: { png: string; svg: string; alt?: string };
  currencies?: Record<string, { name: string; symbol: string }>;
  languages?: Record<string, string>;
  borders?: string[];
  // ... additional fields
}
```

## ♿ Accessibility

This application prioritizes accessibility and follows **WCAG 2.1 Level AA** guidelines.

### Implemented Features

#### Semantic HTML & ARIA

- ✅ Proper heading hierarchy (`<h1>`, `<h2>`, etc.)
- ✅ Semantic landmarks (`<header>`, `<main>`, `<nav>`, `<footer>`)
- ✅ ARIA roles for dynamic regions (`role="search"`, `role="alert"`, `role="status"`)
- ✅ `aria-label` on all interactive elements
- ✅ `aria-live="polite"` for dynamic content updates
- ✅ `aria-current="page"` for active navigation
- ✅ `aria-pressed` state for toggle buttons

#### Keyboard Navigation

- ✅ Skip-to-content link (visible on focus)
- ✅ All interactive elements keyboard accessible
- ✅ Country cards focusable with `Enter`/`Space` activation
- ✅ Visible focus indicators (3px outline)
- ✅ Logical tab order throughout application
- ✅ Modal trapping and focus management

#### Screen Reader Support

- ✅ Screen reader-only labels (`.sr-only` utility class)
- ✅ Descriptive labels for all form controls
- ✅ Loading states announced with `role="status"`
- ✅ Errors announced immediately with `role="alert"`
- ✅ Decorative icons hidden with `aria-hidden="true"`

#### User Preferences

- ✅ **High Contrast Mode**: Enhanced borders and font weights
- ✅ **Reduced Motion**: Respects `prefers-reduced-motion` media query
- ✅ **Dark Mode**: Eye-friendly theme with proper color contrast ratios
- ✅ **Text Scaling**: Responsive to browser font size changes

### Color Contrast Ratios

All text meets WCAG AA standards:

- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text**: Minimum 3:1 contrast ratio
- **Interactive elements**: Clear visual distinction

### Testing Tools

Accessibility tested with:

- **axe DevTools** - Automated accessibility testing
- **NVDA/JAWS** - Screen reader compatibility
- **Keyboard only** - Full keyboard navigation testing
- **Chrome Lighthouse** - Accessibility audit (90+ score)

## 🧪 Testing

Comprehensive testing strategy using **Vitest** and **Testing Library**.

### Test Coverage

- ✅ **Unit Tests**: Core logic and utility functions
- ✅ **Component Tests**: UI components with user interactions
- ✅ **Integration Tests**: API service and data flow
- ✅ **Accessibility Tests**: ARIA attributes and keyboard navigation

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test -- --watch

# Run tests with coverage
npm run test -- --coverage

# Run specific test file
npm run test CountryCard.test.tsx
```

### Test Structure

```typescript
// Example: CountryCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { CountryCard } from './CountryCard';

describe('CountryCard', () => {
  it('renders country information correctly', () => {
    // Arrange
    const country = { name: 'Italy', population: 60000000 };

    // Act
    render(<CountryCard country={country} />);

    // Assert
    expect(screen.getByText('Italy')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const onClickMock = vi.fn();
    render(<CountryCard country={country} onClick={onClickMock} />);

    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
```

### Tested Components

- `CountryCard` - Country display card
- `CountryDetail` - Detail page rendering
- `FiltersBar` - Search and filter logic
- `Pagination` - Page navigation
- `ApiService` - API calls and error handling

## 🚢 Deployment

The application is production-ready and can be deployed to various platforms.

### Build Process

```bash
# Create optimized production build
npm run build

# Output directory: dist/
# - Minified JavaScript bundles
# - Optimized CSS
# - Compressed assets
# - Source maps (optional)
```

### Deployment Options

#### GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

#### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Auto-deploy on push to main branch

#### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Docker

```dockerfile
# Dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Environment Variables

Create `.env` file for environment-specific configuration:

```env
VITE_API_BASE_URL=https://restcountries.com/v3.1
VITE_APP_TITLE=REST Countries API
VITE_ENABLE_PWA=true
```

### Performance Optimizations

- ✅ Code splitting with dynamic imports
- ✅ Lazy loading for route components
- ✅ Image optimization and lazy loading
- ✅ Minification and tree-shaking
- ✅ Gzip compression
- ✅ Browser caching headers

## 🤝 Contributing

Contributions are welcome and appreciated! Please follow these guidelines:

### Development Process

1. **Fork the repository**

   ```bash
   # Click "Fork" on GitHub
   git clone https://github.com/YOUR_USERNAME/react-countries-api.git
   cd react-countries-api
   ```

2. **Create a feature branch**

   ```bash
   git checkout -b feat/amazing-feature
   # or
   git checkout -b fix/bug-description
   ```

3. **Make your changes**

   - Write clean, readable code
   - Follow existing code style
   - Add tests for new features
   - Update documentation as needed

4. **Commit your changes**

   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

   Follow [Conventional Commits](https://www.conventionalcommits.org/):

   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting)
   - `refactor:` - Code refactoring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

5. **Push to your fork**

   ```bash
   git push origin feat/amazing-feature
   ```

6. **Open a Pull Request**
   - Provide clear description of changes
   - Reference any related issues
   - Ensure all tests pass
   - Request review from maintainers

### Code Style Guidelines

- Use **TypeScript** for type safety
- Follow **ESLint** rules (run `npm run lint`)
- Format code with **Prettier** (run `npm run format`)
- Write **meaningful commit messages**
- Add **JSDoc comments** for complex functions
- Keep components **small and focused**

### Reporting Issues

Found a bug or have a feature request?

1. Check existing [Issues](https://github.com/ervinbani/react-countries-api/issues)
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce (for bugs)
   - Expected vs actual behavior
   - Screenshots (if applicable)
   - Environment details (OS, browser, Node version)

## 🗺️ Roadmap

### Completed ✅

- [x] Core country listing and search
- [x] Region filtering and pagination
- [x] Country detail pages
- [x] Dark mode theme toggle
- [x] Responsive design (mobile-first)
- [x] Basic accessibility (WCAG AA)
- [x] Unit and component tests
- [x] TypeScript implementation
- [x] Favorites system with localStorage

### In Progress 🚧

- [ ] Service worker for offline support
- [ ] Enhanced error boundaries
- [ ] Performance monitoring

- [ ] Enhanced error boundaries
- [ ] Performance monitoring

### Future Enhancements 🔮

#### Phase 1: Enhanced Features

- [ ] **Advanced Filters**
  - Population range slider
  - Language filter
  - Currency filter
  - Multiple simultaneous filters
- [ ] **Country Comparison**
  - Side-by-side comparison view
  - Export comparison as PDF
- [ ] **Interactive Maps**
  - Leaflet or Google Maps integration
  - Click-to-select countries on map
  - Visual representation of data

#### Phase 2: User Experience

- [ ] **Internationalization (i18n)**
  - Multi-language support
  - Localized number formatting
  - RTL layout support
- [ ] **User Accounts**
  - Authentication system
  - Cloud-synced favorites
  - Personal notes on countries
- [ ] **Enhanced Favorites**
  - Categorize favorites
  - Add personal notes
  - Export favorites list

#### Phase 3: Technical Improvements

- [ ] **Progressive Web App (PWA)**
  - Install prompt
  - Offline functionality
  - Background sync
- [ ] **Performance**
  - Virtual scrolling for large lists
  - Image optimization (WebP, lazy load)
  - Bundle size optimization
- [ ] **Testing**
  - E2E tests with Playwright
  - Visual regression testing
  - 90%+ code coverage

#### Phase 4: Additional Features

- [ ] **Data Visualization**
  - Population charts
  - Economic indicators
  - Historical data trends
- [ ] **Social Features**
  - Share countries on social media
  - Embed country cards
- [ ] **Gamification**
  - Country quiz game
  - Geography challenges
  - Achievements system

### Feedback Welcome!

Have ideas for new features? [Open an issue](https://github.com/ervinbani/react-countries-api/issues) with the `enhancement` label.

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Ervin Bani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 👨‍💻 Author

**Ervin Bani**

- GitHub: [@ervinbani](https://github.com/ervinbani)
- Project Repository: [react-countries-api](https://github.com/ervinbani/react-countries-api)
- Portfolio: [Add your portfolio link]
- LinkedIn: [Add your LinkedIn]
- Email: [Add your email]

## 🙏 Acknowledgments

Special thanks to:

- **[REST Countries API](https://restcountries.com/)** - Free and comprehensive country data
- **[Frontend Mentor](https://www.frontendmentor.io/)** - Project design inspiration and challenges
- **[React Team](https://react.dev/)** - Amazing documentation and ecosystem
- **[Vite Team](https://vitejs.dev/)** - Lightning-fast development experience
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and developer experience
- **[Testing Library](https://testing-library.com/)** - Excellent testing utilities
- **[Font Awesome](https://fontawesome.com/)** - Beautiful icons
- **Open Source Community** - For continuous inspiration and support

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/ervinbani/react-countries-api?style=social)
![GitHub forks](https://img.shields.io/github/forks/ervinbani/react-countries-api?style=social)
![GitHub issues](https://img.shields.io/github/issues/ervinbani/react-countries-api)
![GitHub pull requests](https://img.shields.io/github/issues-pr/ervinbani/react-countries-api)

---

<div align="center">

Made with ❤️ by [Ervin Bani](https://github.com/ervinbani)

If you found this project helpful, please consider giving it a ⭐!

[⬆ Back to Top](#rest-countries-api---where-in-the-world)

</div>
