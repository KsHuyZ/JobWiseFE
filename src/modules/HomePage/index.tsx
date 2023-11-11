'use client';

import { Col, Row, Space } from 'antd';
import React from 'react';

import CreatePost from './components/CreatePost';
import Post from './components/Post';

const HomePage = () => {
  return (
    <Space direction="vertical">
      <Row justify="center">
        <Col sm={10} lg={10} md={10}>
          <Space className="w-full" direction="vertical">
            <CreatePost />
            <Post />
            <Post />
            <Post />
          </Space>
        </Col>
      </Row>
    </Space>
  );
};

export default HomePage;
