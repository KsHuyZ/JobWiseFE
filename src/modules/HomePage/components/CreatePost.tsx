'use client';

import {
  Button,
  Card,
  Col,
  Image,
  Input,
  Modal,
  Row,
  Space,
  Typography,
} from 'antd';
import React, { useState } from 'react';
import { FaRegCalendar, FaRegImage } from 'react-icons/fa6';

const { Text } = Typography;

const Footer = ({
  content,
  onSubmit,
}: {
  content: string;
  onSubmit: () => void;
}) => (
  <Row>
    <Col span={24}>
      <Button
        disabled={content.length === 0}
        type="primary"
        onClick={onSubmit}
        className="w-full"
      >
        Post
      </Button>
    </Col>
  </Row>
);

const CreatePost = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [content, setContent] = useState('');
  return (
    <Card>
      <Modal
        title="Create Post"
        open={showCreate}
        onCancel={() => setShowCreate(false)}
        footer={
          <Footer content={content} onSubmit={() => console.log('Ahihi')} />
        }
      >
        <Row className="mb-5">
          <Col span={12}>
            <Image
              preview={false}
              alt="profile"
              src="https://cafefcdn.com/zoom/600_315/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
              width={40}
              height={40}
              className="mr-5 rounded-full object-cover"
            />
            <Text className="ml-5">Phan Tien Huy</Text>
          </Col>
        </Row>
        <textarea
          placeholder="What do want to talk about?"
          className="h-48 w-full border-0 text-start outline-0 placeholder:text-xl"
          onChange={(e) => setContent(e.target.value)}
        />
        <Row>
          <Col>
            <Button type="text" icon={<FaRegImage className="text-xl" />} />
          </Col>
        </Row>
      </Modal>
      <Space direction="vertical" className="w-full">
        <Row className="w-full" align="middle">
          <Col md={3} lg={3} sm={3}>
            <Image
              preview={false}
              alt="profile"
              src="https://cafefcdn.com/zoom/600_315/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          </Col>
          <Col sm={21} md={21} lg={21}>
            <Input
              placeholder="What do you think about?"
              onClick={() => setShowCreate(true)}
            />
          </Col>
        </Row>
        <Row justify="space-between" align="middle">
          <Button
            type="text"
            className="w-2/6 text-zinc-600"
            icon={<FaRegImage className="text-blue-600" />}
          >
            Media
          </Button>

          <Button
            type="text"
            className="w-2/6 text-zinc-600"
            icon={<FaRegCalendar className="text-yellow-600" />}
          >
            Event
          </Button>
          <Button
            type="text"
            className="w-2/6 text-zinc-600"
            icon={<FaRegImage className="text-primary" />}
          >
            Media
          </Button>
        </Row>
      </Space>
    </Card>
  );
};

export default CreatePost;
