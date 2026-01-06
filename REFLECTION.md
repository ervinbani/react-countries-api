## Reflection

During the development of this project I followed an iterative workflow: define core requirements, design a component structure, implement API integrations, and then add tests and accessibility improvements. I emphasized clear separation of concerns—presentational components versus container logic—using React Context for global state and custom hooks for data fetching, debouncing, and pagination to keep the codebase maintainable and reusable.

Key challenges included client-side state management under frequent updates, balancing performance with UX, and ensuring accessible interactions. To address performance issues I implemented lazy-loading for images and route-based code splitting; for accessibility I enforced semantic HTML, keyboard navigation, and ARIA attributes where necessary.

From a technical perspective, integrating with the REST Countries API required careful error handling and lightweight caching to reduce redundant requests. I implemented robust error handlers and clear user-facing messages. Unit and component tests using Vitest and Testing Library cover critical components and typical user flows, which increased confidence in refactors and feature changes.

Potential improvements include adding end-to-end tests, enhanced error boundaries, CI-driven test and lint pipelines, and a production-ready PWA with background sync if offline capabilities are desired. Performance monitoring and user analytics would also help prioritize further optimizations.

This reflection is included in the repository to document development decisions, lessons learned, and suggested next steps for evolving the project.
