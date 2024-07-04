import React from 'react';
import { Card, List } from 'antd';

const data = [
  {
    title: 'Project 1',
    description: 'This is a brief description of Project 1.',
  },
  {
    title: 'Project 2',
    description: 'This is a brief description of Project 2.',
  },
];

const Projects: React.FC = () => {
  return (
    <Card title="Projects" style={{ marginBottom: '24px' }}>
      <List
        itemLayout="vertical"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default Projects;
