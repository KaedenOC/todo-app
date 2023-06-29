import { createStyles, Header, Navbar, Text, } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colors.blue[7],
    height: '100%',
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.md,
    padding: theme.spacing.md,
  }
}));

function HeaderComponent(){
    const { classes } = useStyles();
    return(
        <Header data-testid="header">
            <Navbar className={classes.navbar} >
               <Text>HOME</Text>
            </Navbar>
        </Header>
    )
}

export default HeaderComponent;