import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/common/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-grey-light'>
      <Card title='Lorem Ipsum'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus qui aperiam nulla nobis veniam nostrum quis magnam dignissimos fugit ut? Reprehenderit cupiditate ipsam nihil, dolore quam sed facere voluptatum consectetur.
      </Card>
    </div>
  )
}

export default App
