import React from 'react';
import { Form, Input, Button, Modal } from 'antd';
import { useRouter } from 'next/navigation';

const Register = ({ openModal, handleClose, success }) => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = (values) => {
    sessionStorage.setItem('user', JSON.stringify(values));
    success();
    handleClose();
    form.resetFields();
    router.push('/main');
  };

  // Define the layout for form items
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 },
    },
  };

  // Custom layout for the submit button
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 18,
        offset: 6,
      },
    },
  };

  return (
    <Modal
      title="Register"
      open={openModal}
      footer={null}
      onCancel={handleClose}
      className='flex items-center justify-center w-full'
    >
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        layout="horizontal"
        className='flex flex-col p-4 lg:w-[40rem]'
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please input your Name!', whitespace: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="surname"
          label="Surname"
          rules={[{ required: true, message: 'Please input your Surname!', whitespace: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className='w-full bg-blue-500 hover:bg-blue-700'>
            Register
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Register;
