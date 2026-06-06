'use client'

export default function HeroSection() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0f172a',
      color: 'white',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Learn, Play,{' '}
          <span style={{ color: '#6366f1' }}>
            Compete & Grow
          </span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '2rem', maxWidth: '600px' }}>
          FTG is a next-generation gamified edutainment platform where students learn through AI-powered modules, IQ-based gaming, and competitive challenges.
        </p>
        <button style={{
          padding: '12px 24px',
          backgroundColor: '#6366f1',
          color: 'white',
          border: 'none',
          borderRadius: '9999px',
          fontSize: '1rem',
          cursor: 'pointer'
        }}>
          Get Started Free →
        </button>
      </div>
    </div>
  )
}