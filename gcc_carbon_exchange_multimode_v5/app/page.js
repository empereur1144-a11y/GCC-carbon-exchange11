'use client'

import useLanguage from './hooks/useLanguage'
import { usePlatformMode } from './context/PlatformModeContext'
import { gccProjects } from './data/projects'
import { copyByMode } from './config/platformCopy'

export default function Dashboard() {
    const { lang, t } = useLanguage()
    const { mode } = usePlatformMode()
    const isAr = lang === 'ar'
    const config = copyByMode[mode] || copyByMode.sovereign

    return (
        <div className="space-y-12 animate-in fade-in duration-1000">
            {/* UN-08: Header section - Mode Aware */}
            <header className={`flex justify-between items-end border-b border-white/5 pb-10`}>
                <div>
                    <h1 className="text-5xl font-black tracking-tighter text-white font-arabic-heading">
                        {t(config.overviewTitle)}
                    </h1>
                    <p className="text-slate-500 mt-4 text-xl font-arabic-body max-w-2xl leading-relaxed">
                        {mode === 'sovereign' ? t('sovereign_subtext') : isAr ? 'محطة التداول المركزية للأصول الكربونية المعتمدة' : 'Centralized trading terminal for certified carbon assets'}
                    </p>
                </div>
                <div className={`text-inline-end hidden lg:block`}>
                    <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2 opacity-50">
                        {mode === 'sovereign' ? t('total_reserve') : isAr ? 'إجمالي الأصول النشطة' : 'Total Active Assets'}
                    </div>
                    <div className="text-4xl font-mono text-white font-black tracking-tighter">
                        12,450,000 <span className="text-xs text-emerald-500 uppercase tracking-tighter opacity-70">tCO2e</span>
                    </div>
                </div>
            </header>

            {/* UN-09: Quick Stats Grid with Institutional Aesthetic */}
            <div className={`grid grid-cols-1 md:grid-cols-4 gap-6`}>
                {[
                    { label: t('market_cap'), value: '$4.2B', trend: '+14%', color: 'text-emerald-500' },
                    { label: t('active_projects'), value: '10+', trend: mode === 'sovereign' ? (isAr ? 'سيادي' : 'Sovereign') : (isAr ? 'قيد التداول' : 'Live Assets'), color: 'text-blue-500' },
                    { label: t('avg_price'), value: '$28.50', trend: '+1.4%', color: 'text-emerald-500' },
                    { label: t('registry_status'), value: '100%', trend: isAr ? 'نشط' : 'Active', color: 'text-emerald-500' },
                ].map((stat, i) => (
                    <div key={i} className="glass-panel p-8 rounded-[2rem] hover:border-emerald-500/40 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 blur-3xl rounded-full"></div>
                        <div className={`text-[10px] text-slate-500 font-black tracking-widest mb-3 uppercase opacity-50 ${isAr ? 'font-arabic-heading' : ''}`}>{stat.label}</div>
                        <div className={`text-3xl font-black text-white tracking-tighter`}>{stat.value}</div>
                        <div className={`text-[10px] mt-3 font-black uppercase tracking-widest ${stat.color} flex items-center space-x-2 rtl:space-x-reverse`}>
                            <span className="w-1 h-1 rounded-full bg-current"></span>
                            <span>{stat.trend}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12`}>
                {/* UN-10: Main Project Feed with Government Badges */}
                <div className="lg:col-span-2 space-y-8">
                    <div className={`flex justify-between items-center mb-6`}>
                        <h2 className="text-2xl font-black text-white uppercase tracking-tight font-arabic-heading">{t('project_registry')}</h2>
                        <button className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500 hover:text-emerald-400 transition-colors border-b border-emerald-500/20 pb-1">
                            {t('view_all')}
                        </button>
                    </div>

                    <div className="space-y-4">
                        {gccProjects.slice(0, 6).map((project, i) => (
                            <div key={i} className={`flex items-center justify-between p-6 bg-white/5 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-emerald-500/5 group shadow-xl`}>
                                <div className={`flex items-center space-x-6 rtl:space-x-reverse`}>
                                    <div className="w-14 h-14 bg-slate-900 rounded-2xl border border-white/10 flex items-center justify-center font-black text-xs text-slate-500 group-hover:border-emerald-500/50 transition-colors">
                                        {project.id.split('-')[0]}
                                    </div>
                                    <div className="text-inline-start">
                                        <div className="text-lg font-black text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{project.name}</div>
                                        <div className="flex items-center space-x-3 rtl:space-x-reverse mt-2">
                                            <span className="text-[10px] text-slate-500 font-bold tracking-tight">{project.location}</span>
                                            <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                                            <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-500 rounded uppercase font-black tracking-tighter border border-emerald-500/20">
                                                {isAr ? 'معتمد حكومياً' : 'GOVT APPROVED'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`text-inline-end`}>
                                    <div className="text-2xl font-mono font-black text-white tracking-tighter">${project.price.toFixed(2)}</div>
                                    <div className="text-[9px] text-slate-600 uppercase font-black tracking-widest mt-1">{t('per_credit')}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* UN-11: Institutional Activity Pulse */}
                <div className="space-y-8">
                    <div className="glass-panel p-10 rounded-[3rem] border-emerald-500/10 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-1 bg-emerald-500/20"></div>
                        <h2 className={`text-xl font-black text-white mb-8 uppercase tracking-widest font-arabic-heading`}>{t('esg_pulse')}</h2>
                        <div className="space-y-8">
                            {[
                                { label: t('regional_adoption'), value: '84%', color: 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]' },
                                { label: t('carbon_neutrality'), value: '62%', color: 'bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]' },
                                { label: t('sovereign_liquidity'), value: '$450M', color: 'bg-indigo-600 shadow-[0_0_15px_rgba(79,70,229,0.5)]' }
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className={`flex justify-between text-[10px] font-black uppercase tracking-widest mb-3`}>
                                        <span className={`text-slate-500 ${isAr ? 'font-arabic-heading' : ''}`}>{item.label}</span>
                                        <span className="text-white font-mono">{item.value}</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-800/50 rounded-full overflow-hidden border border-white/5">
                                        <div className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-in-out`} style={{ width: i === 0 ? '84%' : i === 1 ? '62%' : '45%' }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={`mt-10 pt-10 border-t border-slate-800/50`}>
                            <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4 opacity-30">
                                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-[0.3em]">{mode === 'sovereign' ? 'SHARIAH CERTIFIED' : 'COMPLIANT ASSET'}</span>
                            </div>
                            <p className="text-[10px] text-slate-500 leading-relaxed uppercase font-black tracking-tighter italic opacity-40">
                                {mode === 'demo' ? t('demo_disclaimer') : t('institutional_safety_note') || t('demo_disclaimer')}
                            </p>
                        </div>
                    </div>

                    <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-[2rem] group cursor-default shadow-xl">
                        <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-2">{mode === 'sovereign' ? (isAr ? 'تكامل المحفظة السيادية' : 'Sovereign Wallet Sync') : (isAr ? 'تم ربط المحفظة المؤسسية' : 'Institutional Wallet Connected')}</div>
                        <div className="text-white text-sm font-bold opacity-70 leading-relaxed">
                            {mode === 'sovereign' ? (isAr ? 'متصل ببروتوكول البودن المصرفي الخليجي الموحد' : 'Linked via Unified GCC Interbank Settlement Protocol') : (isAr ? 'متصل بنظام التسوية المصرفية المعتمد' : 'Linked via Certified Banking Settlement Network')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
