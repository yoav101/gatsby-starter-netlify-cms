import React from "react";
import Grid from "@mui/material/Grid";
import chabadHerzliya from '../img/clients/chabadHerzliya.png';
import mySelfFit from '../img/clients/mySelfFit.png';
import personetics from '../img/clients/personetics.png';
import commIT from '../img/clients/commIT.png';

export default function ClientsGrid() {
  return (
    <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
            <img
            alt="chabadHerzliya" 
            src={chabadHerzliya}
            />
        </Grid>
        <Grid item xs={6} md={4}>
            <img
            alt="mySelfFit" 
            src={mySelfFit}
            />
        </Grid>
        <Grid item xs={6} md={4}>
            <img 
            alt="personetics"
            src={personetics}
            />
        </Grid>
         <Grid item xs={6} md={4}>
            <img 
            alt="commIT"
            src={commIT}
            />
        </Grid>
    </Grid>
  );
}