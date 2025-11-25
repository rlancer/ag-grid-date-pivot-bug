import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navigation() {
  const router = useRouter()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/ag-performance', label: 'AG Grid' },
    { href: '/devextreme-grid', label: 'DevExtreme' },
  ]

  return (
    <nav style={{
      backgroundColor: '#1a1a1a',
      padding: '12px 24px',
      borderBottom: '2px solid #333',
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
      {navItems.map((item) => {
        const isActive = router.pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              color: isActive ? '#0070f3' : '#fff',
              textDecoration: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              backgroundColor: isActive ? '#222' : 'transparent',
              fontWeight: isActive ? 600 : 400,
              transition: 'all 0.2s ease',
              fontSize: '14px'
            }}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
