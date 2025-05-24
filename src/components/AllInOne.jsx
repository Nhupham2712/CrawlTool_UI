import React, { useState } from 'react';
import { Layout, Menu, Select, Button, Input, Typography, Row, Col, Card } from 'antd';

const { Header, Content } = Layout;
const { TextArea } = Input;
const { Option } = Select;

const AllInOnePage = () => {
  const [link, setLink] = useState('');
  const [tuning, setTuning] = useState('default');
  const [VietnameseData, setVietnameseData] = useState('');
  const [ChineseData, setChineseData] = useState('');
  const [alignedData, setAlignedData] = useState('');

  const handleSubmit = () => {
    // Giả lập quá trình crawl + extract
    setVietnameseData('Vietnamese Data from Link');
    setChineseData('Chinese Data from Link');
    setAlignedData('Aligned Chinese-Vietnamese Data');
  };

  const handleReset = () => {
    setLink('');
    setVietnameseData('');
    setChineseData('');
    setAlignedData('');
    setTuning('default');
  };

  return (
    <Layout>
      {/* Content */}
      <Content style={{ padding: '24px 60px' }}>
        <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
          <Select value={tuning} onChange={value => setTuning(value)} style={{ width: 150 }}>
            <Option value="default">Tuning</Option>
            <Option value="low">Low</Option>
            <Option value="medium">Medium</Option>
            <Option value="high">High</Option>
          </Select>
          <Input
            placeholder="Link"
            value={link}
            onChange={e => setLink(e.target.value)}
            style={{ width: 300 }}
          />
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
              placeholder="Vietnamese Data"
            />
            <div style={{ marginTop: 16 }}>
              <Typography.Text>Chinese Input:</Typography.Text>
              <TextArea
                rows={6}
                value={ChineseData}
                onChange={e => setChineseData(e.target.value)}
                placeholder="Chinese Data"
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

export default AllInOnePage;
