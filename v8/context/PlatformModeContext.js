'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

const PlatformModeContext = createContext()

export const PlatformModeProvider = ({ children }) => {
    // UN-MODE-01: Default to 'sovereign' as per requirement
    const [mode, setMode] = useState('sovereign')

    useEffect(() => {
        const savedMode = localStorage.getItem('gcc_platform_mode') || 'sovereign'
        setMode(savedMode)
    }, [])

    const updateMode = (newMode) => {
        setMode(newMode)
        localStorage.setItem('gcc_platform_mode', newMode)
    }

    return (
        <PlatformModeContext.Provider value={{ mode, setMode: updateMode }}>
            {children}
        </PlatformModeContext.Provider>
    )
}

export const usePlatformMode = () => useContext(PlatformModeContext)
export default PlatformModeProvider
