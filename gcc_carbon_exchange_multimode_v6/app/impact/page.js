'use client'

import React, { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function ImpactDashboard() {
    const { t, lang } = useLanguage()
    const isAr = lang === 'ar'

    const metrics = [
        { key: 'co2_offset', label: isAr ? 'إزاحة CO₂ في الخليج (طن)' : 'GCC CO₂ Offset (tons)', value: 12450000, suffix: 't' },
        { key: 'funded_projects', label: isAr ? 'مشاريع خليجية ممولة' : 'GCC Projects Funded', value: 24, suffix: '' },
        { key: 'jobs_created', label: isAr ? 'وظائف خليجية مستحدثة' : 'GCC Jobs Created', value: 32500, suffix: '+' },
        { key: 'vision_align', label: isAr ? 'المساهمة في رؤية ٢٠٣٠' : 'Vision 2030 Contribution', value: 74, suffix: '%' }
    ]

    return (
        <div className="space-y-12 animate-in fade-in duration-1000">
            <header className="border-b border-white/5 pb-8">
                <h1 className={`text-4xl font-black tracking-tight ${isAr ? 'font-arabic-heading' : ''}`}>
                    {isAr ? 'لوحة تأثير السيادة الرقمية' : 'Sovereign Digital Impact Hub'}
                </h1>
                <p className={`text-slate-500 mt-2 text-lg ${isAr ? 'font-arabic-body' : ''}`}>
                    {isAr ? 'مقاييس فورية للمساهمة الوطنية والشفافية التنظيمية' : 'Real-time metrics for national contribution and regulatory transparency'}
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((m, i) => (
                    <div key={i} className="glass-panel p-8 rounded-3xl border-emerald-500/10 hover:border-emerald-500/30 transition-all group">
                        <div className={`text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 opacity-50 ${isAr ? 'font-arabic-heading' : ''}`}>{m.label}</div>
                        <div className="flex items-end space-x-2 rtl:space-x-reverse">
                            <span className="text-4xl font-black text-white tracking-tighter">
                                {m.value.toLocaleString()}
                            </span>
                            <span className="text-emerald-500 font-bold mb-1">{m.suffix}</span>
                        </div>
                        <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500/50 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 glass-panel p-10 rounded-[2.5rem] border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-20">
                        {/* Institutional Pattern Placeholder */}
                        <div className="w-32 h-32 border-4 border-emerald-500 rounded-full blur-3xl"></div>
                    </div>

                    <h2 className={`text-2xl font-black mb-10 ${isAr ? 'font-arabic-heading' : ''}`}>
                        {isAr ? 'الشفافية وسلسلة الكتل (محاكاة)' : 'Blockchain Transparency (Simulated)'}
                    </h2>

                    <div className="space-y-4 font-mono">
                        {[
                            { tx: '0x7e2...F8a1', action: isAr ? 'سك أرصدة نيوم' : 'MINT: NEOM Credits', status: 'VERIFIED' },
                            { tx: '0x3c1...A9d0', action: isAr ? 'تسوية تداول أدنك' : 'SETTLE: ADNOC Trade', status: 'SHARIAH_OK' },
                            { tx: '0xb45...E2c3', action: isAr ? 'تقاعد أرصدة مصدر' : 'RETIRE: Masdar Credits', status: 'ON_CHAIN' }
                        ].map((tx, i) => (
                            <div key={i} className="flex items-center justify-between p-5 bg-black/40 rounded-2xl border border-white/5 group hover:border-emerald-500/20 transition-all">
                                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                                    <div className="text-[10px] bg-white/5 border border-white/10 px-3 py-1.5 rounded text-emerald-500 font-black">HASH</div>
                                    <div>
                                        <div className="text-white text-sm font-black">{tx.tx}</div>
                                        <div className={`text-[10px] text-slate-500 mt-1 ${isAr ? 'font-arabic-body font-bold' : ''}`}>{tx.action}</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className={`text-[9px] font-black px-3 py-1 rounded-lg ${tx.status === 'SHARIAH_OK' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-white/5 text-slate-400'} border border-white/5`}>
                                        {tx.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center space-y-6">
                    <div className="w-24 h-24 bg-emerald-500/5 rounded-full flex items-center justify-center border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
                        <span className="text-emerald-500 text-3xl font-black">١٠٠٪</span>
                    </div>
                    <div>
                        <h3 className={`text-xl font-black text-white ${isAr ? 'font-arabic-heading' : ''}`}>
                            {isAr ? 'إطار التوافق الشرعي' : 'Shariah Compliance Frame'}
                        </h3>
                        <p className={`text-slate-500 mt-4 text-xs leading-relaxed ${isAr ? 'font-arabic-body' : ''}`}>
                            {isAr ? 'تم تصميم جميع المعاملات وعقود الأصول الكربونية لتتوافق مع مبادئ التمويل الإسلامي، بمراجعة هيئة شرعية مستقلة.' : 'All transactions and carbon asset contracts are designed for compliance with Islamic Finance principles, under independent Shariah board oversight.'}
                        </p>
                    </div>
                    <div className="pt-6 w-full space-y-3">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                            <span>{isAr ? 'الحالة' : 'STATUS'}</span>
                            <span className="text-emerald-500">{isAr ? 'معتمد' : 'CERTIFIED'}</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-emerald-500 w-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
