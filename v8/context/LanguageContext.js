'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import ar from '../data/translations/ar.json'
import en from '../data/translations/en.json'

const translations = { ar, en }
const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
    // UN-01: Default to Arabic ('ar') for GCC first-class experience
    const [lang, setLang] = useState('ar')
    const [dir, setDir] = useState('rtl')

    useEffect(() => {
        const savedLang = localStorage.getItem('gcc_carbon_lang') || 'ar'
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

    const t = (key) => translations[lang]?.[key] || key

    return (
        <LanguageContext.Provider value={{ lang, dir, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)
export default LanguageProvider
