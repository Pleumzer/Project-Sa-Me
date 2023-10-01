import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout,Input,Pagination,Button,Divider  } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { TextArea } = Input;
const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};

function App() {
  return (
      <Layout>
        <Content style={{backgroundColor:"#ffedc2",height:"100vh"}}>
          <div>
              <div style={{justifyContent:"center",padding:"100px 150px"}}> <TextArea showCount maxLength={500} style={{ height: 120,width:600, resize: 'none' }} onChange={onChange}placeholder="Input allowed up to 500 characters"/>
                  <div style ={{ height: 120,width:600, resize: 'none',marginTop:"10px" }}>
                    <Button type="primary">Post</Button>
                  </div>
                  <div>
                  <Divider>Comment</Divider>
                  </div>
              </div>
          </div>
        </Content>
        {/* <Footer>
          <div style={{justifyContent:"center"}}>
          <Pagination defaultCurrent={6} total={500} />;
          </div>
        </Footer> */}
      </Layout>
      
  );
}

export default App;
