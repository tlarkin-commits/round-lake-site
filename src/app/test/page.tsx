export default function TestPage() {
  return (
    <div style={{ 
      padding: '20px', 
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ color: '#2563eb' }}>Rancho Corrido Park - Test Page</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        This is a simple test page to verify the website layout is working correctly.
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '30px'
      }}>
        <div style={{
          padding: '20px',
          backgroundColor: '#f3f4f6',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{ margin: '0 0 10px 0' }}>Navigation Test</h2>
          <p>Click the buttons below to test navigation:</p>
          <button style={{
            padding: '10px 20px',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            margin: '5px'
          }}>
            Test Button 1
          </button>
          <button style={{
            padding: '10px 20px',
            backgroundColor: '#16a34a',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            margin: '5px'
          }}>
            Test Button 2
          </button>
        </div>
        
        <div style={{
          padding: '20px',
          backgroundColor: '#f3f4f6',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }}>
          <h2 style={{ margin: '0 0 10px 0' }}>Responsive Test</h2>
          <p>This layout should adapt to different screen sizes.</p>
          <ul style={{ margin: '10px 0', paddingLeft: '20px' }}>
            <li>Mobile: Single column</li>
            <li>Tablet: Two columns</li>
            <li>Desktop: Two columns</li>
          </ul>
        </div>
      </div>
      
      <div style={{ 
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#fef3c7',
        borderRadius: '8px',
        border: '1px solid #f59e0b'
      }}>
        <h2 style={{ margin: '0 0 10px 0', color: '#92400e' }}>Layout Status</h2>
        <p style={{ margin: 0, color: '#92400e' }}>
          If you can read this clearly and the buttons above are clickable, 
          the basic layout is working correctly.
        </p>
      </div>
      
      <footer style={{ 
        marginTop: '40px',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #e5e7eb'
      }}>
        <p>
          <a href="/" style={{ 
            color: '#2563eb', 
            textDecoration: 'none',
            padding: '10px 20px',
            backgroundColor: '#eff6ff',
            borderRadius: '4px',
            border: '1px solid #bfdbfe'
          }}>
            ← Back to Main Site
          </a>
        </p>
      </footer>
    </div>
  );
}