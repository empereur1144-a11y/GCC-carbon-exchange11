'use client'

import useLanguage from '../hooks/useLanguage'

export default function ESGReporting() {
    const { lang, t } = useLanguage()
    const isAr = lang === 'ar'

    return (
        <div className={`space-y-8 animate-in fade-in duration-700`}>
            <header>
                <h1 className="text-3xl font-bold tracking-tight text-white font-arabic-heading uppercase tracking-widest">
                    {isAr ? 'مركز تقارير الاستدامة (ESG)' : 'ESG & Disclosure Hub'}
                </h1>
                <p className="text-slate-400 mt-1">
                    {isAr ? 'تقارير مؤتمتة للمعايير الإقليمية والعالمية' : 'Automated reporting for regional & global standards'}
                </p>
            </header>

            <div className="glass-panel p-8 rounded-3xl">
                <div className={`flex justify-between items-center mb-8`}>
                    <h2 className="text-xl font-bold font-arabic-heading">
                        {isAr ? 'سجلات الشفافية المولدة' : 'Generated Transparency Logs'}
                    </h2>
                    <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all text-sm font-arabic-body">
                        {isAr ? 'تحميل التدقيق الكامل' : 'Download Full Audit'}
                    </button>
                </div>

                <div className="space-y-4">
                    {[
                        { date: isAr ? '٠٤ يناير ٢٠٢٦' : 'Jan 04, 2026', type: isAr ? 'الإفصاح السنوي للاستدامة' : 'Annual ESG Disclosure', status: 'VERIFIED', standard: 'IFRS S2' },
                        { date: isAr ? '٢٨ ديسمبر ٢٠٢٥' : 'Dec 28, 2025', type: isAr ? 'تقرير تعويضات النطاق ٢' : 'Scope 2 Offset Report', status: 'ARCHIVED', standard: 'GHG Protocol' },
                        { date: isAr ? '١٥ ديسمبر ٢٠٢٥' : 'Dec 15, 2025', type: isAr ? 'الامتثال الإقليمي الخليجي' : 'GCC Regional Compliance', status: 'VERIFIED', standard: 'ADGM Climate' }
                    ].map((r, i) => (
                        <div key={i} className={`flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-all group`}>
                            <div className={`flex items-center space-x-6 rtl:space-x-reverse`}>
                                <div className="p-3 bg-slate-800 rounded-xl text-emerald-500 italic font-serif text-lg">PDF</div>
                                <div className="text-inline-start">
                                    <div className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{r.type}</div>
                                    <div className="text-xs text-slate-500 font-bold mt-1">
                                        {isAr ? `تاريخ الإصدار: ${r.date} • الإطار: ${r.standard}` : `Generated: ${r.date} • Framework: ${r.standard}`}
                                    </div>
                                </div>
                            </div>
                            <div className={`flex items-center space-x-6 rtl:space-x-reverse`}>
                                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded-lg tracking-widest">{r.status}</span>
                                <button className="text-slate-400 hover:text-white transition-colors">{isAr ? 'عرض' : 'View'}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
