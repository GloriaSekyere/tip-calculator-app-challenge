const Header = () => {
  return (
    <header className="header">
      <img src={process.env.PUBLIC_URL+"images/logo.svg"} alt="logo" />
    </header>
  )
}

export default Header