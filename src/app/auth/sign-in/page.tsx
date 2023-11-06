'use client';

import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row, Space, Typography } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';

import { GithubIcon, GoogleIcon } from '@/assets/icons';
import { validateEmail } from '@/utils';

const { Title, Paragraph } = Typography;

export default function LoginPage() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <Row align="middle" justify="center" className="h-full w-full">
      <Col xs={6} lg={9} sm={12}>
        <Card
          bordered={false}
          style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
        >
          <Title>Sign in</Title>
          <Space>
            <Paragraph>Stay updated on your professional world</Paragraph>
          </Space>
          <Form form={form} onFinish={onFinish}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { validator: validateEmail },
              ]}
            >
              <Input
                placeholder="Email or Phone"
                disabled={loading}
                prefix={<MailOutlined />}
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password
                placeholder="Password"
                size="large"
                prefix={<LockOutlined />}
                disabled={loading}
              />
            </Form.Item>
            <Button type="link">Forgot Password?</Button>
            <Form.Item>
              <Row>
                <Col span={24}>
                  <Link href="/auth/sign-up">
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={loading}
                      style={{ width: '100%' }}
                    >
                      Sign In
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Form.Item>
          </Form>

          <hr className="hr-text" data-content="or" />
          <Row style={{ margin: '10px 0' }}>
            <Button
              type="default"
              icon={<GoogleIcon />}
              style={{ width: '100%' }}
              loading={loading}
            >
              Sign in with Google
            </Button>
          </Row>
          <Row>
            <Button
              type="default"
              icon={<GithubIcon />}
              style={{ width: '100%' }}
              loading={loading}
            >
              Sign in with Github
            </Button>
          </Row>
          <Row style={{ margin: '10px 0' }} justify="center">
            <Col>
              New to App?
              <Button type="link">
                <Link href="/auth/sign-up">Join now </Link>
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}
