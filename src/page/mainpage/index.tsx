import React, { useState, useEffect } from 'react';
import { Layout, Input, Pagination, Button, Divider, Card } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import "./index.css";
import { GetComment } from '../../services/https';
import { CommentInterface } from '../../interfaces/IComment';


const { Header, Content } = Layout;
const { TextArea } = Input;
const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log('Change:', e.target.value);
};




function Mainpage() {
  const [comments, setComment] = useState<CommentInterface[]>([]);

  const getComment = async () => {
    let res = await GetComment();
    if (res) {
      setComment(res);
    }
  };

  useEffect(() => {
    getComment();
  }, []);
  return (
    <Layout className="bg-color">

      <Content >
        <div>
          <div style={{ justifyContent: "center", padding: "100px 300px" }}>
            <TextArea
              showCount maxLength={500}
              style={{ height: 120, width: "100%", resize: 'none' }}
              onChange={onChange}
              placeholder="Input allowed up to 500 characters"
            />
            <div>
              <Button style={{
                backgroundColor: "#5C469C",
                height: 50,
                width: 150,
                justifyContent: "center",
                marginTop: "10px"
              }}
                type="primary"
                onClick={getComment}
              >Post
              </Button>
            </div>
            <div>
              <div>
                <Divider orientation="left">
                  <p>Comment</p>
                </Divider>
              </div>
              <div>
                <Card className='card-color'>
                  <h4 style={{ color: "#6844F8" }}>Username</h4>
                  <p>iatur quibusdam non hic accusantium maxime ea officia! Beatae praesentium iste necessitatibus.</p>
                </Card>
                <Divider></Divider>
              </div>
            </div>
          </div>


        </div>


      </Content>
    </Layout>

  );
}

export default Mainpage;
