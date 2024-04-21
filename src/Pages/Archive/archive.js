import * as React from 'react';
import {Link,  Card, CardMedia, Box, Container, Grid, Button, Stack, Typography } from "@mui/material"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { LineChart } from '@mui/x-charts/LineChart';
import { mangoFusionPalette } from '@mui/x-charts/colorPalettes';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import testImg from '../../assets/data/cam1,m240408180000864.jpg'
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const Archive = () => {
  const [enlargeOpen, setEnlargeOpen] = React.useState(false);
  const yearlist = [1990, 1991, 1992, 1993, 1994, 1995, 1996,1997, 1998, 1999, 2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024]
  const tdayData = new Date();
  const [tdate, setTdate] = React.useState(tdayData.getDate());
  const [tyear, setTyear] = React.useState(tdayData.getFullYear());
  const [tmonth, setTmonth] = React.useState(tdayData.getMonth() + 1);
  const [thours, setThours] = React.useState(tdayData.getHours());
  const [tmins, setTmins] = React.useState(tdayData.getMinutes());

  const monthlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let daylist = [];
  let hrList = [];
  let minList = [];
  for (let index = 1; index < 32; index++) {
    daylist.push(index);
  }
  for (let hNum = 1; hNum < 25; hNum++) {
    hrList.push(hNum);
  }
  for (let mNum = 1; mNum < 61; mNum ++){
    minList.push(mNum);
  }
  const handleClose = () => {
    setEnlargeOpen(false);
  }
  const handleOpen = () => {
    setEnlargeOpen(true);
  }
  return (
    <div>
      <Box paddingY={5}>
        <Container>
          <Box>
            <Grid container spacing={2} >
              <Grid item xs={12}>
                <Stack direction="flex" alignItems="start" justifyContent="space-between">
                  <Link href="/">
                    <Button variant="text">
                      <ChevronLeftIcon />
                      Back To Home
                    </Button>
                  </Link>
                  <Typography sx={{fontWeight: "bold", marginTop: '2rem'}} variant="h3">ARCHIVED IMAGES</Typography>  
                  <Typography></Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container>
          <Stack direction="row" justifyContent="start" alignItems="center" useFlexGap>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              value={tyear}
              options={yearlist}
              sx={{ width: 150 }}
              renderInput={(params) => <TextField {...params} type='number' label="Year" />}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              value={tmonth}
              options={monthlist}
              sx={{ width: 150 }}
              renderInput={(params) => <TextField {...params} type='number' label="Month" />}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              value={tdate}
              options={daylist}
              sx={{ width: 150 }}
              renderInput={(params) => <TextField {...params} type='number' label="Day" />}
            />
            <span style={{paddingLeft: "30px", paddingRight: "30px"}}></span>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              value={thours}
              options={hrList}
              sx={{ width: 150 }}
              renderInput={(params) => <TextField {...params} type='number' label="Hour" />}
            />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              value={tmins}
              options={minList}
              sx={{ width: 150 }}
              renderInput={(params) => <TextField {...params} type='number' label="MINUTE" />}
            />
          </Stack>
        </Container>
      </Box>
      <Box padding={5}>
        <Container>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Card sx={{padding: "10px"}}>
                  <CardMedia
                    component="img"
                    alt="Yosemite National Park"
                    image={testImg}
                    onClick={() => {handleOpen()}}
                  />
                  <Stack direction="row" alignItems="center" justifyContent="center" spacing={3} p={2} useFlexGap>
                    <Stack direction="column" spacing={0.5} useFlexGap>
                      <Typography sx={{textAlign: 'center'}}>Camera 1 NW</Typography>
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
                  <Stack direction="row" alignItems="center" justifyContent="center" spacing={3} p={2} useFlexGap>
                    <Stack direction="column" spacing={0.5} useFlexGap>
                      <Typography sx={{textAlign: 'center'}}>Camera 1 NE</Typography>
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
                  <Stack direction="row" alignItems="center" justifyContent="center" spacing={3} p={2} useFlexGap>
                    <Stack direction="column" spacing={0.5} useFlexGap>
                      <Typography sx={{textAlign: 'center'}}>Camera 1 SE</Typography>
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
                  <Stack direction="row" alignItems="center" justifyContent="center" spacing={3} p={2} useFlexGap>
                    <Stack direction="column" spacing={0.5} useFlexGap>
                      <Typography sx={{textAlign: 'center'}}>Camera 1 SW</Typography>
                    </Stack>
                  </Stack>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
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