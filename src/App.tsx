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
        <Content style={{backgroundColor:"#F4F4F4",height:"100vh"}}>
          <div>
              <div style={{justifyContent:"center",padding:"100px 300px"}}> <TextArea showCount maxLength={500} style={{ height: 120,width:600, resize: 'none' }} onChange={onChange}placeholder="Input allowed up to 500 characters"/>
                  <div style ={{ height: 120,width:600, resize: 'none',marginTop:"10px" }}>
                    <Button type="primary">Post</Button>
                  </div>
                  <div>
                  <Divider>Comment</Divider>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci possimus dolores dolorum cumque corporis eum repellendus culpa rerum necessitatibus corrupti sint totam eaque omnis dolor odio velit itaque nemo voluptate, beatae quibusdam iste ducimus? Expedita illum modi quibusdam, a qui ducimus, repudiandae dignissimos eveniet dicta provident adipisci debitis reiciendis molestias ex maiores ratione enim culpa veniam? Numquam accusamus ea sequi sapiente quod voluptatem incidunt, commodi minima nisi pariatur, obcaecati dolor nesciunt vel reiciendis! Laborum eos, perspiciatis totam saepe dolor, odit iure quae ipsa, beatae velit cupiditate asperiores alias pariatur quibusdam non hic accusantium maxime ea officia! Beatae praesentium iste necessitatibus.</p>
                  <Divider></Divider>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nihil, nostrum eum repellat eaque blanditiis id pariatur ullam debitis fugiat inventore repudiandae! Mollitia, ab vel necessitatibus alias sed quo quaerat.</p>
                  <Divider></Divider>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum vitae hic inventore perspiciatis. Accusantium eveniet qui asperiores? Quae culpa voluptatibus voluptas provident accusantium quo, et tenetur eum dolorem at!</p>
                  
                  </div>
              </div>
          </div>
        </Content>
        <Footer>
          <div style={{justifyContent:"center"}}>
          <Pagination defaultCurrent={6} total={500} />;
          </div>
        </Footer>
      </Layout>
      
  );
}

export default App;
