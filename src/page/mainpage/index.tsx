import React from 'react';
import logo from './logo.svg';
import { Layout,Input,Pagination,Button,Divider  } from 'antd';

const { Header, Footer, Content } = Layout;
const { TextArea } = Input;
const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};


function Mainpage() {
  return (
      <Layout>
        
        <Content style={{backgroundColor:"#F4F4F4",height:"100vh"}}>
          <div>
              <div style={{justifyContent:"center",padding:"100px 300px"}}> 
                <TextArea showCount maxLength={500} style={{ height: 120,width: "100%" , resize: 'none'}} onChange={onChange}placeholder="Input allowed up to 500 characters"/>
                  <div>
                    <Button style={{backgroundColor:"#5C469C", height: 50,width: 150,justifyContent:"center",marginTop:"10px" }}type="primary">Post</Button>
                  </div>
                  <div>
                  <Divider orientation="left">Comment</Divider>
                    <h4 style={{color:"#6844F8"}}>Username</h4>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci possimus dolores dolorum cumque corporis eum repellendus culpa rerum necessitatibus corrupti sint totam eaque omnis dolor odio velit itaque nemo voluptate, beatae quibusdam iste ducimus? Expedita illum modi quibusdam, a qui ducimus, repudiandae dignissimos eveniet dicta provident adipisci debitis reiciendis molestias ex maiores ratione enim culpa veniam? Numquam accusamus ea sequi sapiente quod voluptatem incidunt, commodi minima nisi pariatur, obcaecati dolor nesciunt vel reiciendis! Laborum eos, perspiciatis totam saepe dolor, odit iure quae ipsa, beatae velit cupiditate asperiores alias pariatur quibusdam non hic accusantium maxime ea officia! Beatae praesentium iste necessitatibus.</p>
                  <Divider></Divider>
                    <h4 style={{color:"#6844F8"}}>Username</h4>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, nihil, nostrum eum repellat eaque blanditiis id pariatur ullam debitis fugiat inventore repudiandae! Mollitia, ab vel necessitatibus alias sed quo quaerat.</p>
                  <Divider></Divider>
                    <h4 style={{color:"#6844F8"}}>Username</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eum vitae hic inventore perspiciatis. Accusantium eveniet qui asperiores? Quae culpa voluptatibus voluptas provident accusantium quo, et tenetur eum dolorem at!</p>
                  <Divider></Divider>
                    <h4 style={{color:"#6844F8"}}>Username</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quo rerum ratione eaque commodi dolore temporibus labore. Placeat animi aliquam commodi omnis, quis ratione! Cum ea quod odio voluptates quis?</p>
                  <Divider><Button type="link">SEE MORE</Button></Divider>
                  </div>
              </div>
             
          </div>
          
         
        </Content>
        <Footer style={{backgroundColor:"#F4F4F4",height:"10vh"}}>
        <div>
            <div></div>
        </div>
            
        </Footer>
      </Layout>
      
  );
}

export default Mainpage;
