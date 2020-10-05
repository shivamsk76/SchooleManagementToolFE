import React from 'react'
import { Layout } from 'antd';
import { Typography } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import shiv from '../images/shiv.jpg';
import Sidenav from '../Dashboard/Menu'

const { Title } = Typography;

const { Header, Footer, Sider, Content } = Layout;

function Dashboard(){
  return(
  <div className="App">
  

    <Layout>
      <Header style={{background:'Green' ,floor:'right'}}> <Avatar src={shiv} style={{float:'right'}} size="large" icon={<UserOutlined />} /><Title style={{color:'white' }}>Holy Child Convent hr.Sec School</Title></Header>
      <Layout>
        <Sider><Sidenav/></Sider>
        <Layout>
        
        <Content>oirewtuirjtkkkkkdfkzjod['</Content>
     
      <Footer style={{background:'blue'}}>Footer</Footer>
      </Layout>
      </Layout>
    </Layout>


    
    
  </div>)

};
export default Dashboard