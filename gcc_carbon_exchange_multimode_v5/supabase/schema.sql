-- GCC SOVEREIGN CARBON REGISTRY SCHEMA
-- Purpose: Institutional-grade tracking for National Vision alignment

-- 1. Regional Projects (National Assets)
CREATE TABLE sovereign_projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_code TEXT UNIQUE NOT NULL, -- e.g., SA-001
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    country_code TEXT NOT NULL, -- KSA, UAE, QAT, etc.
    vision_alignment TEXT, -- Vision 2030, Net Zero 2050
    category TEXT NOT NULL, -- Renewable, CCUS, Blue Carbon
    price_per_credit DECIMAL(10, 2) NOT NULL,
    available_credits BIGINT NOT NULL,
    shariah_status TEXT DEFAULT 'Pending Review',
    government_approved BOOLEAN DEFAULT FALSE,
    national_investment_value TEXT,
    local_jobs_impact INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Institutional Transactions (Ministerial Audit Trail)
CREATE TABLE sovereign_transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tx_hash TEXT UNIQUE NOT NULL,
    project_id UUID REFERENCES sovereign_projects(id),
    buyer_entity_name TEXT NOT NULL, -- e.g., Saudi Aramco
    seller_entity_name TEXT NOT NULL, -- e.g., Ministry of Energy
    credit_amount BIGINT NOT NULL,
    total_value DECIMAL(15, 2) NOT NULL,
    tx_status TEXT DEFAULT 'Settled',
    shariah_verification_id TEXT,
    blockchain_id TEXT DEFAULT 'GCC-Sovereign-Mainnet',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. National Impact Metrics (Aggregated Real-time)
CREATE TABLE national_impact (
    country_code TEXT PRIMARY KEY,
    total_co2_offset_tons BIGINT DEFAULT 0,
    active_project_count INTEGER DEFAULT 0,
    total_national_jobs_created INTEGER DEFAULT 0,
    vision_progress_percentage DECIMAL(5, 2) DEFAULT 0,
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security) for Sovereign Nodes
ALTER TABLE sovereign_projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Sovereign Read Access" ON sovereign_projects FOR SELECT USING (TRUE);
