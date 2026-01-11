'use client'

import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

export default function UserRolesPage() {
    const { t, lang } = useLanguage()
    const isAr = lang === 'ar'

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.4)]"></span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold">
                            {isAr ? 'إدارة الوصول' : 'ACCESS CONTROL'}
                        </span>
                    </div>
                    <h1 className={`text-3xl md:text-5xl font-black text-white tracking-tight ${isAr ? 'font-arabic-heading' : ''}`}>
                        {isAr ? 'أدوار المستخدمين' : 'User Roles & Permissions'}
                    </h1>
                </div>
            </div>

            {/* Matrix Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Role 1: Sovereign */}
                <RoleCard
                    title={isAr ? 'السلطة السيادية' : 'Sovereign Authority'}
                    subtitle={isAr ? 'المنظم (SCCS)' : 'The Regulator (SCCS)'}
                    description={isAr
                        ? 'الكيان المسؤول عن استقرار السوق والموائمة مع الأهداف الوطنية. يمتلك حق النقض (الفيتو) على المعاملات ولكنه ممنوع من المضاربة.'
                        : 'Oversees market stability and national alignment. Retains veto power over transactions but is strictly prohibited from speculation.'}
                    permissions={[
                        { label: isAr ? 'سلطة الفيتو' : 'Veto Power', allowed: true },
                        { label: isAr ? 'تراخيص' : 'Licensing', allowed: true },
                        { label: isAr ? 'المضاربة' : 'Speculation', allowed: false, warning: true },
                    ]}
                    isAr={isAr}
                    color="amber"
                />

                {/* Role 2: Developer */}
                <RoleCard
                    title={isAr ? 'مطور المشروع' : 'Project Developer'}
                    subtitle={isAr ? 'المصدر (جهة ائتمان)' : 'Credit Issuer'}
                    description={isAr
                        ? 'الكيانات التي تقوم بإنشاء مشاريع خفض الانبعاثات. يمكنهم طلب إصدار الأرصدة وبيعها، ولكن لا يمكنهم التحقق من مشاريعهم الخاصة.'
                        : 'Entities originating emission reduction projects. Can request issuance and sell credits, but cannot act as verifiers for their own projects.'}
                    permissions={[
                        { label: isAr ? 'إرسال المشاريع' : 'Submit Projects', allowed: true },
                        { label: isAr ? 'بيع الأرصدة' : 'Sell Credits', allowed: true },
                        { label: isAr ? 'التحقق الذاتي' : 'Self-Verification', allowed: false, warning: true },
                    ]}
                    isAr={isAr}
                    color="emerald"
                />

                {/* Role 3: Buyer */}
                <RoleCard
                    title={isAr ? 'المشتري المؤسسي' : 'Institutional Buyer'}
                    subtitle={isAr ? 'الطلب (مؤسسات مؤهلة)' : 'Demand Side (Qualified)'}
                    description={isAr
                        ? 'البنوك والشركات متعددة الجنسيات وصناديق الثروة. يسمح لهم بالشراء والتقاعد (الاستهلاك)، ويحظر عليهم إعادة البيع للأفراد (التجزئة).'
                        : 'Banks, MNCs, and Sovereign Funds. Permitted to trade and retire credits. Strictly prohibited from repackaging credits for retail resale.'}
                    permissions={[
                        { label: isAr ? 'تداول (شراء)' : 'Trade (Buy)', allowed: true },
                        { label: isAr ? 'التقاعد (الاستهلاك)' : 'Retire Credits', allowed: true },
                        { label: isAr ? 'بيع بالتجزئة' : 'Retail Resale', allowed: false, warning: true },
                    ]}
                    isAr={isAr}
                    color="blue"
                />

                {/* Role 4: Verifier */}
                <RoleCard
                    title={isAr ? 'المدقق المستقل' : 'Independent Verifier'}
                    subtitle={isAr ? 'الطرف الثالث (ISO 14065)' : 'Third Party (ISO 14065)'}
                    description={isAr
                        ? 'شركات تدقيق معتمدة للتحقق من صحة البيانات. يمنع عليهم تداول الأرصدة أو التحقق من مشاريع عملوا فيها كمستشارين.'
                        : 'Accredited firms validating emission data. Strictly prohibited from trading credits or verifying projects where they consulted.'}
                    permissions={[
                        { label: isAr ? 'التحقق من البيانات' : 'Verify Data', allowed: true },
                        { label: isAr ? 'إصدار الشهادات' : 'Certify Issuance', allowed: true },
                        { label: isAr ? 'تداول الأرصدة' : 'Trade Credits', allowed: false, warning: true },
                    ]}
                    isAr={isAr}
                    color="purple"
                />

            </div>
        </div>
    )
}

function RoleCard({ title, subtitle, description, permissions, isAr, color }) {
    const colorClasses = {
        amber: 'border-amber-500/20 bg-amber-500/5',
        emerald: 'border-emerald-500/20 bg-emerald-500/5',
        blue: 'border-blue-500/20 bg-blue-500/5',
        purple: 'border-purple-500/20 bg-purple-500/5',
    }

    return (
        <div className={`backdrop-blur-xl border p-6 rounded-2xl flex flex-col h-full ${colorClasses[color]} hover:bg-opacity-10 transition-colors`}>
            <div className={`text-xs font-black uppercase tracking-widest opacity-50 mb-1 ${isAr ? 'font-arabic-body' : ''}`}>{subtitle}</div>
            <h3 className={`text-2xl font-bold text-white mb-4 ${isAr ? 'font-arabic-heading' : ''}`}>{title}</h3>
            <p className={`text-slate-400 text-sm leading-relaxed mb-6 flex-1 ${isAr ? 'font-arabic-body' : ''}`}>{description}</p>

            <div className="space-y-3 bg-slate-950/30 p-4 rounded-xl border border-white/5">
                {permissions.map((perm, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                        <span className={`text-xs text-slate-400 font-bold ${isAr ? 'font-arabic-body' : ''}`}>{perm.label}</span>
                        {perm.allowed ? (
                            <span className={`text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded uppercase font-black tracking-wider flex items-center gap-1 ${isAr ? 'font-arabic-body' : ''}`}>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                {isAr ? 'مسموح' : 'ALLOWED'}
                            </span>
                        ) : (
                            <span className={`text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded uppercase font-black tracking-wider flex items-center gap-1 ${isAr ? 'font-arabic-body' : ''}`}>
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                                {isAr ? 'محظور' : 'RESTRICTED'}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
