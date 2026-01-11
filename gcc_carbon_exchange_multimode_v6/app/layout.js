'use client'

import React from 'react'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import { PlatformModeProvider, usePlatformMode } from './context/PlatformModeContext'
import SandboxBanner from './components/SandboxBanner'
import ModeSwitcher from './components/ModeSwitcher'
import { copyByMode } from './config/platformCopy'
import './globals.css'

function LayoutContent({ children }) {
    const { lang, toggleLanguage, t } = useLanguage()
    const { mode } = usePlatformMode()
    const config = copyByMode[mode] || copyByMode.sovereign

    return (
        <body className={`bg-slate-950 text-slate-200 selection:bg-emerald-500/30 overflow-x-hidden ${lang === 'ar' ? 'font-arabic-body' : ''}`}>
            {/* UN-04: Regulatory Sandbox Shield */}
            <SandboxBanner />

            {/* UN-MODE-03: Demo Watermark */}
            {mode === 'demo' && (
                <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] flex items-center justify-center rotate-45 select-none">
                    <span className="text-[20vw] font-black">DEMO</span>
                </div>
            )}

            <div className={`relative z-10 flex min-h-screen`}>
                {/* UN-05: Institutional Sidebar */}
                <aside className={`w-72 bg-slate-900/50 backdrop-blur-xl border-slate-800 p-8 flex flex-col fixed h-full z-40 inset-is-0 border-ie overflow-y-auto`}>
                    <div className="mb-8">
                        <div className="text-2xl font-black tracking-tighter text-white flex items-center space-x-2 rtl:space-x-reverse">
                            <span className="text-emerald-500">GCC</span>
                            <span className="opacity-90">CARBON</span>
                        </div>
                        <div className="text-[10px] text-slate-500 mt-2 uppercase font-black tracking-[0.2em] opacity-40">
                            {lang === 'ar' ? t(config.label) : config.label}
                        </div>
                    </div>

                    {/* UN-MODE-04: Platform Mode Switcher */}
                    <div className="mb-8">
                        <div className="text-[8px] text-slate-500 uppercase font-black tracking-widest mb-2 opacity-30">
                            {lang === 'ar' ? 'وضع المنصة' : 'PLATFORM MODE'}
                        </div>
                        <ModeSwitcher />
                    </div>

                    <nav className="flex-1 space-y-1">
                        {[
                            { key: 'dashboard', href: '/' },
                            { key: 'trading', href: '/trading' },
                            { key: 'vision_dashboards', href: '/dashboards' },
                            { key: 'impact_hub', href: '/impact' },
                            { key: 'investor_hub', href: '/investor' },
                            { key: 'portfolios', href: '/portfolios' },
                            { key: 'esg', href: '/esg' },
                            { key: 'retirement', href: '/retirement' },
                            { key: 'governance', href: '/governance' },
                            { key: 'user_roles', href: '/governance/roles' },
                            { key: 'api_docs', href: '/api-docs' },
                            { key: 'corporate_portal', href: '/corporate' },
                            { key: 'ministry_portal', href: '/ministry' },
                        ].map((item) => (
                            <a
                                key={item.key}
                                href={item.href}
                                className={`flex items-center text-slate-400 hover:text-white hover:bg-white/5 p-3.5 rounded-xl transition-all group font-bold uppercase text-[10px] tracking-widest ${lang === 'ar' ? 'font-arabic-heading' : ''}`}
                            >
                                <span className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform inline-block">
                                    {t(item.key)}
                                </span>
                            </a>
                        ))}
                    </nav>

                    <div className="mt-auto pt-8 border-t border-slate-800/50">
                        {/* Language switcher */}
                        <div className="flex bg-slate-950/50 p-1 rounded-xl mb-6 border border-white/5 shadow-inner">
                            <button
                                onClick={() => toggleLanguage('en')}
                                className={`flex-1 py-1.5 rounded-lg text-[9px] font-black transition-all ${lang === 'en' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => toggleLanguage('ar')}
                                className={`flex-1 py-1.5 rounded-lg text-[10px] font-arabic-heading transition-all ${lang === 'ar' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-white'}`}
                            >
                                عربي
                            </button>
                        </div>

                        <div className="p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 group cursor-default shadow-2xl">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                                <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                                <span className="text-[8px] text-emerald-500 font-black uppercase tracking-widest">{t('sovereign_status')}</span>
                            </div>
                            <div className="text-[10px] text-slate-400 font-bold leading-tight">{t('verified_institution')}</div>
                            <div className="flex mt-3 space-x-1 rtl:space-x-reverse">
                                <span className="text-[6px] px-1 py-0.5 bg-slate-800 text-slate-500 rounded uppercase font-black tracking-tighter">ADGM</span>
                                <span className="text-[6px] px-1 py-0.5 bg-slate-800 text-slate-500 rounded uppercase font-black tracking-tighter">CMA</span>
                                <span className="text-[6px] px-1 py-0.5 bg-slate-800 text-slate-500 rounded uppercase font-black tracking-tighter">VARA</span>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className={`flex-1 ps-72`}>
                    <div className="p-12 max-w-7xl mx-auto min-h-screen">
                        {children}
                    </div>
                </main>
            </div>
        </body>
    )
}

export default function RootLayout({ children }) {
    return (
        <LanguageProvider>
            <PlatformModeProvider>
                <LayoutContent>{children}</LayoutContent>
            </PlatformModeProvider>
        </LanguageProvider>
    )
}
