import { useState } from 'react'
import './App.css'
import Card from './components/global/Card/Card'
import TitleText from './components/global/TitleText/TitleText'
import TextOverview from './components/global/TextOverview'
import Typography from './components/global/Typography'
import Footer from './components/layouts/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-grey-light p-0'>
      <div className='p-5'>
        <Typography name='About' textCase='capitalize' />
      </div>
      <div>
        <TextOverview 
          title='Lorem Ipsum'
          body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus qui aperiam nulla nobis veniam nostrum quis magnam dignissimos fugit ut? Reprehenderit cupiditate ipsam nihil, dolore quam sed facere voluptatum consectetur.'
        />
      </div>
      <TitleText title='React Developer' />
      <div className='mt-10'>
      <Card title='Lorem Ipsum'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus qui aperiam nulla nobis veniam nostrum quis magnam dignissimos fugit ut? Reprehenderit cupiditate ipsam nihil, dolore quam sed facere voluptatum consectetur.
      </Card>
      </div>
      <Footer />
    </div>
  )
}

export default App
