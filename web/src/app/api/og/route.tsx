import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title') || 'Systems Architect';
    const category = searchParams.get('category') || 'OPERATIONS';

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    backgroundColor: '#030712',
                    padding: '80px',
                    border: '1px solid #10B981',
                }}
            >
                {/* Category Badge */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
                    <div style={{ width: '40px', height: '2px', backgroundColor: '#10B981', marginRight: '20px' }} />
                    <span style={{ color: '#10B981', fontSize: '24px', fontWeight: 'bold', letterSpacing: '4px', fontFamily: 'sans-serif' }}>
                        {category.toUpperCase()}
                    </span>
                </div>

                {/* Title */}
                <div
                    style={{
                        fontSize: '72px',
                        color: 'white',
                        fontWeight: '900',
                        lineHeight: '1.1',
                        marginBottom: '40px',
                        maxWidth: '900px',
                        fontFamily: 'sans-serif',
                    }}
                >
                    {title}
                </div>

                {/* Author Attribution */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ color: '#9CA3AF', fontSize: '28px', fontFamily: 'sans-serif', letterSpacing: '2px' }}>
                        SHAHRIAR KABIR | SYSTEMS ARCHITECT
                    </span>
                </div>
            </div>
        ),
        { width: 1200, height: 630 }
    );
}
