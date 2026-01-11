'use client'

import { useLanguage } from '../context/LanguageContext'

export default function APIDocuments() {
    const { t, lang } = useLanguage()
    const isAr = lang === 'ar'

    return (
        <div className="space-y-12 animate-in fade-in duration-1000">
            <header className="border-b border-white/5 pb-8">
                <h1 className={`text-4xl font-black tracking-tight ${isAr ? 'font-arabic-heading' : ''}`}>
                    {isAr ? 'واجهة برمجة التطبيقات للربط الخليجي' : 'GCC Fintech Integration API'}
                </h1>
                <p className={`text-slate-500 mt-2 text-lg ${isAr ? 'font-arabic-body' : ''}`}>
                    {isAr ? 'تكامل سلس مع الأنظمة المصرفية والسيادية الإقليمية' : 'Seamless integration with regional banking and sovereign systems'}
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-8">
                    <div className="glass-panel p-8 rounded-3xl space-y-6">
                        <h2 className={`text-xl font-black text-white ${isAr ? 'font-arabic-heading' : ''}`}>
                            {isAr ? 'بداية سريعة: بروتوكول المصادقة' : 'Quickstart: Authentication Protocol'}
                        </h2>
                        <div className="p-6 bg-black/40 rounded-2xl border border-white/5 font-mono text-sm overflow-x-auto">
                            <div className="text-emerald-500"># GCC-Sovereign Auth Header</div>
                            <div className="text-slate-300">curl -X GET "https://api.gcc-carbon.gov/v1/projects" \</div>
                            <div className="text-slate-300">  -H "Authorization: Bearer SOVEREIGN_PILOT_KEY" \</div>
                            <div className="text-slate-300">  -H "X-GCC-Entity: MOF_SA"</div>
                        </div>
                    </div>

                    <div className="glass-panel p-8 rounded-3xl space-y-6">
                        <h2 className={`text-xl font-black text-white ${isAr ? 'font-arabic-heading' : ''}`}>
                            {isAr ? 'نقاط النهاية السيادية' : 'Sovereign Endpoints'}
                        </h2>
                        <div className="space-y-4">
                            {[
                                { method: 'GET', path: '/v1/national-vision/alignment', desc: isAr ? 'نتبع مواءمة الرؤية الوطنية' : 'Track national vision alignment' },
                                { method: 'POST', path: '/v1/trades/settle-sovereign', desc: isAr ? 'تسوية فورية للبنوك المركزية' : 'Central Bank instant settlement' },
                                { method: 'GET', path: '/v1/impact/audit-trail', desc: isAr ? 'تحميل سجلات التدقيق الشاملة' : 'Download granular audit logs' }
                            ].map((endpoint, i) => (
                                <div key={i} className="flex items-center space-x-6 rtl:space-x-reverse p-4 bg-white/5 rounded-2xl border border-white/5">
                                    <span className={`text-[10px] font-black px-3 py-1 rounded bg-blue-500/20 text-blue-400 border border-blue-500/20`}>{endpoint.method}</span>
                                    <div className="text-inline-start">
                                        <div className="text-sm font-mono text-white">{endpoint.path}</div>
                                        <div className={`text-[10px] text-slate-500 mt-1 ${isAr ? 'font-arabic-body font-bold' : ''}`}>{endpoint.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="glass-panel p-8 rounded-3xl border-emerald-500/10">
                        <div className="flex items-center space-x-3 rtl:space-x-reverse mb-6">
                            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                            <h3 className={`text-sm font-black text-white uppercase tracking-widest ${isAr ? 'font-arabic-heading' : ''}`}>
                                {isAr ? 'حالة النظام' : 'SYSTEM STATUS'}
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                { label: isAr ? 'بوابة الربط المصرفي' : 'Interbank Gateway', status: 'OK' },
                                { label: isAr ? 'عقدة سجل المشروع' : 'Project Registry Node', status: 'OK' },
                                { label: isAr ? 'قاعدة بيانات السيادة' : 'Sovereign DB', status: '100%' }
                            ].map((status, i) => (
                                <div key={i} className="flex justify-between items-center bg-black/20 p-4 rounded-xl">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{status.label}</span>
                                    <span className="text-[10px] font-mono text-emerald-500 font-black">{status.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 bg-blue-500/5 border border-blue-500/10 rounded-3xl group">
                        <h4 className="text-blue-500 text-xs font-black uppercase tracking-widest mb-4">Sovereign SDK</h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed mb-6">
                            {isAr ? 'قم بتحميل مكتبة التطوير الخليجية الموحدة لتسهيل الدمج في محافظ البنك والخدمات الحكومية.' : 'Download the Unified GCC SDK for easy integration into banking apps and government portals.'}
                        </p>
                        <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all">
                            {isAr ? 'تحميل SDK السيادي' : 'Download Sovereign SDK'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
