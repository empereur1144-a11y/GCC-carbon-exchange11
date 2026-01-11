'use client'

import useLanguage from './hooks/useLanguage'
import { gccProjects } from './data/projects'

export default function Dashboard() {
    const { lang, t } = useLanguage()
    const isAr = lang === 'ar'

    return (
        <div className="space-y-10 animate-in fade-in duration-1000">
            {/* Header section with Sovereign Disclaimer */}
            <header className={`flex justify-between items-end`}>
                <div>
                    <h1 className="text-4xl font-black tracking-tighter text-white font-arabic-heading">
                        {t('sovereign_overview')}
                    </h1>
                    <p className="text-slate-400 mt-2 text-lg">
                        {t('sovereign_subtext')}
                    </p>
                </div>
                <div className={`text-inline-end`}>
                    <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1 opacity-60">
                        {t('total_reserve')}
                    </div>
                    <div className="text-3xl font-mono text-white font-black">
                        1,240,500 <span className="text-xs text-emerald-500 uppercase tracking-tighter">tCO2e</span>
                    </div>
                </div>
            </header>

            {/* Quick Stats Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-4 gap-6`}>
                {[
                    { label: t('market_cap'), value: '$3.4B', trend: '+12%', color: 'text-emerald-500' },
                    { label: t('active_projects'), value: '24', trend: i18n[lang]?.['sovereign_only'] || 'Sovereign-Only', color: 'text-blue-500' },
                    { label: t('avg_price'), value: '$28.50', trend: '+1.4%', color: 'text-emerald-500' },
                    { label: t('registry_status'), value: '99.9%', trend: i18n[lang]?.['verified'] || 'Verified', color: 'text-emerald-500' },
                ].map((stat, i) => (
                    <div key={i} className="glass-panel p-6 rounded-2xl hover:border-emerald-500/30 transition-all group">
                        <div className={`text-[10px] text-slate-500 font-black tracking-widest mb-2 uppercase opacity-60`}>{stat.label}</div>
                        <div className={`text-2xl font-black text-white`}>{stat.value}</div>
                        <div className={`text-[10px] mt-2 font-bold uppercase tracking-widest ${stat.color}`}>{stat.trend}</div>
                    </div>
                ))}
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-10`}>
                {/* Main Project Feed */}
                <div className="lg:col-span-2 space-y-6">
                    <div className={`flex justify-between items-center mb-4`}>
                        <h2 className="text-xl font-black text-white uppercase tracking-widest font-arabic-heading">{t('project_registry')}</h2>
                        <button className="text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-emerald-400 transition-colors">
                            {t('view_all')}
                        </button>
                    </div>

                    <div className="space-y-4">
                        {gccProjects.slice(0, 6).map((project, i) => (
                            <div key={i} className={`flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all hover:bg-emerald-500/5 group`}>
                                <div className={`flex items-center space-x-5 rtl:space-x-reverse`}>
                                    <div>
                                        <div className="text-base font-black text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{project.name}</div>
                                        <div className="text-xs text-slate-500 font-medium tracking-tight mt-1">{project.location} • {project.category}</div>
                                    </div>
                                </div>
                                <div className={`text-inline-end`}>
                                    <div className="text-lg font-mono font-black text-white">${project.price.toFixed(2)}</div>
                                    <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{t('per_credit')}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Regional Pulse / Sidebar */}
                <div className="space-y-6">
                    <div className="glass-panel p-8 rounded-3xl border-emerald-500/10">
                        <h2 className={`text-lg font-black text-white mb-6 uppercase tracking-widest font-arabic-heading`}>{t('esg_pulse')}</h2>
                        <div className="space-y-6">
                            {[
                                { label: t('regional_adoption'), value: '84%', color: 'bg-emerald-500' },
                                { label: t('carbon_neutrality'), value: '62%', color: 'bg-blue-500' },
                                { label: t('sovereign_liquidity'), value: '$450M', color: 'bg-indigo-500' }
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className={`flex justify-between text-[10px] font-black uppercase tracking-widest mb-2`}>
                                        <span className="text-slate-500">{item.label}</span>
                                        <span className="text-white">{item.value}</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: i === 0 ? '84%' : i === 1 ? '62%' : '45%' }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={`mt-8 pt-8 border-t border-slate-800`}>
                            <p className="text-[10px] text-slate-500 leading-relaxed uppercase font-black tracking-tighter italic opacity-50">
                                {t('demo_disclaimer')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Inline helper for trend color/label that was hardcoded
const i18n = {
    ar: { 'sovereign_only': 'للسياديين فقط', 'verified': 'تم التحقق' },
    en: { 'sovereign_only': 'Sovereign-Only', 'verified': 'Verified' }
}
