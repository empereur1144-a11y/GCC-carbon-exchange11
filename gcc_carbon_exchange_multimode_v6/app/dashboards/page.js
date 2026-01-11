'use client'

import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function VisionDashboards() {
    const { t, lang } = useLanguage()
    const isAr = lang === 'ar'

    const visions = [
        {
            country: isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia',
            title: isAr ? 'رؤية ٢٠٣٠' : 'Vision 2030',
            contribution: 74,
            color: 'bg-emerald-600',
            metrics: [
                { label: isAr ? 'مبادرة السعودية الخضراء' : 'Saudi Green Initiative', value: '10B Trees' },
                { label: isAr ? 'صافي صفر انبعاثات' : 'Net Zero', value: '2060目标' }
            ]
        },
        {
            country: isAr ? 'الإمارات العربية المتحدة' : 'United Arab Emirates',
            title: isAr ? 'مبادرة الإمارات الاستراتيجية ٢٠٥٠' : 'UAE Net Zero 2050',
            contribution: 62,
            color: 'bg-red-600',
            metrics: [
                { label: isAr ? 'طاقة نظيفة' : 'Clean Energy', value: '50%' },
                { label: isAr ? 'استثمارات خضراء' : 'Green Investments', value: '$160B' }
            ]
        },
        {
            country: isAr ? 'دولة قطر' : 'State of Qatar',
            title: isAr ? 'رؤية قطر الوطنية ٢٠٣٠' : 'Qatar National Vision 2030',
            contribution: 45,
            color: 'bg-maroon-800', // Note: Tailwind doesn't have maroon-800 by default, using custom or fallback
            metrics: [
                { label: isAr ? 'كفاءة الطاقة' : 'Energy Efficiency', value: '35%' },
                { label: isAr ? 'إعادة التدوير' : 'Recycling Rate', value: '15%' }
            ]
        }
    ]

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <header className="border-b border-white/5 pb-8">
                <h1 className={`text-4xl font-black tracking-tight ${isAr ? 'font-arabic-heading' : ''}`}>{t('vision_dashboards')}</h1>
                <p className={`text-slate-500 mt-2 text-lg ${isAr ? 'font-arabic-body' : ''}`}>
                    {isAr ? 'تتبع التقدم الوطني نحو أهداف الاستدامة وصفر الانبعاثات' : 'Tracking national progress towards sustainability and net-zero targets'}
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {visions.map((vision, idx) => (
                    <div key={idx} className="glass-panel p-8 rounded-3xl flex flex-col hover:border-white/20 transition-all group">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className={`text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1 ${isAr ? 'font-arabic-heading' : ''}`}>{vision.country}</h3>
                                <h2 className={`text-2xl font-black text-white ${isAr ? 'font-arabic-heading' : ''}`}>{vision.title}</h2>
                            </div>
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-emerald-500/50 transition-colors`}>
                                <span className="text-emerald-500 text-xs font-black">GCC</span>
                            </div>
                        </div>

                        <div className="flex-1 space-y-8">
                            <div className="relative pt-1">
                                <div className="flex mb-2 items-center justify-between">
                                    <div>
                                        <span className={`text-[10px] font-black inline-block py-1 px-2 uppercase rounded-full bg-white/5 text-slate-400 ${isAr ? 'font-arabic-heading' : ''}`}>
                                            {isAr ? 'المساهمة الوطنية' : 'National Contribution'}
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-lg font-black text-white">{vision.contribution}%</span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-2.5 text-xs flex rounded-full bg-white/5">
                                    <div style={{ width: `${vision.contribution}%` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${vision.color} transition-all duration-1000 delay-300`}></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {vision.metrics.map((metric, i) => (
                                    <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <div className={`text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1 ${isAr ? 'font-arabic-heading' : ''}`}>{metric.label}</div>
                                        <div className="text-sm font-black text-white">{metric.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className={`mt-10 w-full py-4 bg-white/5 hover:bg-white/10 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white rounded-2xl border border-white/5 transition-all ${isAr ? 'font-arabic-heading' : ''}`}>
                            {isAr ? 'عرض الاستراتيجية الكاملة' : 'View Full Strategy'}
                        </button>
                    </div>
                ))}
            </div>

            {/* Quranic Verse / Institutional Wisdom Placeholder */}
            <div className="mt-20 p-12 glass-panel rounded-[3rem] border-emerald-500/10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
                <div className="max-w-2xl mx-auto space-y-8">
                    <p className="text-3xl font-arabic-heading text-emerald-500/80 leading-relaxed dir-rtl">
                        "وَهُوَ الَّذِي جَعَلَكُمْ خَلَائِفَ الْأَرْضِ"
                    </p>
                    <p className="text-slate-500 italic text-sm tracking-widest uppercase font-bold opacity-60">
                        {isAr ? 'الأمانة البيئية والسيادة' : 'ENVIRONMENTAL STEWARDSHIP & SOVEREIGNTY'}
                    </p>
                </div>
            </div>
        </div>
    )
}
