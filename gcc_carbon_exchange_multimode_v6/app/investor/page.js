'use client'

import useLanguage from '../hooks/useLanguage'

export default function InvestorHub() {
    const { lang, t } = useLanguage()
    const isAr = lang === 'ar'

    return (
        <div className="space-y-10 animate-in fade-in duration-1000">
            {/* Investor Header */}
            <header className={`flex justify-between items-end`}>
                <div>
                    <h1 className="text-4xl font-black tracking-tighter text-white font-arabic-heading">
                        {isAr ? 'مركز المستثمرين السيادي' : 'Sovereign Investor Hub'}
                    </h1>
                    <p className="text-slate-400 mt-2 text-lg">
                        {isAr ? 'أداء المحفظة السيادية، تخصيص الأصول، وعمق السوق الإقليمي' : 'Sovereign portfolio performance, asset allocation, and regional market depth'}
                    </p>
                </div>
                <div className={`text-inline-end`}>
                    <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1 opacity-60">
                        {isAr ? 'إجمالي قيمة المحفظة' : 'Total Portfolio Value'}
                    </div>
                    <div className="text-3xl font-mono text-white font-black">
                        $142,450,000 <span className="text-xs text-emerald-500">+$12.2M</span>
                    </div>
                </div>
            </header>

            {/* Investment Summary Stats */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6`}>
                {[
                    { label: isAr ? 'متوسط سعر الشراء المرجح' : 'Weighted Avg Buy Price', value: '$26.40', sub: isAr ? 'مقابل السوق: $28.50' : 'vs Market: $28.50' },
                    { label: isAr ? 'الأرباح السيادية المحققة' : 'Unrealized Sovereign Gain', value: '+$14,120,400', sub: isAr ? 'عائد إجمالي +١١.٤٪' : '+11.4% Total Return' },
                    { label: isAr ? 'عائد الأصول الكربونية' : 'Yield on Carbon Assets', value: '5.2%', sub: isAr ? 'مكافآت البروتوكول السيادي' : 'Sovereign Protocol Rewards' },
                ].map((stat, i) => (
                    <div key={i} className={`glass-panel p-8 rounded-3xl hover:border-emerald-500/30 transition-all group`}>
                        <div className="text-xs text-slate-500 font-black tracking-widest mb-3 uppercase opacity-60 group-hover:text-emerald-400 transition-colors">{stat.label}</div>
                        <div className="text-4xl font-black text-white tracking-tighter">{stat.value}</div>
                        <div className="text-[10px] text-slate-500 mt-3 font-mono uppercase tracking-widest font-bold">{stat.sub}</div>
                    </div>
                ))}
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-10`}>
                {/* Asset Allocation Chart (Mock) */}
                <div className="glass-panel p-10 rounded-3xl flex flex-col h-full items-center justify-center min-h-[450px]">
                    <h2 className={`text-2xl font-bold mb-10 w-full font-arabic-heading`}>
                        {isAr ? 'توزيع الأصول الإقليمية' : 'Regional Asset Allocation'}
                    </h2>
                    <div className="relative w-64 h-64 mb-10 group">
                        <div className="absolute inset-0 rounded-full border-[20px] border-emerald-500 border-ie-transparent border-be-transparent rotate-45 group-hover:scale-105 transition-transform shadow-[0_0_30px_rgba(16,185,129,0.2)]"></div>
                        <div className="absolute inset-0 rounded-full border-[20px] border-blue-500 border-is-transparent border-bs-transparent rotate-12 group-hover:scale-110 transition-transform"></div>
                        <div className="absolute inset-0 rounded-full border-[20px] border-slate-700 opacity-20"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center">
                            <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">{isAr ? 'كربون أزرق' : 'Blue Carbon'}</div>
                            <div className="text-4xl font-black text-white tracking-tighter">45%</div>
                        </div>
                    </div>
                    <div className="w-full space-y-4">
                        {[
                            { label: isAr ? 'كربون أزرق (الخليج)' : 'Blue Carbon (Oceans)', color: 'bg-emerald-500', value: '$64.2M' },
                            { label: isAr ? 'طاقة متجددة' : 'Renewable Offsets', color: 'bg-blue-500', value: '$48.5M' },
                            { label: isAr ? 'تقنيات الالتقاط المباشر' : 'Direct Air Capture', color: 'bg-indigo-500', value: '$29.7M' }
                        ].map((item, i) => (
                            <div key={i} className={`flex justify-between items-center text-sm`}>
                                <span className={`flex items-center space-x-3 rtl:space-x-reverse`}><i className={`w-3 h-3 rounded-full ${item.color}`}></i><span className="font-bold opacity-80">{item.label}</span></span>
                                <span className="font-mono font-black text-white">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Market Depth Visualization */}
                <div className="lg:col-span-2 glass-panel p-10 rounded-3xl flex flex-col min-h-[450px]">
                    <div className={`flex justify-between items-center mb-8`}>
                        <h2 className="text-2xl font-bold font-arabic-heading">{isAr ? 'عمق السوق: المؤشر الخليجي' : 'Market Depth: GCC Composite'}</h2>
                        <div className="flex space-x-3 rtl:space-x-reverse">
                            <span className="text-[10px] px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg uppercase font-black tracking-widest border border-emerald-500/20">{isAr ? 'سيولة سيادية' : 'Sovereign Liquidity'}</span>
                        </div>
                    </div>

                    <div className="flex-1 relative mt-6 flex items-end space-x-1.5 rtl:space-x-reverse px-6 overflow-hidden pt-16">
                        {[0.2, 0.3, 0.5, 0.4, 0.6, 0.8, 0.7, 0.9, 1, 0.8, 0.4, 0.2, 0.3, 0.5, 0.6, 0.9, 0.8, 0.7].map((h, i) => (
                            <div
                                key={i}
                                style={{ height: `${h * 100}%` }}
                                className={`flex-1 min-w-[14px] rounded-t-lg transition-all duration-1000 ease-out hover:scale-110 ${i < 9 ? 'bg-emerald-500/20 border-t-4 border-emerald-400/50 hover:bg-emerald-500/40' : 'bg-rose-500/20 border-t-4 border-rose-400/50 hover:bg-rose-400/40'}`}
                            ></div>
                        ))}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
                            <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.3em] mb-2 opacity-60">{isAr ? 'متوسط السعر' : 'Mid Price'}</div>
                            <div className="px-5 py-2 bg-slate-800 rounded-2xl text-emerald-500 font-mono text-3xl font-black border border-slate-700 shadow-2xl">$28.50</div>
                        </div>
                    </div>

                    <div className={`mt-10 grid grid-cols-2 gap-10 divide-is divide-slate-800/50`}>
                        <div>
                            <div className="text-[10px] text-slate-500 uppercase font-black mb-4 tracking-widest opacity-60">{isAr ? 'جدار الشراء (الطلبات)' : 'Buy Wall (Bids)'}</div>
                            <div className="space-y-3 font-mono text-base font-bold">
                                <div className={`flex justify-between text-emerald-500`}><span>$28.45</span><span>4.2M cr.</span></div>
                                <div className={`flex justify-between text-emerald-500/70`}><span>$28.40</span><span>1.8M cr.</span></div>
                                <div className={`flex justify-between text-emerald-500/40`}><span>$28.35</span><span>6.1M cr.</span></div>
                            </div>
                        </div>
                        <div className={`ps-10`}>
                            <div className="text-[10px] text-slate-500 uppercase font-black mb-4 tracking-widest opacity-60">{isAr ? 'جدار البيع (العروض)' : 'Sell Wall (Asks)'}</div>
                            <div className="space-y-3 font-mono text-base font-bold">
                                <div className={`flex justify-between text-rose-500`}><span>$28.55</span><span>950k cr.</span></div>
                                <div className={`flex justify-between text-rose-500/70`}><span>$28.60</span><span>2.2M cr.</span></div>
                                <div className={`flex justify-between text-rose-500/40`}><span>$28.65</span><span>3.5M cr.</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="glass-panel p-10 rounded-3xl overflow-hidden hover:border-emerald-500/20 transition-all">
                <h2 className={`text-2xl font-bold mb-8 font-arabic-heading`}>
                    {isAr ? 'معايير فرص الاستثمار' : 'Investment Opportunity Benchmarks'}
                </h2>
                <div className="overflow-x-auto">
                    <table className={`w-full text-inline-start`}>
                        <thead className="text-xs text-slate-500 uppercase border-b border-slate-800">
                            <tr>
                                <th className="pb-6">{isAr ? 'اسم المشروع' : 'Project Asset'}</th>
                                <th className="pb-6">{isAr ? 'تصنيف المخاطر' : 'Risk Rating'}</th>
                                <th className="pb-6">{isAr ? 'العائد المتوقع (٥ سنوات)' : 'Projected ROI (5Y)'}</th>
                                <th className="pb-6">{isAr ? 'القيمة السوقية' : 'Market Cap'}</th>
                                <th className="pb-6">{isAr ? 'فئة السيولة' : 'Liquidity Tier'}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/50">
                            {[
                                { name: isAr ? 'نيم لإزالة الكربون' : 'NEOM Carbon Removal', risk: 'A+', roi: '14.5%', cap: '$850M', tier: 'Primary' },
                                { name: isAr ? 'مانغروف المملكة العربي' : 'KSA Mangrove Blue Carbon', risk: 'AAA', roi: '11.2%', cap: '$420M', tier: 'Top-Tier' },
                                { name: isAr ? 'الالتقاط المباشر - الإمارات' : 'UAE Direct Air Capture', risk: 'A', roi: '18.4%', cap: '$210M', tier: 'Growth' },
                                { name: isAr ? 'تعويضات الهيدروجين الأخضر - عمان' : 'Oman Green Hydrogen Offset', risk: 'B+', roi: '22.1%', cap: '$95M', tier: 'Emerging' },
                            ].map((proj, i) => (
                                <tr key={i} className="group hover:bg-white/5 transition-colors">
                                    <td className="py-6 font-bold text-lg">{proj.name}</td>
                                    <td className="py-6"><span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-lg text-xs font-mono font-bold">{proj.risk}</span></td>
                                    <td className="py-6 text-emerald-400 font-mono font-bold text-lg">{proj.roi}</td>
                                    <td className="py-6 font-mono font-bold">{proj.cap}</td>
                                    <td className="py-6">
                                        <div className="w-24 h-2 bg-slate-800 rounded-full">
                                            <div className={`h-full bg-emerald-500 rounded-full transition-all duration-1000 ${i === 2 ? 'w-1/2' : i === 3 ? 'w-1/4' : 'w-full'}`}></div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
