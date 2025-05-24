import React, { useState } from 'react';
import { Layout, Menu, Select, Button, Row, Col, Input, Typography, Card } from 'antd';

const { Header, Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const ExtractorPage = () => {
  const [VietnameseData, setVietnameseData] = useState('');
  const [ChineseData, setChineseData] = useState('');
  const [alignedData, setAlignedData] = useState('');
  const [tuning, setTuning] = useState('default');

  const handleSubmit = () => {
    // Giả lập xử lý dữ liệu
    setAlignedData(`Aligned Chinese-Vietnamese Data:\n\n${VietnameseData} \n---\n ${ChineseData}`);
  };

  const handleReset = () => {
    setVietnameseData('');
    setChineseData('');
    setAlignedData('');
    setTuning('default');
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
        <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
          <Select value={tuning} onChange={value => setTuning(value)} style={{ width: 150 }}>
            <Option value="default">Tuning</Option>
            <Option value="low">Low</Option>
            <Option value="medium">Medium</Option>
            <Option value="high">High</Option>
          </Select>
          <Button type="primary" onClick={handleSubmit}>Submit</Button>
          <Button danger onClick={handleReset}>Reset</Button>
        </div>

        <Row gutter={16}>
          <Col span={8}>
            <Typography.Text>Vietnamese Input:</Typography.Text>
            <TextArea
              rows={6}
              value={VietnameseData}
              onChange={e => setVietnameseData(e.target.value)}
              placeholder="Vietnamese_data"
            />
            <div style={{ marginTop: 16 }}>
              <Typography.Text>Chinese Input:</Typography.Text>
              <TextArea
                rows={6}
                value={ChineseData}
                onChange={e => setChineseData(e.target.value)}
                placeholder="Chinese_data"
              />
            </div>
          </Col>
          <Col span={16}>
            <Card title="Aligned Data" style={{ height: '100%' }}>
              <TextArea
                rows={14}
                value={alignedData}
                readOnly
                style={{ background: '#f0f2f5' }}
                placeholder="Aligned Chinese-Vietnamese Data"
              />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ExtractorPage;
