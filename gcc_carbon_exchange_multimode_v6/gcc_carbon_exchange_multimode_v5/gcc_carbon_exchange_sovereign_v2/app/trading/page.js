'use client'

import { useState } from 'react'
import useLanguage from '../hooks/useLanguage'
import { gccProjects } from '../data/projects'

export default function SpotTrading() {
    const { lang, t } = useLanguage()
    const [side, setSide] = useState('BUY')
    const [orderStatus, setOrderStatus] = useState(null)
    const [selectedProject, setSelectedProject] = useState(gccProjects[0])

    const isAr = lang === 'ar'

    const handlePlaceOrder = () => {
        setOrderStatus('processing')
        setTimeout(() => {
            setOrderStatus('success')
            setTimeout(() => setOrderStatus(null), 3000)
        }, 1500)
    }

    return (
        <div className="space-y-10 animate-in fade-in duration-1000">
            <header className={`flex justify-between items-center`}>
                <div>
                    <h1 className="text-4xl font-black tracking-tighter text-white font-arabic-heading">
                        {isAr ? 'التداول الفوري السيادي' : 'Sovereign Spot Trading'}
                    </h1>
                    <p className="text-slate-400 mt-2 text-lg">
                        {isAr ? 'سيولة مؤسسية لأرصدة الكربون الخليجية' : 'Institutional liquidity for GCC carbon credits'}
                    </p>
                </div>
                <div className="flex space-x-2 rtl:space-x-reverse">
                    <span className="px-4 py-2 bg-emerald-500/10 text-emerald-500 text-xs font-bold rounded-full border border-emerald-500/20 uppercase tracking-widest">
                        {isAr ? 'تسوية فورية T+0' : 'Sovereign T+0 Settlement'}
                    </span>
                </div>
            </header>

            <div className={`grid grid-cols-1 lg:grid-cols-4 gap-10`}>
                {/* Trading Terminal Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="glass-panel p-8 rounded-3xl relative overflow-hidden border-white/5">
                        {orderStatus === 'success' && (
                            <div className="absolute inset-0 bg-emerald-600/95 backdrop-blur-md z-10 flex flex-col items-center justify-center p-8 text-center animate-in zoom-in duration-300">
                                <div className="w-16 h-1 bg-white mb-6 animate-pulse"></div>
                                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
                                    {isAr ? 'تم تنفيذ الأمر' : 'Order Executed'}
                                </h3>
                                <p className="text-emerald-100 font-medium leading-tight">
                                    {isAr ? 'تم تأكيد المطابقة والتحويل إلى الخزينة السيادية' : 'Sovereign match confirmed. Asset transferred to local vault.'}
                                </p>
                            </div>
                        )}

                        <h2 className={`text-sm font-black uppercase tracking-widest text-slate-500 mb-6`}>
                            {isAr ? 'أمر السوق' : 'Market Order'}
                        </h2>
                        <div className="flex bg-slate-900/50 p-1.5 rounded-2xl mb-8 border border-white/5">
                            <button
                                onClick={() => setSide('BUY')}
                                className={`flex-1 py-3 rounded-xl font-black text-sm transition-all ${side === 'BUY' ? 'bg-emerald-600 text-white shadow-xl' : 'text-slate-400 hover:text-white'}`}
                            >
                                {isAr ? 'شراء' : 'BUY'}
                            </button>
                            <button
                                onClick={() => setSide('SELL')}
                                className={`flex-1 py-3 rounded-xl font-black text-sm transition-all ${side === 'SELL' ? 'bg-rose-600 text-white shadow-xl' : 'text-slate-400 hover:text-white'}`}
                            >
                                {isAr ? 'بيع' : 'SELL'}
                            </button>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <label className="text-[10px] text-slate-500 font-black uppercase mb-2 block tracking-[0.2em] opacity-60">
                                    {isAr ? 'الأصل الكربوني' : 'Sovereign Asset'}
                                </label>
                                <select
                                    onChange={(e) => setSelectedProject(gccProjects.find(p => p.id === e.target.value))}
                                    className={`w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white font-black text-sm focus:outline-none focus:border-emerald-500 transition-colors appearance-none`}
                                >
                                    {gccProjects.map(p => (
                                        <option key={p.id} value={p.id} className="bg-slate-900">{p.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="text-[10px] text-slate-500 font-black uppercase mb-2 block tracking-[0.2em] opacity-60">
                                    {isAr ? 'الكمية (طن كربون)' : 'Quantity (tCO2e)'}
                                </label>
                                <input type="text" defaultValue="5,000" className={`w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white font-mono text-lg focus:outline-none focus:border-emerald-500 transition-colors`} />
                            </div>
                            <div className={`pt-2`}>
                                <label className="text-[10px] text-slate-500 font-black uppercase mb-1 block tracking-[0.2em] opacity-60">
                                    {isAr ? 'السعر التقديري' : 'Estimated Price'}
                                </label>
                                <div className="text-3xl font-mono text-white font-black">${selectedProject.price.toFixed(2)}</div>
                                <p className="text-[10px] text-emerald-500/50 mt-2 uppercase font-black tracking-widest italic tracking-tighter">
                                    {isAr ? 'بروتوكول المقاصة السيادي نشط' : 'Sovereign clearing protocol active'}
                                </p>
                            </div>

                            <button
                                onClick={handlePlaceOrder}
                                disabled={orderStatus === 'processing'}
                                className={`w-full py-5 rounded-2xl font-black text-base transition-all shadow-2xl active:scale-95 disabled:opacity-50 flex items-center justify-center space-x-3 rtl:space-x-reverse ${side === 'BUY' ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-rose-600 hover:bg-rose-500'} text-white mt-4`}
                            >
                                {orderStatus === 'processing' ? (
                                    <>
                                        <div className="w-5 h-5 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span className="font-arabic-body tracking-tight">{isAr ? 'جاري المطابقة السيادية...' : 'MATCHING ENGINE...'}</span>
                                    </>
                                ) : (
                                    <span className="font-arabic-heading tracking-tight">
                                        {isAr ? `تأكيد أمر ال${side === 'BUY' ? 'شراء' : 'بيع'}` : `CONFIRM ${side} ORDER`}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Chart and Depth */}
                <div className="lg:col-span-3 space-y-8">
                    <div className="glass-panel rounded-3xl p-8 min-h-[550px] flex flex-col border-white/5">
                        <div className={`flex justify-between items-center mb-8`}>
                            <div className={`flex items-center space-x-6 rtl:space-x-reverse`}>
                                <div>
                                    <div className="text-2xl font-black text-white tracking-tighter uppercase">{selectedProject.name}</div>
                                    <div className="text-emerald-500 font-mono text-lg font-bold mt-1">
                                        ${selectedProject.price.toFixed(2)} <span className="text-xs ml-1 opacity-70 tracking-tighter">+1.4% (24H)</span>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex space-x-2 rtl:space-x-reverse`}>
                                {['1H', '1D', '1W', '1M', 'ALL'].map(t => (
                                    <button key={t} className={`px-4 py-2 text-[10px] rounded-xl font-black transition-all ${t === '1D' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'}`}>{t}</button>
                                ))}
                            </div>
                        </div>

                        {/* Institutional Chart Area */}
                        <div className="flex-1 bg-slate-950/50 rounded-2xl border border-white/5 flex flex-col relative overflow-hidden group shadow-inner">
                            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '80px 80px' }}></div>

                            {/* Y-Axis Labels */}
                            <div className={`absolute top-4 bottom-12 flex flex-col justify-between text-[9px] font-mono text-slate-600 px-4 z-10 inset-is-0 text-inline-start`}>
                                <span>$29.50</span>
                                <span>$29.00</span>
                                <span>$28.50</span>
                                <span>$28.00</span>
                                <span>$27.50</span>
                            </div>

                            <div className="flex-1 relative flex items-center justify-center cursor-crosshair">
                                <div className="text-slate-600 text-[10px] font-black uppercase tracking-[0.8em] z-10 group-hover:text-emerald-500/20 transition-all pointer-events-none italic opacity-30 select-none">
                                    {isAr ? 'عرض البيانات السيادية' : 'Sovereign Data Layer'}
                                </div>

                                <svg className="absolute inset-0 w-full h-full pointer-events-none px-12 py-8" preserveAspectRatio="none">
                                    <path
                                        d="M0,450 Q100,380 200,420 T400,350 T600,480 T800,380 T1000,320"
                                        fill="none"
                                        stroke="rgba(16, 185, 129, 0.4)"
                                        strokeWidth="3"
                                        className="animate-in slide-in-from-left duration-1000"
                                    />
                                    <path
                                        d="M0,450 Q100,380 200,420 T400,350 T600,480 T800,380 T1000,320"
                                        fill="none"
                                        stroke="rgba(16, 185, 129, 0.05)"
                                        strokeWidth="30"
                                        className="blur-3xl"
                                    />
                                </svg>
                            </div>

                            {/* X-Axis Labels (Date/Time) */}
                            <div className={`h-12 border-t border-white/5 bg-slate-900/40 flex items-center justify-between px-16 text-[9px] font-mono text-slate-500 uppercase tracking-widest`}>
                                <span>08:00</span>
                                <span>10:00</span>
                                <span>12:00</span>
                                <span>14:00</span>
                                <span>16:00</span>
                                <span>18:00</span>
                                <span className="text-emerald-500 font-bold">{isAr ? 'الآن' : 'LIVE'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
