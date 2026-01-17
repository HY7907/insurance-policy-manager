const HomePage = () => {
  return (
    <div style={{ 
      minHeight: '100vh',
      padding: '24px 24px'
    }}>
      {/* 顶部欢迎区域 - 完全参考zhichu1 */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '16px',
          marginBottom: '32px'
        }}>
          <h1 style={{
            fontSize: '30px',
            fontWeight: 700,
            color: '#1f2937',
            margin: 0
          }}>
            家庭保单管家
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            margin: 0,
            fontWeight: 400
          }}>
            全方位保单管理，助力美好未来
          </p>
        </div>

        {/* 预留内容区域 */}
        <div style={{
          color: '#9ca3af',
          fontSize: '14px'
        }}>
          {/* 后续内容待开发 */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

