'use client'
import { Fragment } from 'react';
import { NotFoundPage } from 'nextra-theme-docs'
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function NotFound() {
    const { resolvedTheme } = useTheme();

    const styles = {
        background: resolvedTheme === 'dark' ? 'white' : 'black',
        color: resolvedTheme === 'dark' ? 'black' : 'white',
    };

    return (
        <Fragment>
            <NotFoundPage content='Report this issue on GitHub' labels='broken-link'>
                <p className='text-2xl font-semibold'>
                    Uh-oh!
                </p>

                <p>
                    The page you're looking for doesn't exist
                </p>

                <Link
                    className='mt-5'
                    style={{ ...styles, padding: 6, borderRadius: 4, fontWeight: 500, }}
                    href='#'
                    onClick={() => window.history.back()}
                >
                    Go back
                </Link>
            </NotFoundPage>
        </Fragment>
    )
}