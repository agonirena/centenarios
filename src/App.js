import React, { useMemo } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import EHMendiakMap from './components/EHMendiakMap'
import EHMendiakTable from './components/EHMendiakTable'
import {useForm, Form} from './components/useForm';
import Controls from './components/controls/Controls'

let araba = require('./assets/araba.json')
let araba_burgos = require('./assets/araba-burgos.json')
let bizkaia = require('./assets/bizkaia.json')
let bizkaia_kantabria = require('./assets/bizkaia-kantabria.json')
let gipuzkoa = require('./assets/gipuzkoa.json')
let nafarroa = require('./assets/nafarroa.json')
let picos_europa_macizo_occidental = require('./assets/picos-europa-macizo-occidental.json')
let pirineoak_bernera_aspe = require('./assets/pirineoak-bernera-aspe.json')
let sierra_nevada = require('./assets/sierra-nevada.json')

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2, 0, 6),
  },
  pageContent: {
    margin: theme.spacing(2),
    padding: theme.spacing(2)
  },
}));

const TheForm = (props) => {

  const {values, handleInputChange} = props

  return (
    <Form>
      <Grid container>
        <Grid item xs={8}>
          <FormControl component="fieldset" >
            <FormLabel component="legend">Lurraldea</FormLabel>
            <FormGroup row>
              <Controls.Checkbox checked={values.araba} onChange={handleInputChange} name="araba" label="Araba" />
              <Controls.Checkbox checked={values.araba_burgos} onChange={handleInputChange} name="araba_burgos" label="Araba - Burgos" />
              <Controls.Checkbox checked={values.bizkaia} onChange={handleInputChange} name="bizkaia" label="Bizkaia" />
              <Controls.Checkbox checked={values.bizkaia_kantabria} onChange={handleInputChange} name="bizkaia_kantabria" label="Bizkaia - Kantabria" />
              <Controls.Checkbox checked={values.gipuzkoa} onChange={handleInputChange} name="gipuzkoa" label="Gipuzkoa" />
              <Controls.Checkbox checked={values.picos_europa_macizo_occidental} onChange={handleInputChange} name="picos_europa_macizo_occidental" label="Picos Europa - Macizo Occidental" />
              <Controls.Checkbox checked={values.pirineoak_bernera_aspe} onChange={handleInputChange} name="pirineoak_bernera_aspe" label="Pirineoak Bernera Aspe" />
              <Controls.Checkbox checked={values.nafarroa} onChange={handleInputChange} name="nafarroa" label="Nafarroa" />
              <Controls.Checkbox checked={values.sierra_nevada} onChange={handleInputChange} name="sierra_nevada" label="Sierra Nevada" />
            </FormGroup>
            <FormHelperText>Aukeratu lurraldea</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          Lorem ipsum
        </Grid>
      </Grid>    
    </Form>
  )
}

function App() {
  const classes = useStyles();

  const initialFValues = {
    araba: false,
    araba_burgos: false,
    bizkaia: false,
    bizkaia_kantabria: false,
    gipuzkoa: false,
    nafarroa: true,
    picos_europa_macizo_occidental: false,
    pirineoak_bernera_aspe: false,
    sierra_nevada: false
  }
  
  const {values, setValues, handleInputChange} = useForm(initialFValues)
  
  let mountains = useMemo (() => {
    return []
      .concat(values.araba ? araba : [])
      .concat(values.araba_burgos ? araba_burgos : [])
      .concat(values.bizkaia ? bizkaia : [])
      .concat(values.bizkaia_kantabria ? bizkaia_kantabria : [])
      .concat(values.gipuzkoa ? gipuzkoa : [])
      .concat(values.nafarroa ? nafarroa : [])
      .concat(values.picos_europa_macizo_occidental ? picos_europa_macizo_occidental : [])
      .concat(values.pirineoak_bernera_aspe ? pirineoak_bernera_aspe : [])
      .concat(values.sierra_nevada ? sierra_nevada : [])
      .map((montain, index) => {
        return {
          ...montain,
          id: index + 1
        }
      })
  }, [values])
  
  
  
  /*
    .concat(gipuzkoa)
    .concat(araba)  
    .concat(bizkaia)
    .concat(sierra_nevada)
    .concat(bizkaia_kantabria)
    .concat(picos_europa_macizo_occidental)
    .concat(pirineoak_bernera_aspe)
  */
    
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <FilterHdrIcon />
          <Typography variant="h6" color="inherit" noWrap>
            &nbsp;Euskal Herriko mendiak / Cimas de Euskal Herria
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Paper className={classes.pageContent}>
          <TheForm values={values} handleInputChange={handleInputChange} />
        </Paper>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Container>
              <EHMendiakTable mountains={mountains} />
            </Container>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Container>
              <EHMendiakMap mountains={mountains} />
            </Container>
          </Grid>
        </Grid>
      </main>
    
    </React.Fragment>
    
  );
}

export default App;
