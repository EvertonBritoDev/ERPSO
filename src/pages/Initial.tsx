// MUI
//import Box from '@mui/material/Box'
//import Container from '@mui/material/Container'
//import Grid from '@mui/material/Grid'
// COMPONENTS
import { ImgCartoonOpticaAndTech, MenuPage } from '@/components'

function Initial() {
  return (
    <div className="screen-initial">
      <MenuPage />
      <div className="container-img-principal">
        <div className="img-principal fade-in">
          <ImgCartoonOpticaAndTech></ImgCartoonOpticaAndTech>
        </div>
      </div>
    </div>
  )
}

export default Initial
