import ProtectedRoutes from './components/ProtectedRoutes'
import QueryWrapper from './components/QueryWrapper'

import './assets/styles/index.sass'


function App() {
  return (
    <QueryWrapper>
      <div className='App'>
        <div className='content'>
          <ProtectedRoutes />
        </div>
      </div>
    </QueryWrapper>
  )
}

export default App
