import * as React from 'react';
import {Button, Card, Title, Paragraph} from 'react-native-paper';


const LogList = () => (
  <Card>
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>Update</Button>
      <Button>Delete</Button>
    </Card.Actions>
  </Card>
);

export default LogList;
