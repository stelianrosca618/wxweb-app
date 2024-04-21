import * as React from 'react';
import {Link, Box, Container, Grid, Button, Stack, Typography } from "@mui/material"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { LineChart } from '@mui/x-charts/LineChart';
import { mangoFusionPalette } from '@mui/x-charts/colorPalettes';

const defaultSeries = [
  { id: '1', data: [4, 5, 1, 2, 3, 3, 2], area: true, stack: '1' },
  { id: '2', data: [7, 4, 6, 7, 2, 3, 5], area: true, stack: '1' },
  { id: '3', data: [6, 4, 1, 2, 6, 3, 3], area: true, stack: '1' },
  { id: '4', data: [4, 7, 6, 1, 2, 7, 7], area: true, stack: '1' },
  { id: '5', data: [2, 2, 1, 7, 1, 5, 3], area: true, stack: '1' },
  { id: '6', data: [6, 6, 1, 6, 7, 1, 1], area: true, stack: '1' },
  { id: '7', data: [7, 6, 1, 6, 4, 4, 6], area: true, stack: '1' },
  { id: '8', data: [4, 3, 1, 6, 6, 3, 5], area: true, stack: '1' },
  { id: '9', data: [7, 6, 2, 7, 4, 2, 7], area: true, stack: '1' },
].map((item, index) => ({
  ...item,
  color: mangoFusionPalette('light')[index],
}));

export const Trends = () => {
  // const [series, setSeries] = React.useState(defaultSeries);
  const [wxSeries, setWxSeries] = React.useState([4, 5, 1, 2, 3, 3, 2]);
  const [wtSeries, setWtSeries] = React.useState([7, 4, 6, 7, 2, 3, 5]);
  const [nbSeries, setNbSeries] = React.useState(3);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

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
                  <Typography sx={{fontWeight: "bold", marginTop: '2rem'}} variant="h3">WEATHER DATA</Typography>  
                  <Typography></Typography>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7] }]}
                  series={[
                    { data: wxSeries, label: 'WIND SPEED'},
                    { data: wtSeries, label: 'WIND GUEST'},
                  ]}
                  skipAnimation={skipAnimation}
                  height={400}
                />
              </Grid>
              <Grid item xs={12}>
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7] }]}
                  series={[
                    { data: wxSeries, label: 'WIND DIRECTION'},
                  ]}
                  skipAnimation={skipAnimation}
                  height={400}
                />
              </Grid>
              <Grid item xs={12}>
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7] }]}
                  series={[
                    { data: wxSeries, label: 'TEMPERATURE'},
                    { data: wtSeries, label: 'DEW POINT'},
                  ]}
                  skipAnimation={skipAnimation}
                  height={400}
                />
              </Grid>
              <Grid item xs={12}>
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7] }]}
                  series={[
                    { data: wxSeries, label: 'BAROMENTIC PRESSURE'},
                  ]}
                  skipAnimation={skipAnimation}
                  height={400}
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  )
}