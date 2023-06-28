// import React from "react";
import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    textAlign: 'right',
    width: '80%',
    margin: 'auto',
  }
}));

function Footer() {
  const { classes } = useStyles();
  return(
    <footer className={classes.footer}>2023 Kaeden O.</footer>
  )
}

export default Footer;