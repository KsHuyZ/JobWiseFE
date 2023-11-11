'use client';

import { Button, Card, Col, Form, Input, Row, Select, Typography } from 'antd';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import provinceApi from '@/api/provinceApi';
import { GithubIcon, GoogleIcon } from '@/assets/icons';
import { useDebounce } from '@/hooks';
import { validateEmail } from '@/utils';

const { getProvince } = provinceApi;
const { Title, Text } = Typography;

const SignUp = () => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );
  const [inputValue, setInputValue] = useState('');
  const [form] = Form.useForm();

  const debouncedInputValue = useDebounce<string>(inputValue, 500);
  const handleGetProvinces = async () => {
    const result = await getProvince(debouncedInputValue);
    const option = result.map((res: any) => ({
      label: res.name,
      value: res.code,
    }));
    setOptions(option);
  };

  useEffect(() => {
    if (debouncedInputValue) handleGetProvinces();
  }, [debouncedInputValue]);

  const handleFinishAuth = () => {};
  return (
    <Row justify="center">
      <Col xs={9} lg={12} sm={9} md={6}>
        <Card
          bordered={false}
          style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }}
        >
          <Title>Sign Up</Title>
          <Form onFinish={handleFinishAuth} form={form}>
            <Row justify="space-between">
              <Col span={11}>
                <Form.Item
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input size="large" placeholder="First Name" />
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input size="large" placeholder="Last Name" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { validator: validateEmail },
              ]}
            >
              <Input placeholder="Email" size="large" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password placeholder="Password" size="large" />
            </Form.Item>
            <Form.Item
              name="repassword"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password placeholder="Retype Password" size="large" />
            </Form.Item>
            <Form.Item
              name="province"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Select
                showSearch
                size="large"
                placeholder="Select your provinces"
                optionFilterProp="children"
                onSearch={(value) => setInputValue(value)}
                filterOption={(input, option) =>
                  (option?.label ?? '').includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? '')
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? '').toLowerCase())
                }
                options={options}
              />
            </Form.Item>
            <Form.Item>
              <Text className="text-center">
                By clicking Agree & Join, you agree to the Psy User{' '}
                <Button type="link">Agreement, Privacy Policy</Button>, and
                <Button type="link"> Cookie Policy</Button>.
              </Text>
            </Form.Item>
            <Form.Item>
              <Row>
                <Col span={24}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    // loading={loading}
                    className="w-full"
                  >
                    Agree & Join
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
          <hr className="hr-text" data-content="or" />
          <Row style={{ margin: '10px 0' }}>
            <Button
              type="default"
              icon={<GoogleIcon />}
              className="w-full"
              // loading={loading}
            >
              Continue with Google
            </Button>
          </Row>
          <Row>
            <Button
              type="default"
              icon={<GithubIcon />}
              style={{ width: '100%' }}
              // loading={loading}
            >
              Continue with Github
            </Button>
          </Row>
          <Row style={{ margin: '10px 0' }} justify="center">
            <Col>
              Already on Psy?
              <Link href="/auth/sign-in">
                <Button type="link">Sign In</Button>
              </Link>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default SignUp;
