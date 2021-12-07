import React, {useState} from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MessageOutlined, MailOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const AppContactForm = () => {

    const [submited, setSubmited] = useState(false);

    const [form] = Form.useForm();

    const onFinish = (values) => {
      console.log('contact' + values);
      setSubmited(true);
      form.resetFields()
    };


    return (
      <>
        <Form
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onChange={() => {setSubmited(false)}}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="subject"
          >
            <Input prefix={<MessageOutlined className="site-form-item-icon" />} placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="message"
          >
            <TextArea prefix={<MessageOutlined className="site-form-item-icon" />} placeholder="Write your text here..." autoSize={{ minRows: 3, maxRows: 5 }} />
          </Form.Item>
    
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Send message
            </Button>
          </Form.Item>
        </Form>
        {submited && <p>Thanks for your message!</p>}
      </>
    );
}

export default AppContactForm
