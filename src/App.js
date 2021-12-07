import {useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import AppSider from './components/AppSider.jsx';
import AppContactForm from './components/AppContactForm.jsx';
import AppSignUpForm from './components/AppSignUp.jsx';
import AppList from './components/AppList.jsx';


const { Header, Content } = Layout;


function App() {

  const [collapse, setCollapse] = useState(false)

  const [visible, setVisible] = useState('signUp');

  const toggle = () => {
    setCollapse(!collapse);
  };

  const pullData = (data) => {
    setVisible(data); // data from child element
  }


  return (
    <Layout>
      <AppSider parent={pullData} collapse={collapse} />
      <Layout className="site-layout">
        <Header className="site-layout-background ant-layout-header">
          {collapse ? <MenuUnfoldOutlined onClick={toggle} /> : <MenuFoldOutlined onClick={toggle} />}
        </Header>
        <Content className="site-layout-background">
          {visible === 'signUp' && <AppSignUpForm />}
          {visible === 'list' && <AppList />}
          {visible === 'contact' && <AppContactForm />}
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
