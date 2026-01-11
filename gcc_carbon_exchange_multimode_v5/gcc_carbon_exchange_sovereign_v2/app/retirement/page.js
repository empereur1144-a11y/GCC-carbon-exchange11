'use client'

import useLanguage from '../hooks/useLanguage'

export default function RetirementVault() {
    const { lang, t } = useLanguage()
    const isAr = lang === 'ar'

    return (
        <div className={`space-y-8 animate-in fade-in duration-700`}>
            <header>
                <h1 className="text-3xl font-bold tracking-tight text-white font-arabic-heading uppercase tracking-widest">
                    {isAr ? 'خزنة التقاعد السيادية' : 'The Retirement Vault'}
                </h1>
                <p className="text-slate-400 mt-1">
                    {isAr ? 'تقاعد الأرصدة بشكل دائم للامتثال التنظيمي' : 'Permanently retire credits for regulatory compliance'}
                </p>
            </header>

            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8`}>
                <div className="lg:col-span-2 glass-panel p-10 rounded-3xl border-emerald-500/10">
                    <h2 className="text-xl font-bold mb-8 font-arabic-heading">
                        {isAr ? 'واجهة التنفيذ' : 'Execution Interface'}
                    </h2>
                    <div className="space-y-8">
                        <div className="p-6 bg-slate-950/50 rounded-2xl border border-white/5">
                            <div className="text-[10px] text-emerald-500 font-black uppercase tracking-widest mb-2">
                                {isAr ? 'المخزون المحدد' : 'Selected Inventory'}
                            </div>
                            <div className="flex justify-between items-center px-2">
                                <span className="text-lg font-bold text-white">NEOM Reforestation v2025</span>
                                <span className="font-mono text-2xl font-black text-white">12,500 <span className="text-xs text-slate-500">tCO2e</span></span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
                                {isAr ? 'سبب التقاعد' : 'Retirement Purpose'}
                            </label>
                            <select className={`w-full p-4 bg-white/5 border border-white/5 rounded-2xl text-white font-bold text-sm focus:outline-none focus:border-emerald-500 transition-all`}>
                                <option className="bg-slate-900">{isAr ? 'خطة صفر الانبعاثات ٢٠٢٦' : 'Corporate Net Zero Goal 2026'}</option>
                                <option className="bg-slate-900">{isAr ? 'الالتزام التنظيمي المحلي' : 'Local Regulatory Mandate'}</option>
                            </select>
                        </div>

                        <button className="w-full py-5 bg-rose-600 hover:bg-rose-500 text-white rounded-2xl font-black text-base transition-all shadow-2xl active:scale-95 uppercase tracking-widest font-arabic-heading">
                            {isAr ? 'تنفيذ التقاعد النهائي' : 'Execute Permanent Retirement'}
                        </button>

                        <p className="text-[10px] text-slate-500 text-center uppercase font-black tracking-widest opacity-50">
                            {isAr ? 'تحذير: هذا الإجراء غير قابل للإلغاء. سيتم إصدار شهادة استهلاك نهائية.' : 'Warning: This action is irreversible. Tokens will be burned and an immutable certificate issued.'}
                        </p>
                    </div>
                </div>

                <div className="glass-panel p-10 rounded-3xl border-white/5 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-slate-800 rounded-full mb-8 flex items-center justify-center opacity-40">
                        {/* Placeholder for SVG icon */}
                        <div className="w-10 h-1 bg-white"></div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 font-arabic-heading">
                        {isAr ? 'شهادات الكربون NFT' : 'NFT Carbon Certificates'}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-arabic-body">
                        {isAr ? 'كل عملية تقاعد تولد شهادة سيادية غير قابلة للتحويل تثبت إزالة الكربون من الغلاف الجوي.' : 'Each retirement generates an on-chain soulbound certificate proving the removal of carbon from the atmosphere.'}
                    </p>
                </div>
            </div>
        </div>
    )
}
