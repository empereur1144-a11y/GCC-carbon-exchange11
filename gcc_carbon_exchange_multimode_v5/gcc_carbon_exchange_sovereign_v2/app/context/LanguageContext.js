'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import i18n from '../data/i18n.json'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('en')
    const [dir, setDir] = useState('ltr')

    useEffect(() => {
        const savedLang = localStorage.getItem('gcc_carbon_lang') || 'en'
        syncLanguage(savedLang)
    }, [])

    const syncLanguage = (newLang) => {
        setLang(newLang)
        const newDir = newLang === 'ar' ? 'rtl' : 'ltr'
        setDir(newDir)
        document.documentElement.lang = newLang
        document.documentElement.dir = newDir
        localStorage.setItem('gcc_carbon_lang', newLang)
    }

    const toggleLanguage = (newLang) => {
        syncLanguage(newLang)
    }

    const t = (key) => i18n[lang]?.[key] || key

    return (
        <LanguageContext.Provider value={{ lang, dir, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)
