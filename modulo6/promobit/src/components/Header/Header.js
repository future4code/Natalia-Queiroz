import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import tmdb from '../../assets/tmdb.png'
import { useHistory } from 'react-router-dom'
import { goToHomePage } from '../../router/coordinator'
import { Button } from '@material-ui/core'

const Header = () => {
  const history = useHistory()

  return (

    <AppBar position="static">
      <Toolbar>
        <Button>
          <img src={tmdb} alt="cabeçalho" onClick={() => goToHomePage(history)} />
        </Button>
      </Toolbar>
    </AppBar>

  )
}

export default Header


// import React from "react"
// import { HeaderContainer, Logo } from "./styled";
// import tmdb from '../../assets/tmdb.png'
// import { useHistory } from 'react-router-dom'
// import { goToHomePage } from '../../router/coordinator'
// // import { Button } from "@material-ui/core/Button";

// const Header = () => {
//   const history = useHistory()
//   return (
//     <HeaderContainer>
//       {/* <Button> */}
//         <Logo onClick={() => goToHomePage(history)} src={tmdb} alt="cabeçalho" />
//       {/* </Button> */}
//     </HeaderContainer>
//   );
// }

// export default Header