import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu, Typography, Row, Col, Card } from 'antd';


import CrawlerPage from './components/Crawler';
import ExtractorPage from './components/Extractor';
import AllInOnePage from './components/AllInOne';

const { Header, Content, Footer } = Layout;
const { Title, Text, Link } = Typography;

const AppLayout = () => {
const navigate = useNavigate();
const location = useLocation();

const selectedKey = location.pathname === '/' ? 'home' : location.pathname.slice(1);

return (
  <Layout>
    <Header style={{ background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ fontSize: 18, fontWeight: 600, color: '#000', display: 'flex', alignItems: 'center' }}>
        {/* <img src="./assets/logo.svg" alt="logo" style={{ height: 30, marginRight: 10 }} /> */}
        
        Crawling & Extracting Chinese-Vietnamese Parallel Data
      </div>

      <Menu
        mode="horizontal"
        selectedKeys={[selectedKey]}
        onClick={({ key }) => navigate(key === 'home' ? '/' : `/${key}`)}
        style={{ borderBottom: 'none' }}
      >
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="crawler">Crawler</Menu.Item>
        <Menu.Item key="extractor">Extractor</Menu.Item>
        <Menu.Item key="allinone">All-In-one</Menu.Item>
      </Menu>
    </Header>

    <Content style={{ padding: '24px 60px' }}>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Title style={{ textAlign: 'center', marginBottom: 40 }}>
              Crawl & Extract Parallel Data
            </Title>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              Bilingual translation website Chinese - Vietnamese <br />
              (Information technology project by Pham Quynh Nhu & Phan Hoang Tuan)
            </div>

            {/* 3 cột giới thiệu */}
            <Row gutter={24} justify="center">
              <Col span={8}>
                <Card
                  style={{ backgroundColor: '#f5f5f5' }}
                  bodyStyle={{ minHeight: 180 }}
                  bordered={false}
                  hoverable
                  title="Crawler"
                >
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Text>
                  <br />
                  <Link style={{ color: '#1890ff' }} href="#">
                    View →
                  </Link>
                </Card>
              </Col>

              <Col span={8}>
                <Card
                  style={{ backgroundColor: '#f5f5f5' }}
                  bodyStyle={{ minHeight: 180 }}
                  bordered={false}
                  hoverable
                  title="Extractor"
                >
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                  </Text>
                  <br />
                  <Link style={{ color: '#1890ff' }} href="#">
                    View →
                  </Link>
                </Card>
              </Col>

              <Col span={8}>
                <Card
                  style={{ backgroundColor: '#f5f5f5' }}
                  bodyStyle={{ minHeight: 180 }}
                  bordered={false}
                  hoverable
                  title="All-In-One"
                >
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.                  </Text>
                  <br />
                  <Link style={{ color: '#1890ff' }} href="#">
                    View →
                  </Link>
                </Card>
              </Col>
            </Row>
          </>
        }
      />
      
      <Route path="/crawler" element={<CrawlerPage />} />
      <Route path="/extractor" element={<ExtractorPage />} />
      <Route path="/allinone" element={<AllInOnePage />} />
    </Routes>
    </Content>
    
      
  </Layout>
);
};

const App = () => <AppLayout />;

export default App;
