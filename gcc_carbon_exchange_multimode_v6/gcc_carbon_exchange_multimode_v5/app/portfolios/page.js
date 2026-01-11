'use client'

import useLanguage from '../hooks/useLanguage'

export default function Portfolios() {
    const { lang, t } = useLanguage()
    const isAr = lang === 'ar'

    return (
        <div className={`space-y-8 animate-in fade-in duration-700 ${isAr ? 'text-right' : ''}`}>
            <header className={isAr ? 'flex flex-col items-end' : ''}>
                <h1 className="text-3xl font-bold tracking-tight text-white font-arabic-heading uppercase tracking-widest">
                    {isAr ? 'إدارة المحافظ السيادية' : 'Sovereign Portfolios'}
                </h1>
                <p className="text-slate-400 mt-1">
                    {isAr ? 'إدارة الأصول الكربونية والمجمعات المالية' : 'Manage carbon assets and financial pools'}
                </p>
            </header>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isAr ? 'dir-rtl' : ''}`}>
                {[
                    { name: isAr ? 'صندوق تنمية الكربون' : 'Carbon Development Fund', balance: '450,000', change: '+5.2%' },
                    { name: isAr ? 'محفظة التعويضات الوطنية' : 'National Offset Portfolio', balance: '820,000', change: '+2.1%' },
                    { name: isAr ? 'مجمع مبادرات التقنية' : 'Tech Initiative Pool', balance: '125,500', change: '+14.8%' }
                ].map((p, i) => (
                    <div key={i} className="glass-panel p-8 rounded-3xl hover:border-emerald-500/30 transition-all group">
                        <div className="text-xs text-slate-500 font-bold mb-4 uppercase tracking-widest group-hover:text-emerald-400 transition-colors">{p.name}</div>
                        <div className="text-3xl font-black text-white">{p.balance} <span className="text-xs text-slate-500">tCO2e</span></div>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="text-[10px] text-emerald-500 font-bold">{p.change} {isAr ? 'شهرياً' : 'Monthly'}</span>
                            <button className="text-[10px] text-slate-500 hover:text-white uppercase font-black tracking-widest">{isAr ? 'تفاصيل' : 'Details'}</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
