

import Answers from '../answers/Answers'
import './Options.css'


const Options = ({birdsDataEn}) => {
  let str = "blog ishindegi ozgeris";
  return (
    <div>
      <div className='Options'>
      <div>
        <ul>
        {birdsDataEn.map((item) => (
          <li key={item.id} className='border'>
            <div className='check'></div>
            <p>{item.name}</p>
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
