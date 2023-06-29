import React, { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Pagination, Container, Card, Group, Badge, Text, CloseButton } from '@mantine/core';

function List({ list, toggleComplete, deleteItem }) {
  //utilizing the useContext hook//We use the useContext hook to access the SettingsContext and destructure the displayItems value from the context.
  const { displayItems, showCompleted } = useContext(SettingsContext);

  const [activePage, setPage] = useState(1);
  // Filter the list based on the showCompleted value
  const filteredList = showCompleted ? list : list.filter(item => !item.complete);
  //This ensures that only a maximum of displayItems items are included in the itemsToDisplay array.
  // const itemsToDisplay = filteredList.slice(0, displayItems);

  const pageCount = Math.ceil(filteredList.length / displayItems);

  const listStart = displayItems * (activePage - 1);
  const listEnd = listStart + displayItems;
  const finalItems = filteredList.slice(listStart, listEnd);
  return (
    <>
      <Container px="sm" spacing={10}>
        {finalItems.map(item => (
          <Card key={item.id} padding="lg" radius="sm" withBorder shadow="lg">
            <Card.Section withBorder px="xs">
              <Group padding="sm">
                <Badge color="green" variant="filled" onClick={() => toggleComplete(item.id)}>Pending</Badge>
                <Text fz="md">{item.assignee}</Text>
                <CloseButton title="Close popover" size="sm" />
              </Group>
            </Card.Section>
            <Card.Section inheritPadding py="xs">
              <Text fz="md" mt="xs">{item.text}</Text>
              <Text align="right"><small>Difficulty: {item.difficulty}</small></Text>
            </Card.Section>
            {/* <div key={item.id}> */}
            {/* <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div> */}
            <hr />
            {/* </div> */}

          </Card>

        ))}
        <Pagination value={activePage} onChange={setPage} total={pageCount} />

      </Container>
    </>
  )
}

export default List;