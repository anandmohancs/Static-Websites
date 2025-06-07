import AppRouter from './routes/router'
import AppProviders from './components/wrappers/AppProviders'

import '@/assets/scss/style.scss'

function App() {
  return (
    <>
      <AppProviders>
        <AppRouter />
      </AppProviders>
    </>
  )
}

export default App
