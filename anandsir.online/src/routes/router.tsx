import { Route, Routes } from 'react-router-dom'
import AppLayout from '@/components/AppLayout'
import { appRoutes } from './index'

const AppRouter = () => {
  return (
    <Routes>
      {appRoutes.map((route, idx) => (
        <Route key={idx + route.name} path={route.path} element={<AppLayout>{route.element}</AppLayout>} />
      ))}
    </Routes>
  )
}

export default AppRouter
