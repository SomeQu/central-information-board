import CurrentData from "../timeOutput/CurrentData"
import CurrentTime from "../timeOutput/CurrentTime"

const Header = () => {
  return (
    <header>
    <img src="RSK_Bank_Logo 1.jpg" alt="" />
    <CurrentTime/>
    <CurrentData/>
    </header>
  )
}

export default Header