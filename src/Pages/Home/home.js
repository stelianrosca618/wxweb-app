import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Height, Image } from '@material-ui/icons';
import testImg from '../../assets/data/cam1,m240408180000864.jpg'
import {Link, Card, CardMedia, Chip, Rating, Stack, Typography } from '@mui/material';
import {Button} from '@mui/material';
import Modal from '@mui/material/Modal';
import weatherBrand from '../../assets/weatherBrand.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  maxWidth: '80vw',
  // height: '80vh',
  // maxHeight: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const Home = () => {
  const [enlargeOpen, setEnlargeOpen] = React.useState(false);
  const tdayData = new Date();
  console.log('getData', tdayData.getDate(), tdayData.getMonth(), tdayData.getFullYear(), tdayData.getHours(), tdayData.getMinutes());
  const handleClose = () => {
    setEnlargeOpen(false);
  }
  const handleOpen = () => {
    setEnlargeOpen(true);
  }

  return (
    <div>
      <Box sx={{padding: '3rem'}}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Box>
              <Grid container spacing={2} padding={4}>
                <Grid item xs={6}>
                  <Card sx={{padding: "10px"}}>
                    <CardMedia
                      component="img"
                      alt="Yosemite National Park"
                      image={testImg}
                      onClick={() => {handleOpen()}}
                    />
                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3} p={2} useFlexGap>
                      <Stack direction="column" spacing={0.5} useFlexGap>
                        <Button onClick={() => {handleOpen()}} variant="outlined">ENLARGE</Button>
                      </Stack>
                      <Stack direction="column" spacing={0.5} useFlexGap>
                        <Typography sx={{textAlign: 'center'}}>Camera 1 NW</Typography>
                      </Stack>
                      <Stack direction="column" spacing={0.5} useFlexGap>
                        <Button variant="outlined">TIME-LAPSE</Button>
                      </Stack>
                    </Stack>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{padding: "10px"}}>
                    <CardMedia
                      component="img"
                      alt="Yosemite National Park"
                      image={testImg}
                      onClick={() => {handleOpen()}}
                    />
                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3} p={2} useFlexGap>
                      <Stack direction="column" spacing={0.5} useFlexGap>
                        <Button onClick={() => {handleOpen()}} variant="outlined">ENLARGE</Button>
                      </Stack>
                      <Stack direction="column" spacing={0.5} useFlexGap>
                        <Typography sx={{textAlign: 'center'}}>Camera 2 NE</Typography>
                      </Stack>
                      <Stack direction="column" spacing={0.5} useFlexGap>
                        <Button variant="outlined">TIME-LAPSE</Button>
                      </Stack>
                    </Stack>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{padding: "10px"}}>
                    <CardMedia
                      component="img"
                      alt="Yosemite National Park"
                      image={testImg}
                      onClick={() => {handleOpen()}}
                    />
                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3} p={2} useFlexGap>
                      <Stack direction='column' spacing={0.5} useFlexGap>
                        <Button onClick={() => {handleOpen()}} variant="outlined">ENLARGE</Button>
                      </Stack>
                      <Stack direction="column" spacing={0.5} useFlexGap>
                        <Typography sx={{textAlign: 'center'}}>Camera 4 SW</Typography>
                      </Stack>
                      <Stack direction="column" spacing={0.5} useFlexGap>
                        <Button variant="outlined">TIME-LAPSE</Button>
                      </Stack>
                    </Stack>
                  </Card>
                </Grid>
                <Grid item xs={6}>
                  <Card sx={{padding: "10px"}}>
                    <CardMedia
                      component="img"
                      alt="Yosemite National Park"
                      image={testImg}
                      onClick={() => {handleOpen()}}
                    />
                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3} p={2} useFlexGap>
                      <Stack direction="column" spacing={0.5} useFlexGap>
                        <Button onClick={() => {handleOpen()}} variant="outlined">ENLARGE</Button>
                      </Stack>
                      <Stack direction="column" spacing={0.5} useFlexGap>
                        <Typography sx={{textAlign: 'center'}}>Camera 3 SE</Typography>
                      </Stack>
                      <Stack direction="column" spacing={0.5} useFlexGap>
                        <Button variant="outlined">TIME-LAPSE</Button>
                      </Stack>
                    </Stack>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={1} padding={2}>
              <Grid item xs={12}>
                <img src={weatherBrand}/>
              </Grid>
              <Grid item xs={12} marginY={3}>
                <Stack direction="row" spacing={15} alignItems='center' justifyContent='center' useFlexGap>
                  <Stack direction='column' useFlexGap>
                    <Typography sx={{textAlign: 'center', fontWeight: 'bold'}} variant="h3">{String((tdayData.getMonth()+1)).padStart(2, '0')} / {String(tdayData.getDate()).padStart(2, '0')}</Typography>
                  </Stack>
                  <Stack direction='column' useFlexGap>
                    <Typography sx={{textAlign: 'center', fontWeight: 'bold'}} variant="h3">{String(tdayData.getHours()).padStart(2, '0')} : {String(tdayData.getMinutes()).padStart(2, '0')}</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} marginY={3}>
                <Stack direction="row" spacing={15} alignItems='center' justifyContent='center' useFlexGap>
                  <Stack direction='column' useFlexGap>
                    <Typography sx={{textAlign: 'center', fontWeight: 'bold'}} variant="h3">31 &ordm;</Typography>
                    <Typography variant='body2' sx={{textAlign: 'center'}}>TEMP</Typography>
                  </Stack>
                  <Stack direction='column' useFlexGap>
                    <Typography sx={{textAlign: 'center', fontWeight: 'bold'}} variant="h3">25 &ordm;</Typography>
                    <Typography variant='body2' sx={{textAlign: 'center'}}>DEW POINT</Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={12} marginY={3}>
                <Stack direction='column' spacing={2} useFlexGap>
                  <Typography sx={{textAlign: 'center', fontWeight: 'bold'}} variant="h3">360 &#x2da;@ 12 G 15</Typography>
                  <Typography variant='body2' sx={{textAlign: 'center'}}>WIND (KTS)</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} marginY={3}>
                <Stack direction='column' spacing={1} useFlexGap>
                  <Typography sx={{textAlign: 'center', fontWeight: 'bold'}} variant="h3">29.92 &#8710;</Typography>
                  <Typography variant='body2' sx={{textAlign: 'center'}}>BAROMETER (inHg)</Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} sx={{marginTop: '3rem'}}> 
                <Stack direction='column' textAlign={'center'} spacing={3} useFlexGap>
                  <Link href="/wxtrends" underline="always">
                    <Button variant="white" size="large">WEATUER TRENDS</Button>
                  </Link>
                  <Link href="/archive" underline="always">
                    <Button variant="white" size="large">ARCHIVE IMAGES</Button>
                  </Link>      
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{padding: '3rem'}}>
        
      </Box>
      <Modal
        keepMounted
        open={enlargeOpen}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <img style={{width: '100%'}} src={testImg} />
        </Box>
      </Modal>
    </div>
  )
}