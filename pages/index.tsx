import Link from 'next/link'

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px'
    }}>
      <h1>AG Grid Testing</h1>
      <p style={{ marginTop: '20px', marginBottom: '30px' }}>
        Navigate to the pages below:
      </p>
      <Link
        href="/ag-performance"
        style={{
          padding: '12px 24px',
          backgroundColor: '#0070f3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: 500
        }}
      >
        AG Grid Performance Test
      </Link>
    </div>
  )
}
