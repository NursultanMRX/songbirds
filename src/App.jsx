import './App.css'
import './bird.06a46938.jpg'
import Header from './components/header/Header'
import Options from './components/options/Options'
import Questions from './components/qustions/Questions'
import birdsDataEn from './components/data/data'
let img = require('./bird.06a46938.jpg')

let num=0;
const results = birdsDataEn[num]

const App = () => {
  return (
    <div className='bg'>
      <div className='App'>
        <div className='head'>
          <Header/>
        </div>
        <div>
          <Questions img={img}/>
        </div>
        <div>
          <Options birdsDataEn={results}/>
        </div>
      </div>
    </div>
  )
}

export default App
