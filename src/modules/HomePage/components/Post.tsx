import { LikeOutlined, MessageOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  Divider,
  Image,
  Row,
  Space,
  Typography,
} from 'antd';
import React from 'react';
import { FaRegShareFromSquare } from 'react-icons/fa6';

import { getCurrentDate } from '@/utils';

const { Text } = Typography;

const Post = () => {
  return (
    <Card>
      <Row className="mb-5" align="middle">
        <Col span={2}>
          <Image
            preview={false}
            alt="profile"
            src="https://cafefcdn.com/zoom/600_315/203337114487263232/2022/3/3/photo1646280815645-1646280816151764748403.jpg"
            width={40}
            height={40}
            className="mr-5 rounded-full object-cover"
          />
        </Col>
        <Col span={10} className="ml-5">
          <Space direction="vertical" align="start">
            <Text className="font-bold">Phan Tien Huy</Text>
            <Text>{getCurrentDate()}</Text>
          </Space>
        </Col>
      </Row>
      <Row className="my-2 w-full">
        <Text>Ahihihihihihihihihihihihihihihih</Text>
      </Row>
      <Row justify="center" className="w-full">
        <Image
          src="https://media.licdn.com/dms/image/D5622AQE6cC9e57Ed2Q/feedshare-shrink_800/0/1697898053530?e=1702512000&v=beta&t=-ZGawaIrVqnE4wU3668ZYZZcZHypvE0ygXbDAed3UY4"
          alt="Vjp"
          width="100%"
        />
      </Row>
      <Row>
        <Divider />
      </Row>
      <Row>
        <Button
          type="text"
          className="w-2/6"
          icon={<LikeOutlined className="text-xl" />}
        >
          Like
        </Button>
        <Button
          type="text"
          className="w-2/6"
          icon={<MessageOutlined className="text-xl" />}
        >
          Comment
        </Button>
        <Button
          type="text"
          className="w-2/6"
          icon={<FaRegShareFromSquare className="text-xl" />}
        >
          Comment
        </Button>
      </Row>
    </Card>
  );
};

export default Post;
