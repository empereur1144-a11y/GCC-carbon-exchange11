'use client'

import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { usePlatformMode } from '../context/PlatformModeContext'

export default function SandboxBanner() {
    const { t, lang } = useLanguage()
    const [isVisible, setIsVisible] = useState(true)

    const { mode } = usePlatformMode()

    // UN-02: Presentation toggle to hide/show sandbox for high-fidelity demos
    if (!isVisible) return (
        <button
            onClick={() => setIsVisible(true)}
            className="fixed bottom-4 right-4 z-50 p-2 bg-amber-500/20 hover:bg-amber-500/40 rounded-full backdrop-blur-md transition-all opacity-20 hover:opacity-100"
            title="Show Sandbox Status"
        >
            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse block"></span>
        </button>
    )

    const bannerTitle = mode === 'demo' ? t('demo_banner_title') || 'Demonstration Environment – Non-Production' : t('sandbox_title')

    return (
        <div className="bg-amber-500/10 border-b border-amber-500/20 py-2.5 px-6 text-center text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] flex items-center justify-center space-x-6 rtl:space-x-reverse sticky top-0 z-50 backdrop-blur-md">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                <span className={lang === 'ar' ? 'font-arabic-heading' : ''}>{bannerTitle}</span>
            </div>

            <span className="opacity-20 inline-block w-12 h-px bg-amber-500"></span>

            <div className={`flex items-center space-x-3 rtl:space-x-reverse ${lang === 'ar' ? 'font-arabic-body font-bold' : ''}`}>
                <span>{t('sandbox_subtitle')}</span>
            </div>

            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-4 rtl:left-4 opacity-30 hover:opacity-100 text-[8px] border border-amber-500/30 px-2 py-0.5 rounded uppercase"
            >
                {lang === 'ar' ? 'إخفاء' : 'HIDE'}
            </button>
        </div>
    )
}
