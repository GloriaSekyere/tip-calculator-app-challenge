import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <h1>Splitter</h1>
    </header>
  )
}

export default Header