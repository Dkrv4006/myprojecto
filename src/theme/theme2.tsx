import { createContext, useMemo , useState } from 'react'
import { createTheme, ThemeOptions } from '@mui/material/styles'
import React from 'react'
import { dark } from '@mui/material/styles/createPalette'


export const colos = (mode: 'light' | 'dark') => ({
    ...(mode === 'dark'
    ? {
        black: {
          100: "#cdced6",
          200: "#9b9dac",
          300: "#696c83",
          400: "#373b59",
          500: "#050a30",
          600: "#040826",
          700: "#03061d",
          800: "#020413",
          900: "#01020a"
        },
        blue: {
          100: "#cccee0",
          200: "#999ec2",
          300: "#666da3",
          400: "#333d85",
          500: "#000c66",
          600: "#000a52",
          700: "#00073d",
          800: "#000529",
          900: "#000214"

        },
        lightblue: {
          100: "#ccccff",
          200: "#9999ff",
          300: "#6666ff",
          400: "#3333ff",
          500: "#0000ff",
          600: "#0000cc",
          700: "#000099",
          800: "#000066",
          900: "#000033"
        },


    } : {
        while: {
            100: "#cdced6",
            200: "#9b9dac",
            300: "#696c83",
            400: "#373b59",
            500: "#050a30",
            600: "#040826",
            700: "#03061d",
            800: "#020413",
            900: "#01020a"
          },
          blue: {
            100: "#cccee0",
            200: "#999ec2",
            300: "#666da3",
            400: "#333d85",
            500: "#000c66",
            600: "#000a52",
            700: "#00073d",
            800: "#000529",
            900: "#000214"
  
          },
          lightblue: {
            100: "#ccccff",
            200: "#9999ff",
            300: "#6666ff",
            400: "#3333ff",
            500: "#0000ff",
            600: "#0000cc",
            700: "#000099",
            800: "#000066",
            900: "#000033"
          },
  
          gray: {
            100: "#e5f4f9",
            200: "#cbe9f4",
            300: "#b2deee",
            400: "#98d3e9",
            500: "#7ec8e3",
            600: "#65a0b6",
            700: "#4c7888",
            800: "#32505b",
            900: "#19282d"
          },
    }),
})

export const themeDefault = (mode: 'light' | 'dark') => {
    const colors = colos(mode)

    return {
      patltte: {
        mode:mode,
        ...(mode === 'dark'
        ? {
          primary:{
            main: colors.blue[500],
          },
          secondary:{
            main: colors.blue[500]
            
          },
          neutral:{
            dark: colors.lightblue[700],
            main: colors.lightblue[500],
            light: colors.lightblue[100],
          }
        } : {
          primary:{
            main: colors.lightblue[100],
          },
          secondary:{
            main: colors.blue[500]
          },
          neutral:{
            dark: colors.lightblue[700],
            main: colors.lightblue[500],
            light: colors.lightblue[100],
          }
        }
        
        )
      },
    } as ThemeOptions
}

export const ColoModeContext = createContext({toggleColorMode: () => {}})

export const useMode = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light')

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => 
      setMode((prevmode) => (prevmode === 'light' ? 'dark' : 'light')),
    }),[]
  )

  const theme = useMemo(() => createTheme(themeDefault(mode)), [mode])

  return [theme, colorMode]
}
        