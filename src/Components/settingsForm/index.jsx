import { useContext } from 'react';
import { SettingsContext } from "../../Context/Settings";
import { createStyles } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';

//bringing in our styles and using in our return
const useStyles = createStyles((theme) => ({
  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    width: '80%',
    margin: 'auto',
    fontSize: theme.fontSizes.lg,
    padding: theme.spacing.md,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  }
}));


function SettingsForm() {
  const { classes } = useStyles();
  const {
    showCompleted,
    displayItems,
    sort,
    setShowCompleted,
    setDisplayItems,
    setSort,
    localStorage
  } = useContext(SettingsContext);

  return(
    <>
    <h1 className={classes.h1}><IconSettings />Manage Settings</h1>
    </>
  )
}

export default SettingsForm;