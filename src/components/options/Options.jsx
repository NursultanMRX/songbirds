

import { useEffect, useState } from 'react'
import Answers from '../answers/Answers'
import './Options.css'


const Options = ({birdsDataEn}) => {
  const [category , setCategory] = useState([]);
  const [value, setValue]=useState('')

  useEffect(() => {
    setCategory(birdsDataEn)
  },[])

  const hander = () => {
    console.log(category)
  }













  return (
    <div>
      <div className='Options'>
      <div>
        <ul>
        {birdsDataEn.map((item) => (
          <li key={item.id} className='border' onClick={hander}>
            <div className='check'></div>
            <p className='Name'>{item.name}</p>
          </li>
      ))}
        </ul>
      </div>git 
      <div className='Answers'>
        <Answers props={birdsDataEn}/>
      </div>
    </div>
    <div className="btn">
      <button className='button'>Next Level</button>
    </div>
    </div>
  )
}

export default Options
