import React from 'react'
import ManagerHomePage from './pages/ManagerHomePage'
import { DataProvider } from './utils/DataContext'
const App = () => {
  return (
    <div>
      <DataProvider>
      <ManagerHomePage/>
      </DataProvider>
    </div>
  )
}

export default App
