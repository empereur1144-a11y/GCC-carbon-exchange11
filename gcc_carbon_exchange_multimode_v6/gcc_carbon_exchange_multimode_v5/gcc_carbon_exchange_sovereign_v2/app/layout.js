'use client'

import { LanguageProvider, useLanguage } from './context/LanguageContext'
import './globals.css'

function LayoutContent({ children }) {
    const { lang, toggleLanguage, t } = useLanguage()

    return (
        <body className={`bg-slate-950 text-slate-200 selection:bg-emerald-500/30 overflow-x-hidden ${lang === 'ar' ? 'font-arabic-body' : ''}`}>
            {/* Global Sovereign Banner */}
            <div className="bg-emerald-600/90 backdrop-blur-md text-white py-1.5 px-4 text-[10px] font-black tracking-[0.3em] uppercase text-center fixed top-0 w-full z-50 border-b border-white/10 shadow-2xl flex items-center justify-center space-x-4">
                <span className="opacity-50 inline-block w-8 h-px bg-white"></span>
                <span className="font-arabic-heading">{t('sovereign_banner')}</span>
                <span className="opacity-50 inline-block w-8 h-px bg-white"></span>
            </div>

            <div className={`flex min-h-screen pt-8`}>
                {/* Sidebar Navigation */}
                <aside className={`w-72 bg-slate-900/50 backdrop-blur-xl border-slate-800 p-8 flex flex-col fixed h-full z-40 inset-is-0 border-ie`}>
                    <div className="mb-12">
                        <div className="text-2xl font-black tracking-tighter text-white flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="text-emerald-500">GCC</span>
                            <span>CARBON</span>
                        </div>
                        <div className="text-[10px] text-slate-500 mt-1 uppercase font-black tracking-widest opacity-60">Sovereign Pilot Prototype</div>
                    </div>

                    <nav className="flex-1 space-y-2">
                        {[
                            { key: 'dashboard', href: '/' },
                            { key: 'investor_hub', href: '/investor' },
                            { key: 'trading', href: '/trading' },
                            { key: 'portfolios', href: '/portfolios' },
                            { key: 'esg', href: '/esg' },
                            { key: 'retirement', href: '/retirement' },
                        ].map((item) => (
                            <a
                                key={item.key}
                                href={item.href}
                                className={`flex items-center text-slate-400 hover:text-white hover:bg-white/5 p-4 rounded-xl transition-all group font-medium uppercase text-[11px] tracking-widest`}
                            >
                                <span>{t(item.key)}</span>
                            </a>
                        ))}
                    </nav>

                    <div className="mt-auto pt-8 border-t border-slate-800/50">
                        {/* Language switcher */}
                        <div className="flex bg-slate-950/50 p-1 rounded-xl mb-6 border border-white/5">
                            <button
                                onClick={() => toggleLanguage('en')}
                                className={`flex-1 py-2 rounded-lg text-[10px] font-black transition-all ${lang === 'en' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
                            >
                                English
                            </button>
                            <button
                                onClick={() => toggleLanguage('ar')}
                                className={`flex-1 py-2 rounded-lg text-[10px] font-arabic-heading transition-all ${lang === 'ar' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
                            >
                                العربية
                            </button>
                        </div>

                        <div className="p-5 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 group cursor-default">
                            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-2">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                                <span className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">{t('sovereign_status')}</span>
                            </div>
                            <div className="text-xs text-slate-400 font-bold leading-relaxed">{t('verified_institution')}</div>
                            <div className="flex mt-3 space-x-2 rtl:space-x-reverse">
                                <span className="text-[8px] px-2 py-0.5 bg-slate-800 text-slate-500 rounded uppercase font-black">ADGM</span>
                                <span className="text-[8px] px-2 py-0.5 bg-slate-800 text-slate-500 rounded uppercase font-black">CMA</span>
                                <span className="text-[8px] px-2 py-0.5 bg-slate-800 text-slate-500 rounded uppercase font-black">VARA</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className={`flex-1 ps-72`}>
                    <div className="p-12 max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </body>
    )
}

export default function RootLayout({ children }) {
    const { lang, dir } = useLanguage() || { lang: 'en', dir: 'ltr' }

    return (
        <html lang={lang} dir={dir}>
            <LanguageProvider>
                <LayoutContent>{children}</LayoutContent>
            </LanguageProvider>
        </html>
    )
}
