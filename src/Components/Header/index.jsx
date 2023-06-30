import { createStyles, Header, Navbar, } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    height: '100%',
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.md,
    padding: theme.spacing.md,
    display: 'flex',
    justifyContent: 'space-between',
    link: {
      padding: theme.spacing.sm,
    }
  }
}));

//render Header component..Link component for the router
function HeaderComponent() {
  const { classes } = useStyles();
  return (
    <Header data-testid="header">
      <Navbar className={classes.navbar} >
        <Link className={classes.link} to='/'>Home</Link>
        <Link className={classes.link} to='/settings'>Settings</Link>
      </Navbar>
    </Header>
  )
}

export default HeaderComponent;