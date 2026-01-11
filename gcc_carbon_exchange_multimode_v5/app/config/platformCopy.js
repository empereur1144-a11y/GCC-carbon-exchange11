// UN-MODE-02: Centralized copy registry for all platform modes
// Integrated with Translation Keys where possible

export const copyByMode = {
    sovereign: {
        id: 'sovereign',
        label: 'Sovereign Pilot Prototype',
        sublabel: 'Government & Regulator View',
        overviewTitle: 'dashboard', // Translation key
        portfoliosTitle: 'portfolios',
        tradingTitle: 'trading',
        clearingProtocol: 'Sovereign Clearing Protocol',
        institutionStatus: 'verified_institution',
    },
    institutional: {
        id: 'institutional',
        label: 'Institutional Exchange',
        sublabel: 'Banks & Corporate Access',
        overviewTitle: 'institutional_overview',
        portfoliosTitle: 'institutional_portfolios',
        tradingTitle: 'institutional_trading',
        clearingProtocol: 'Regulated Clearing Protocol',
        institutionStatus: 'verified_participant',
    },
    demo: {
        id: 'demo',
        label: 'Demonstration Environment',
        sublabel: 'Non-Production / Presentation',
        overviewTitle: 'platform_overview_demo',
        portfoliosTitle: 'portfolios_demo',
        tradingTitle: 'trading_demo',
        clearingProtocol: 'Simulated Clearing',
        institutionStatus: 'demo_participant',
    }
}

export const getModeLabel = (mode, key, t) => {
    const config = copyByMode[mode] || copyByMode.sovereign
    const labelKey = config[key]
    return t(labelKey) || labelKey
}
