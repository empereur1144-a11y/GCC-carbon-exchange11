'use client'
import { useLanguage } from '../hooks/useLanguage'

export default function Dashboard() {
    const { t, lang } = useLanguage()
    const isAr = lang === 'ar'

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Section */}
            <div>
                <span className="label-subtle">{isAr ? "نظرة عامة سيادية" : "SOVEREIGN OVERVIEW"}</span>
                <h1 className="h1-sovereign mt-2">{isAr ? "سوق الكربون الخليجي" : "GCC Carbon Exchange"}</h1>
            </div>

            {/* Strategic KPIs (Strict Limit of 4) */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard
                    label={isAr ? "الاحتياطي السيادي" : "Sovereign Reserve"}
                    value="12.4M tCO2e"
                    trend="+2.4%"
                />
                <StatCard
                    label={isAr ? "القيمة السوقية" : "Market Valuation"}
                    value="$403.5M"
                    trend="+1.2%"
                />
                <StatCard
                    label={isAr ? "متوسط السعر" : "Avg Market Price"}
                    value="$32.50"
                    trend="Stable"
                />
                <StatCard
                    label={isAr ? "كثافة الكربون" : "National Intensity"}
                    value="0.42"
                    trend="-5.0%"
                />
            </div>

            {/* Project Registry - Institutional Table Style */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-white">{isAr ? "سجل المشاريع الإقليمية" : "Regional Project Registry"}</h2>
                    <button className="text-xs font-bold text-emerald-500 hover:text-emerald-400 uppercase tracking-widest">
                        {isAr ? "عرض الكل" : "View Full Registry"}
                    </button>
                </div>

                <div className="bg-slate-900/50 border border-white/5 rounded-xl overflow-hidden">
                    <div className="grid grid-cols-5 registry-header">
                        <div>{isAr ? "المشروع" : "Project"}</div>
                        <div>{isAr ? "الموقع" : "Location"}</div>
                        <div>{isAr ? "المنهجية" : "Methodology"}</div>
                        <div>{isAr ? "السعر" : "Price"}</div>
                        <div className="text-right">{isAr ? "الحالة" : "Status"}</div>
                    </div>

                    <ProjectRow
                        name="NEOM Reforestation v2025"
                        loc="Tabuk, KSA"
                        meth="VCS-REDD+"
                        price="$32.50"
                        status="Sovereign Verified"
                        isAr={isAr}
                    />
                    <ProjectRow
                        name="MBR Solar Park Credits"
                        loc="Dubai, UAE"
                        meth="Gold Standard"
                        price="$28.00"
                        status="Sovereign Verified"
                        isAr={isAr}
                    />
                    <ProjectRow
                        name="Oman Blue Carbon Pilot"
                        loc="Muscat, OM"
                        meth="BlueCarbon v1"
                        price="$45.00"
                        status="Regulator Approved"
                        isAr={isAr}
                    />
                </div>
            </div>

            {/* ESG Pulse - Simplified Drill-down */}
            <div className="sovereign-card">
                <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <span className="text-emerald-500">◈</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold">{isAr ? "نبض الاستدامة الإقليمي" : "Regional ESG Pulse"}</h3>
                        <p className="text-xs text-slate-500">{isAr ? "مواءمة الاستثمارات مع الأهداف الوطنية" : "Alignment of capital with national neutrality goals"}</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <PulseIndicator label={isAr ? "التبني الإقليمي" : "Regional Adoption"} value="84%" />
                    <PulseIndicator label={isAr ? "الامتثال التنظيمي" : "Regulatory Compliance"} value="98%" />
                    <PulseIndicator label={isAr ? "الشفافية في التقارير" : "Reporting Transparency"} value="High" />
                </div>
            </div>
        </div>
    )
}

function StatCard({ label, value, trend }) {
    return (
        <div className="sovereign-card">
            <span className="label-subtle block mb-3">{label}</span>
            <div className="flex items-baseline justify-between">
                <span className="stat-value">{value}</span>
                <span className={`text-[10px] font-bold ${trend.startsWith('+') ? 'text-emerald-500' : trend === 'Stable' ? 'text-slate-500' : 'text-blue-400'}`}>
                    {trend}
                </span>
            </div>
        </div>
    )
}

function ProjectRow({ name, loc, meth, price, status, isAr }) {
    return (
        <div className="grid grid-cols-5 registry-row text-sm">
            <div className="font-bold text-white">{name}</div>
            <div className="text-slate-400">{loc}</div>
            <div className="font-mono text-[10px] text-slate-500">{meth}</div>
            <div className="text-emerald-400 font-bold">{price}</div>
            <div className="text-right">
                <span className="status-badge status-verified">{status}</span>
            </div>
        </div>
    )
}

function PulseIndicator({ label, value }) {
    return (
        <div className="space-y-1">
            <span className="text-xs text-slate-500">{label}</span>
            <div className="text-lg font-bold text-white">{value}</div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-3/4"></div>
            </div>
        </div>
    )
}
