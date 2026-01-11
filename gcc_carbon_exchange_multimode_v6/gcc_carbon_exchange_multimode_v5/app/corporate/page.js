'use client'

import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function CorporatePortal() {
    const { t, lang } = useLanguage()
    const isAr = lang === 'ar'

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-1000">
            <header className="flex justify-between items-center border-b border-white/5 pb-8">
                <div>
                    <h1 className={`text-4xl font-black tracking-tight ${isAr ? 'font-arabic-heading' : ''}`}>
                        {isAr ? 'بوابة الشركات للاستدامة' : 'Corporate ESG Portal'}
                    </h1>
                    <p className={`text-slate-500 mt-2 text-lg ${isAr ? 'font-arabic-body' : ''}`}>
                        {isAr ? 'إدارة محفظة أرصدة الكربون والمواءمة التنظيمية للمؤسسات الكبرى' : 'Institutional carbon portfolio management and regulatory alignment'}
                    </p>
                </div>
                <div className="flex items-center space-x-4 rtl:space-x-reverse bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl overflow-hidden p-1">
                        <span className="text-black font-black text-[10px]">CORP</span>
                    </div>
                    <div className="text-inline-start">
                        <div className="text-white font-black text-sm uppercase">Saudi Aramco</div>
                        <div className="text-emerald-500 font-black text-[10px] uppercase">Corporate Tier 1</div>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 glass-panel p-10 rounded-[2.5rem] space-y-10">
                    <h2 className={`text-2xl font-black ${isAr ? 'font-arabic-heading' : ''}`}>
                        {isAr ? 'محفظة الأرصدة السيادية' : 'Sovereign Asset Portfolio'}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { name: 'Red Sea Mangroves (SA-002)', qty: '45,000', value: '$1.71M', allocation: '32%' },
                            { name: 'MBR Solar Park (AE-001)', qty: '120,000', value: '$3.36M', allocation: '64%' },
                            { name: 'Oman CCUS (OM-001)', qty: '15,000', value: '$457k', allocation: '4%' }
                        ].map((asset, i) => (
                            <div key={i} className="p-6 bg-black/40 rounded-3xl border border-white/5 hover:border-emerald-500/20 transition-all group">
                                <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 group-hover:text-emerald-500 transition-colors">{asset.name}</div>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <div className="text-2xl font-black text-white">{asset.qty}</div>
                                        <div className="text-[9px] text-slate-500 uppercase font-black tracking-widest mt-1">{isAr ? 'رصيد فعال' : 'Active Credits'}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-emerald-500 font-black text-lg">{asset.allocation}</div>
                                        <div className="text-[8px] text-slate-500 uppercase font-black">{isAr ? 'تخصيص المحفظة' : 'Portfolio Alloc'}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-10 border-t border-white/5 space-y-6">
                        <h3 className={`text-lg font-black ${isAr ? 'font-arabic-heading' : ''}`}>{isAr ? 'سجل المعاملات المؤسسية' : 'Institutional Activity Logs'}</h3>
                        <div className="space-y-3 font-mono text-[11px]">
                            {[
                                { date: '2026-01-10', type: 'MINT', detail: 'Saudi Aramco / NEOM Green H2', status: 'VERIFIED' },
                                { date: '2026-01-08', type: 'SETTLE', detail: 'ADNOC / Emirates NBD Node', status: 'ON_CHAIN' }
                            ].map((log, i) => (
                                <div key={i} className="flex justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-all">
                                    <span className="text-slate-500">{log.date}</span>
                                    <span className="text-emerald-500 font-bold">{log.type}</span>
                                    <span className="text-slate-300">{log.detail}</span>
                                    <span className="text-white/30 text-[9px]">{log.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="glass-panel p-8 rounded-[2rem] border-blue-500/10">
                        <h3 className={`text-base font-black mb-6 ${isAr ? 'font-arabic-heading' : ''}`}>
                            {isAr ? 'التدقيق المسبق للـ ESG' : 'Pre-ESG Audit Status'}
                        </h3>
                        <div className="flex flex-col items-center py-10">
                            <div className="w-32 h-32 rounded-full border-[10px] border-emerald-500/20 flex items-center justify-center relative">
                                <div className="absolute inset-0 rounded-full border-[10px] border-emerald-500 border-t-transparent -rotate-45"></div>
                                <span className="text-4xl font-black text-white">٨٩٪</span>
                            </div>
                            <p className="mt-8 text-[10px] text-slate-500 font-black uppercase tracking-widest">
                                {isAr ? 'جاهزية تقرير IFRS S2' : 'IFRS S2 Readiness'}
                            </p>
                        </div>
                        <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
                            {isAr ? 'إنشاء تقرير الاستدامة السنوي' : 'Generate Annual ESG Report'}
                        </button>
                    </div>

                    <div className="p-8 bg-black/40 border border-white/5 rounded-[2rem]">
                        <h4 className={`text-xs font-black uppercase tracking-widest mb-4 opacity-50 ${isAr ? 'font-arabic-heading' : ''}`}>
                            {isAr ? 'رؤى الذكاء الاصطناعي السيادي' : 'Sovereign AI Insights'}
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed italic border-s-2 border-emerald-500 ps-4">
                            {isAr ? 'بناءً على التوجهات الحالية، ننصح بزيادة تخصيص أرصدة "الكربون الأزرق" في البحر الأحمر لتعويض انبعاثات النقل اللوجستي بنسبة ١٥٪ إضافية قبل الربع الثالث.' : 'Based on current trends, we recommend increasing Red Sea "Blue Carbon" credits by 15% to offset logistics emissions ahead of Q3 mandates.'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
