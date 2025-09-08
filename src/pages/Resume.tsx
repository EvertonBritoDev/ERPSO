import { MenuPage, ResumePage } from '@/components'
import Grid from '@mui/material/Grid'
function Resume() {
  return (
    <div>
      <MenuPage />
      <ResumePage></ResumePage>
      <div className="fade-in">
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ display: 'grid', height: '100vh', padding: '100px' }}
        >
          <div>
            
          </div>
        </Grid>
      </div>
    </div>
  )
}

export default Resume
