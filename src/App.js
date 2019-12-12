import React from 'react'
import { delay } from './utils/'
import { Skeleton, Card } from 'antd'
import './App.css'

const Rick = React.lazy(() => import('./utils/Rick').then(delay(1000)))
const Morty = React.lazy(() => import('./utils/Morty').then(delay(1000)))
const Summer = React.lazy(() => import('./utils/Summer').then(delay(1000)))

const Loading = () => (
  <div className="App">
    <Card style={{ width: '250px' }}>
      <Skeleton active />
    </Card>
  </div>
)

function App() {
  return (
    <div className="App">
      <React.SuspenseList revealOrder="backwards">
        <React.Suspense fallback={<Loading />}>
          <Rick />
        </React.Suspense>
        <React.Suspense fallback={<Loading />}>
          <Morty />
        </React.Suspense>
        <React.Suspense fallback={<Loading />}>
          <Summer />
        </React.Suspense>
      </React.SuspenseList>
    </div>
  )
}

export default App
