import React from 'react'

import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  UnorderedListOutlined,
  ContactsOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const AppSider = ({collapse, parent}) => {

    const handleClick = (e) => {
        parent(e.key)
    }

    return (
        <>
            <Sider trigger={null} collapsible collapsed={collapse}>
                <div className="logo">George</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['signUp']}>
                    <Menu.Item onClick={handleClick} key="signUp" icon={<UserOutlined />}>
                        Sign Up
                    </Menu.Item>
                    <Menu.Item onClick={handleClick} key="list" icon={<UnorderedListOutlined />}>
                        Users List
                    </Menu.Item>
                    <Menu.Item onClick={handleClick} key="contact" icon={<ContactsOutlined />}>
                        Contact Us
                    </Menu.Item>
                </Menu>
            </Sider>
        </>
    )
}

export default AppSider
