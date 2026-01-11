'use client'

import React from 'react'
import { usePlatformMode } from '../context/PlatformModeContext'
import { useLanguage } from '../context/LanguageContext'

export default function ModeSwitcher() {
    const { mode, setMode } = usePlatformMode()
    const { lang } = useLanguage()
    const isAr = lang === 'ar'

    const modes = [
        { id: 'sovereign', label: isAr ? 'سيادي' : 'SOV' },
        { id: 'institutional', label: isAr ? 'مؤسسي' : 'INST' },
        { id: 'demo', label: isAr ? 'عرض' : 'DEMO' }
    ]

    return (
        <div className="flex bg-slate-950/50 p-1 rounded-xl border border-white/5 shadow-inner mb-4">
            {modes.map((m) => (
                <button
                    key={m.id}
                    onClick={() => setMode(m.id)}
                    className={`flex-1 py-1.5 rounded-lg text-[8px] font-black transition-all ${mode === m.id
                            ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                            : 'text-slate-500 hover:text-white'
                        } ${isAr ? 'font-arabic-heading' : ''}`}
                >
                    {m.label}
                </button>
            ))}
        </div>
    )
}
