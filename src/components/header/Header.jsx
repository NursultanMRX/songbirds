import './Header.css'
const Header = () => {
  const Score = 0;
  return (
    <div className='header'>
      <div className='header-head'>
      <div className='logo'>
        SongBird
      </div>
      <div className='Score'>Score:<span>{Score}</span></div>
      </div>
      <div className='Navbar'>
        <ul className='d-flex'>
          <li>Разминка</li>
          <li>Воробьиные</li>
          <li>Лесные птицы</li>
          <li>Певчие птицы</li>
          <li>Хищные птицы</li>
          <li>Морские птицы</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
