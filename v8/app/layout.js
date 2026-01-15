'use client'
import { Inter, Cairo } from 'next/font/google'
import './globals.css'
import { PlatformModeProvider } from '../context/PlatformModeContext'
import { LanguageProvider } from '../context/LanguageContext'
import { useLanguage } from '../hooks/useLanguage'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cairo = Cairo({ subsets: ['arabic'], variable: '--font-cairo' })

export default function RootLayout({ children }) {
    return (
        <PlatformModeProvider>
            <LanguageProvider>
                <LayoutContent>{children}</LayoutContent>
            </LanguageProvider>
        </PlatformModeProvider>
    )
}

function LayoutContent({ children }) {
    const { lang } = useLanguage()
    const isAr = lang === 'ar'

    return (
        <html lang={lang} dir={isAr ? 'rtl' : 'ltr'}>
            <body className={`${inter.variable} ${cairo.variable} bg-slate-950 text-slate-200 min-h-screen antialiased`}>
                <div className="flex min-h-screen">
                    {/* Institutional Sidebar */}
                    <aside className="w-72 bg-slate-900/50 border-inline-end border-white/5 flex flex-col fixed inset-is-0 h-full">
                        <div className="p-8">
                            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-10">
                                <div className="w-3 h-3 bg-emerald-500 rounded-sm"></div>
                                <span className="text-sm font-black tracking-widest text-white uppercase">GCC EXCHANGE</span>
                            </div>

                            <nav className="space-y-1">
                                <SidebarLink href="/" icon="■" label={isAr ? "لوحة القيادة" : "Dashboard"} active />
                                <SidebarLink href="/trading" icon="□" label={isAr ? "منصة التداول" : "Spot Trading"} />
                                <SidebarLink href="/portfolios" icon="□" label={isAr ? "المحافظ" : "Portfolios"} />
                                <SidebarLink href="/esg" icon="□" label={isAr ? "تقارير الاستدامة" : "ESG Reporting"} />
                            </nav>

                            <div className="mt-12">
                                <span className="label-subtle mb-4 block">{isAr ? "الحوكمة" : "GOVERNANCE"}</span>
                                <nav className="space-y-1">
                                    <SidebarLink href="/governance" icon="•" label={isAr ? "قواعد السوق" : "Market Rules"} />
                                    <SidebarLink href="/governance/roles" icon="•" label={isAr ? "أدوار المستخدمين" : "User Roles"} />
                                </nav>
                            </div>
                        </div>

                        <div className="mt-auto p-8 border-t border-white/5">
                            <LanguageToggle />
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main className={`flex-1 ${isAr ? 'mr-72' : 'ml-72'}`}>
                        <div className="demo-banner">
                            {isAr ? "بيئة عرض تجريبية خليجية • لا يوجد تداول حقيقي" : "GCC REGULATORY SANDBOX • DEMONSTRATION ONLY • NO LIVE TRADING"}
                        </div>
                        <div className="p-12 max-w-7xl mx-auto">
                            {children}
                        </div>
                    </main>
                </div>
            </body>
        </html>
    )
}

function SidebarLink({ href, label, icon, active }) {
    return (
        <a href={href} className={`flex items-center space-x-3 rtl:space-x-reverse px-4 py-3 rounded-lg transition-all ${active ? 'bg-emerald-500/10 text-emerald-400 font-bold' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
            <span className="text-[10px] opacity-50">{icon}</span>
            <span className="text-sm">{label}</span>
        </a>
    )
}

function LanguageToggle() {
    const { lang, setLanguage } = useLanguage()
    return (
        <button
            onClick={() => setLanguage(lang === 'en' ? 'ar' : 'en')}
            className="w-full px-4 py-2 border border-white/10 rounded-md text-xs font-bold hover:bg-white/5 transition-colors uppercase tracking-widest"
        >
            {lang === 'en' ? 'Arabic (العربية)' : 'English'}
        </button>
    )
}
