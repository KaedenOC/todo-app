import { useContext } from 'react';
import { SettingsContext } from "../../Context/Settings";
import { createStyles, Grid, TextInput, Text, Switch, NumberInput, Button, Card } from '@mantine/core';
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

  const handleSubmit = () => {

  }

  return (
    <>
      <h1 className={classes.h1}><IconSettings />Manage Settings</h1>
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col span={6}>
        <form onSubmit={handleSubmit}>
          <Text fontSize="xl" weight="bold">Update Settings</Text>
          <Switch
            checked={showCompleted}
            onChange={(e) => setShowCompleted(e.currentTarget.checked)}
            label='Show Completed Todos'
          />
          <NumberInput
            value={displayItems}
            label='Items Per Page'
            onChange={setDisplayItems}
          />
          <TextInput
            placeholder={sort}
            label="Sort Keyword"
            onChange={(e) => setSort(e.target.value)}
          />
          <Button>Show New Settings</Button>
        </form>
        </Grid.Col>
        <Grid.Col span={6}>
          <Text fontSize="xl" weight="bold">Update Settings</Text>
          <Text>{showCompleted ? 'Show' : 'Hide'} Completed ToDos</Text>
          <Text>Items Per Page: {displayItems}</Text>
          <Text>Sort Keyowrd: {sort}</Text>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default SettingsForm;