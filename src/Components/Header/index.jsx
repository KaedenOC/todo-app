import { createStyles, Header, Navbar, } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    height: '100%',
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.md,
    padding: theme.spacing.md,
    display: 'flex',
    // justifyContent: 'space-between',
    a: {
      justifyContent: 'space-around',
    }
  }
}));

//render Header component..Link component for the router
function HeaderComponent() {
  const { classes } = useStyles();
  return (
    <Header data-testid="header">
      <Navbar className={classes.navbar} >
        <a className={classes.a} href='/' default>
          Home
        </a>
        <a className={classes.a} href='/settings'>
          Settings
        </a>
      </Navbar>
    </Header>
  )
}

export default HeaderComponent;