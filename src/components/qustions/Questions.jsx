import './Questions.css'

const Questions = (props) => {
  return (
    <div className='Quesrions'>
      <div className='img'>
        <img src={props.img} alt="" />
      </div>
      <div>
          <ul>
            <li><h3>******</h3></li>
            <li>
              <div>
                <audio src="" hidden></audio>
                <div className="controls">
                  
                </div>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Questions
