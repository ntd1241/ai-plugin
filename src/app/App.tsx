import React from 'react';
import { lazy, Suspense } from 'react'
import { useLocation } from './hooks/useClient'
import { TranslationProvider } from './contexts/TranslationProvider'
import { DEFAULT_THEME, ThemeProvider } from '@zendeskgarden/react-theming'

const TicketEditor = lazy(() => import('./locations/ticket-editor/TicketEditor'))

const LOCATIONS = {
  ticket_editor: TicketEditor,
  nav_bar: TicketEditor,
  default: () => "null"
}

function App() {
  const location = useLocation() as keyof typeof LOCATIONS;
  const Location = LOCATIONS[location] || LOCATIONS.default;

  return (
    <ThemeProvider theme={{ ...DEFAULT_THEME }}>
      <TranslationProvider>
        <Suspense fallback={<span>Loading...</span>}>
          <Location />
        </Suspense>
      </TranslationProvider>
    </ThemeProvider>
  )
}

export default App
