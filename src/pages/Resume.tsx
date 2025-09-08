import { MenuPage, ResumePage } from '@/components'
import Grid from '@mui/material/Grid'
function Resume() {
  return (
    <div>
      <MenuPage />
      
      <div className="fade-in">
        <ResumePage></ResumePage>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ display: 'grid', height: '100vh', padding: '100px' }}
        >
          
        </Grid>
      </div>
    </div>
  )
}

export default Resume
