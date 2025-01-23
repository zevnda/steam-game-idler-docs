import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { GeistSans } from 'geist/font/sans';
import Logo from '../src/components/Logo'
import 'nextra-theme-docs/style.css'
import './global.css'

export const metadata = {
    description: 'An automatic Steam trading card farmer and achievement unlocker, with a modern UI',
    metadataBase: new URL('https://steamgameidler.vercel.app/'),
    keywords: [
        'Steam Game Idler',
        'Steam',
        'Automation',
        'Steam Idler',
        'Steam Tools',
        'Steam Trading Cards',
        'Steam Achyiement Unlocker',
        'Steam Achievements',
    ],
    generator: 'Next.js',
    applicationName: 'Steam Game Idler',
    appleWebApp: {
        title: 'Steam Game Idler'
    },
    title: {
        default: 'Steam Game Idler – An automatic Steam trading card farmer and achievement unlocker',
        template: '%s | Steam Game Idler'
    },
    openGraph: {
        url: './',
        siteName: 'Steam Game Idler',
        locale: 'en_US',
        type: 'website'
    },
    other: {
        'msapplication-TileColor': '#fff'
    },
    twitter: {
        site: 'https://steamgameidler.vercel.app/'
    },
    alternates: {
        canonical: './'
    }
}

const navbar = (
    <Navbar
        logo={<Logo />}
        projectLink='https://github.com/zevnda/steam-game-idler'
    />
)

const footer = <Footer className='text-xs'>© {new Date().getFullYear()} zevnda.</Footer>

export default async function RootLayout({ children }) {
    return (
        <html lang="en" dir="ltr" suppressHydrationWarning>
            <Head
                color={{
                    hue: 195,
                    saturation: 100,
                    lightness: {
                        light: 50,
                        dark: 50
                    }
                }}
            />
            <body className={`${GeistSans.className} text-sm`}>
                <Layout
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/zevnda/steam-game-idler-docs"
                    editLink="Edit on GitHub"
                    footer={footer}
                >
                    {children}
                </Layout>
            </body>
        </html>
    )
}