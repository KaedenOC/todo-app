import { useContext, useState } from 'react';
import { SettingsContext } from "../../Context/Settings";
import { createStyles, Grid, TextInput, Text, Switch, NumberInput, Button, Card } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import { When } from 'react-if';

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

//bringing in our context state
function SettingsForm() {
  const { classes } = useStyles();
  //creating show state for the settings
  const [show, setShow] = useState(false)
  const {
    showCompleted,
    displayItems,
    sort,
    setShowCompleted,
    setDisplayItems,
    setSort,
    storeLocal
  } = useContext(SettingsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    storeLocal();
    setShow(true);
    e.target.reset(); //resets form to default
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
          <Button type='submit'>Show New Settings</Button>
        </form>
        </Grid.Col>
        <Grid.Col span={6}>
          <When condition={show}>
          <Text fontSize="xl" weight="bold">Update Settings</Text>
          <Text>{showCompleted ? 'Show' : 'Hide'} Completed ToDos</Text>
          <Text>Items Per Page: {displayItems}</Text>
          <Text>Sort Keyowrd: {sort}</Text>
          </When>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default SettingsForm;