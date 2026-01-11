'use client'

import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function MinistryPortal() {
    const { t, lang } = useLanguage()
    const isAr = lang === 'ar'

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-top-4 duration-1000">
            <header className="flex justify-between items-center border-b border-white/20 pb-8 relative">
                <div className="absolute -top-4 left-0 w-32 h-1 bg-emerald-500/50"></div>
                <div>
                    <h1 className={`text-4xl font-black tracking-tight ${isAr ? 'font-arabic-heading' : ''}`}>
                        {isAr ? 'لوحة المراقبة السيادية والسياسات' : 'Sovereign Oversight & Policy Portal'}
                    </h1>
                    <p className={`text-slate-500 mt-2 text-lg ${isAr ? 'font-arabic-body' : ''}`}>
                        {isAr ? 'واجهة خاصة بالوزارات والجهات الرقابية لمتابعة الامتثال الوطني للمناخ' : 'Ministry-grade dashboard for national climate compliance and regulatory monitoring'}
                    </p>
                </div>
                <div className="text-right">
                    <div className="text-[10px] text-emerald-500 font-black uppercase tracking-[0.3em] mb-2">{isAr ? 'وصول مقيد' : 'RESTRICTED ACCESS'}</div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl">
                        <span className="text-white font-black text-xs uppercase">{isAr ? 'وزارة الطاقة' : 'Ministry of Energy'}</span>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="glass-panel p-8 rounded-[2.5rem] space-y-4">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{isAr ? 'إجمالي المحفظة الوطنية' : 'National Portfolio'}</div>
                    <div className="text-3xl font-black text-white">١٨٤.٥M</div>
                    <div className="text-[10px] text-emerald-500 font-bold uppercase">{isAr ? 'إزاحة CO₂ (طن متاح)' : 'CO2 Offset (tons available)'}</div>
                </div>
                <div className="glass-panel p-8 rounded-[2.5rem] space-y-4">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{isAr ? 'معدل الامتثال المؤسسي' : 'Institution Compliance'}</div>
                    <div className="text-3xl font-black text-white">٩٢٪</div>
                    <div className="text-[10px] text-blue-500 font-bold uppercase">{isAr ? 'أرامكو / أدنك / مصدر' : 'Aramco / ADNOC / Masdar'}</div>
                </div>
                <div className="glass-panel p-8 rounded-[2.5rem] space-y-4">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{isAr ? 'السيولة في السجل' : 'Registry Liquidity'}</div>
                    <div className="text-3xl font-black text-white">$١.٢B</div>
                    <div className="text-[10px] text-indigo-500 font-bold uppercase">{isAr ? 'إجمالي الأصول' : 'Total Asset Value'}</div>
                </div>
                <div className="glass-panel p-8 rounded-[2.5rem] space-y-4 border-emerald-500/20">
                    <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{isAr ? 'حالة التوافق الشرعي' : 'Shariah Status'}</div>
                    <div className="text-3xl font-black text-white">{isAr ? 'معتمد' : 'CERTIFIED'}</div>
                    <div className={`text-[10px] text-slate-500 font-bold uppercase ${isAr ? 'font-arabic-body' : ''}`}>{isAr ? 'هيئة الرقابة الشرعية' : 'Shariah Advisory Board'}</div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="glass-panel p-10 rounded-[3rem] space-y-8">
                    <h2 className={`text-2xl font-black ${isAr ? 'font-arabic-heading' : ''}`}>
                        {isAr ? 'الموافقة على المشاريع السيادية' : 'Sovereign Project Approval'}
                    </h2>
                    <div className="space-y-4">
                        {[
                            { name: isAr ? 'السعودية: مترو الرياض المرحلة ٤' : 'KSA: Riyadh Metro Phase 4', impact: '1.2M t/yr', status: 'PENDING' },
                            { name: isAr ? 'الإمارات: توسعة مجمع محمد بن راشد' : 'UAE: MBR Solar Expansion', impact: '850k t/yr', status: 'APPROVED' },
                            { name: isAr ? 'قطر: حقل غاز الشمال' : 'Qatar: North Field Expansion', impact: '2.1M t/yr', status: 'AUDIT' }
                        ].map((proj, i) => (
                            <div key={i} className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5">
                                <div className="text-inline-start">
                                    <div className="text-sm font-black text-white">{proj.name}</div>
                                    <div className="text-[10px] text-slate-500 font-bold mt-1 uppercase">EST. IMPACT: {proj.impact}</div>
                                </div>
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <span className={`text-[8px] font-black px-3 py-1 rounded bg-white/5 border border-white/10 ${proj.status === 'APPROVED' ? 'text-emerald-500 border-emerald-500/20' : 'text-amber-500 border-amber-500/20'}`}>{proj.status}</span>
                                    <button className="text-[10px] font-black text-slate-400 hover:text-white uppercase tracking-widest transition-colors">{isAr ? 'مراجعة' : 'REVIEW'}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-panel p-10 rounded-[3rem] space-y-8 border-emerald-500/10 bg-emerald-500/5">
                    <h2 className={`text-2xl font-black ${isAr ? 'font-arabic-heading' : ''}`}>
                        {isAr ? 'مواءمة السياسات (متحف المستقبل)' : 'Policy Alignment (Future State)'}
                    </h2>
                    <div className="space-y-6">
                        <div className="p-6 bg-slate-900/80 rounded-2xl border border-white/5 space-y-4">
                            <div className="flex justify-between items-center text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">
                                <span>{isAr ? 'سعر الكربون المستهدف' : 'TARGET CARBON PRICE'}</span>
                                <span className="text-white">$٤٥.٠٠</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 w-3/4"></div>
                            </div>
                        </div>
                        <p className={`text-sm text-slate-300 leading-relaxed ${isAr ? 'font-arabic-body' : ''}`}>
                            {isAr ? 'ملاحظة السياسة: تم ضبط خوارزمية السجل لمواءمة تسوية الائتمان مع أحدث بروتوكولات الربط البيني الخليجي لضمان السيادة الكاملة على البيانات المالية والبيئية.' : 'Policy Note: The registry algorithm has been tuned to align credit settlement with the latest GCC Interconnect protocols, ensuring full data sovereignty over financial and environmental records.'}
                        </p>
                        <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                            <button className="py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all">
                                {isAr ? 'تحميل سجل التدقيق' : 'Download Audit Log'}
                            </button>
                            <button className="py-4 bg-emerald-600 hover:bg-emerald-500 border border-emerald-500/20 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white transition-all">
                                {isAr ? 'تحديث السياسة' : 'Update Policy'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
