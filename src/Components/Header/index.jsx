import { createStyles, Header, Navbar, Group } from "@mantine/core";
import Login from "../Login";

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
      textDecoration: 'none',
      color: 'white',
    }
  }
}));

//render Header component..Link component for the router
function HeaderComponent() {
  const { classes } = useStyles();
  return (
    <Header data-testid="header">
      <Navbar className={classes.navbar} >
        <Group>
          <a className={classes.a} href='/' default>
            Home
          </a>
          <a className={classes.a} href='/settings'>
            Settings
          </a>
        </Group>
        <Group position='right'>
          <Login />
        </Group>
      </Navbar>
    </Header>
  )
}

export default HeaderComponent;