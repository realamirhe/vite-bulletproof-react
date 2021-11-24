## Components

> Reusable components, will be used in multiple pages

- Make directory for each component
- Make index.ts for each component make access only two level deeps
- No index.ts is required for hole component directory

## Core

> Isolated structures mostly for packages providers

- Make a separate file for each package contains default exported provider component
- No index.ts is required for hole core directory
- Make a directory (with index.ts) for each package which has more than one files

# Pages

> Component mostly related to main routes

- Each page can have its own components or use shared components
- Internal defined components must be placed `<name>-components.tsx`
  > Mostly components are going to be made by `styled` function from `@mui/material`

# Logic

- service

  > Mostly integration with backend

  - Integration with backend apis (CRUD)
  - Authentication
  - Use Browser memory for offline experience

- slices

  > Integration with Redux,

  - used for global state management
  - data sharing
  - Note: export views at the end of your slice files
