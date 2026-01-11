'use client'

import React from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function GovernancePage() {
    const { t, lang } = useLanguage()
    const isAr = lang === 'ar'

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></span>
                        <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-500 font-bold">
                            {isAr ? 'الإطار التنظيمي' : 'REGULATORY FRAMEWORK'}
                        </span>
                    </div>
                    <h1 className={`text-3xl md:text-5xl font-black text-white tracking-tight ${isAr ? 'font-arabic-heading' : ''}`}>
                        {isAr ? 'حوكمة السوق' : 'Market Governance'}
                    </h1>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-md border border-white/5 rounded-2xl p-4 flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="text-right rtl:text-left">
                        <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{isAr ? 'النسخة' : 'VERSION'}</div>
                        <div className="text-xl font-mono text-emerald-400">1.0</div>
                    </div>
                    <div className="w-px h-8 bg-white/10"></div>
                    <div className="text-right rtl:text-left">
                        <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{isAr ? 'الحالة' : 'STATUS'}</div>
                        <div className="text-sm font-bold text-white uppercase">{isAr ? 'نشط' : 'ACTIVE'}</div>
                    </div>
                </div>
            </div>

            {/* Introduction Card */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/10 transition-all duration-700"></div>
                <div className="relative z-10">
                    <h3 className={`text-xl font-bold text-white mb-4 ${isAr ? 'font-arabic-heading' : ''}`}>
                        {isAr ? 'سلطة السوق السيادية' : 'Sovereign Market Authority'}
                    </h3>
                    <p className={`text-slate-400 leading-relaxed max-w-3xl ${isAr ? 'font-arabic-body' : ''}`}>
                        {isAr
                            ? 'تخضع المنصة لإشراف المجلس الأعلى للمناخ والاستدامة. تضمن هذه الهيكلية توافق جميع الأنشطة مع الأهداف الوطنية للحياد الكربوني ومعايير اتفاقية باريس المادة 6.'
                            : 'The platform operates under the direct oversight of the Supreme Council for Climate & Sustainability. This governance structure ensures all market activities align with national Net Zero targets and Paris Agreement Article 6 standards.'}
                    </p>
                </div>
            </div>

            {/* Rulebook Sections */}
            <div className="grid grid-cols-1 gap-6">

                {/* Section 1 */}
                <GovernanceSection
                    number="01"
                    title={isAr ? 'المشاركون والأهلية' : 'Participant Eligibility'}
                    content={isAr
                        ? 'يقتصر الوصول المباشر للسوق على الكيانات المؤسسية المسجلة. تخضع جميع الجهات لإجراءات العناية الواجبة المعززة (EDD) لمنع المضاربة وضمان نزاهة السوق.'
                        : 'Direct market access is restricted to registered institutional entities. All participants undergo Enhanced Due Diligence (EDD) to prevent speculation and ensure market integrity.'}
                    items={[
                        { label: isAr ? 'المصدرون' : 'Issuers', value: isAr ? 'الشركات المسجلة في السجل الوطني' : 'National Registry Registered Entities' },
                        { label: isAr ? 'المدققون' : 'Verifiers', value: isAr ? 'معتمدون بمعيار ISO 14065' : 'ISO 14065 Accredited' },
                        { label: isAr ? 'المشترون' : 'Buyers', value: isAr ? 'مؤسسات مؤهلة فقط (B2B)' : 'Qualified Institutions Only (B2B)' }
                    ]}
                    isAr={isAr}
                />

                {/* Section 2 */}
                <GovernanceSection
                    number="02"
                    title={isAr ? 'نزاهة الأصول' : 'Asset Integrity'}
                    content={isAr
                        ? 'يتم ترميز كل رصيد كربوني بمعرف عالمي فريد (GUID) لضمان عدم الازدواجية. تلتزم المنصة بمبدأ "طن واحد = رصيد واحد" مع تتبع كامل لدورة حياة الأصل.'
                        : 'Every carbon credit is tokenized with a Global Unique Identifier (GUID) to ensure no double-counting. The platform adheres to the "One Tonne = One Credit" principle with full lifecycle traceability.'}
                    items={[
                        { label: isAr ? 'التسلسل' : 'Serialization', value: isAr ? 'معرف فريد (GUID)' : 'Unique GUID per Tonne' },
                        { label: isAr ? 'الصلاحية' : 'Validity', value: isAr ? 'تحقق طرف ثالث' : 'Third-Party Verified' },
                    ]}
                    isAr={isAr}
                />

                {/* Section 3 */}
                <GovernanceSection
                    number="03"
                    title={isAr ? 'سلوك السوق' : 'Market Conduct'}
                    content={isAr
                        ? 'يحظر التداول العالي التردد (HFT) والبيع على المكشوف للحفاظ على استقرار الأسعار. تتم مراقبة جميع التعاملات للكشف عن الغسيل الأخضر أو التلاعب بالسوق.'
                        : 'High-Frequency Trading (HFT) and naked short selling are prohibited to maintain price stability. All transactions are monitored for greenwashing or market manipulation.'}
                    items={[
                        { label: isAr ? 'التسوية' : 'Settlement', value: 'T+0 (Immediate)' },
                        { label: isAr ? 'الشفافية' : 'Transparency', value: isAr ? 'ابلاغ فوري للمنظم' : 'Real-time Regulatory Reporting' },
                    ]}
                    isAr={isAr}
                />

            </div>
        </div>
    )
}

function GovernanceSection({ number, title, content, items, isAr }) {
    return (
        <div className="bg-slate-900/30 border border-white/5 p-6 rounded-2xl hover:bg-slate-900/50 transition-colors">
            <div className="flex items-start gap-4">
                <div className="text-4xl font-black text-white/5 font-mono">{number}</div>
                <div className="flex-1">
                    <h4 className={`text-xl font-bold text-slate-200 mb-2 ${isAr ? 'font-arabic-heading' : ''}`}>{title}</h4>
                    <p className={`text-slate-400 text-sm leading-relaxed mb-6 ${isAr ? 'font-arabic-body' : ''}`}>{content}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {items.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-slate-950/50 px-4 py-3 rounded-lg border border-white/5">
                                <span className={`text-xs text-slate-500 uppercase font-black tracking-wider ${isAr ? 'font-arabic-body' : ''}`}>{item.label}</span>
                                <span className={`text-xs text-emerald-400 font-bold ${isAr ? 'font-arabic-body' : ''}`}>{item.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
