import { Avatar, Card, Col, Row } from 'antd'
import React, {useState, useEffect} from 'react'
import {
    UserOutlined
  } from '@ant-design/icons';


const AppList = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if(response.ok){
                    return response.json()
                }
                throw response;
            })
            .then(json => {
                setData(json)
            })
            .catch(error => {
                console.log("error fetching data: ", error);
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    if (loading) return "Loading...";

    if (error) return "Error!!!";

    return (
        <div className="container-fluid">
            <Row gutter={[16, 16]}>
                {
                    data === null ? console.log("error") 
                    : 
                    data.map(item => (
                        <Col xs={24} sm={12} md={8} lg={8} xl={6} span={8}>
                            <Card 
                                key={item['id']}
                                title={<Avatar size={24} icon={<UserOutlined />} />} 
                                bordered={true}
                            >
                                <p>name: {item['name']}</p>
                                <p>Username: {item['username']}</p>
                                <p>Email: {item['email']}</p>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default AppList
