import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const useTheme = () => {
    const contex = useContext(ThemeContext)

    if (contex === undefined) {
        throw new Error ("useTheme() must be used inside ThemeProvider")
    }

    return contex
}