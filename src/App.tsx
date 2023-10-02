import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout,Input,Pagination,Button,Divider  } from 'antd';
import Mainpage from './page/mainpage/index';



const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;
const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};

function App() {
  return (
      <Layout>
        <Content style={{backgroundColor:"#F4F4F4",height:"100vh"}}>
          <Mainpage />
        </Content>
        <Footer>
          
        </Footer>
      </Layout>
      
  );
}

export default App;
