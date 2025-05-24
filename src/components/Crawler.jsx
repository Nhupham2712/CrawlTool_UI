import React, { useState } from 'react';
import { Layout, Menu, Input, Select, Button, Row, Col, Typography, Card } from 'antd';

const { Header, Content } = Layout;
const { Option } = Select;

const CrawlerPage = () => {
  const [link, setLink] = useState('');
  const [option, setOption] = useState('none');
  const [VietnameseContent, setVietnameseContent] = useState('');
  const [ChineseContent, setChineseContent] = useState('');

  const handleCrawl = () => {
    // Giả lập dữ liệu crawl
    if (!link) {
      alert('Please enter a link!');
      return;
    }
    setVietnameseContent(`Vietnamese content crawled from ${link} with option ${option}`);
    setChineseContent(`Chinese content crawled from ${link} with option ${option}`);
  };

  return (
    <Layout>
      {/* Header */}
      {/* <Header style={{ background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 18, fontWeight: 600 }}>
          <img src="/logo.svg" alt="logo" style={{ height: 30, marginRight: 10 }} />
          Crawling & Extracting Chinese-Vietnamese Parallel Data
        </div>
        <Menu mode="horizontal" selectable={false} style={{ borderBottom: 'none' }}>
          <Menu.Item key="crawler">Crawler</Menu.Item>
          <Menu.Item key="extractor">Extractor</Menu.Item>
          <Menu.Item key="allinone">All-In-one</Menu.Item>
        </Menu>
      </Header> */}

      {/* Content */}
      <Content style={{ padding: '24px 60px' }}>
        {/* Input bar */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: 20 }}>
          <Input
            placeholder="Link"
            style={{ width: 300 }}
            value={link}
            onChange={e => setLink(e.target.value)}
          />
          <Select
            value={option}
            style={{ width: 150 }}
            onChange={value => setOption(value)}
          >
            <Option value="none">none</Option>
            <Option value="option1">option 1</Option>
            <Option value="option2">option 2</Option>
          </Select>
          <Button type="primary" onClick={handleCrawl}>Crawl</Button>
        </div>

        {/* Results */}
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Vietnamese" style={{ height: '70vh', overflow: 'auto' }}>
              <pre>{VietnameseContent}</pre>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Chinese" style={{ height: '70vh', overflow: 'auto' }}>
              <pre>{ChineseContent}</pre>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default CrawlerPage;
