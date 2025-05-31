import type { Theme } from '@mui/material/styles'

export type ColorMap = (theme: Theme) => {
    success: string
    error: string
    confirm: string
}

export const colorMapDefault: ColorMap = (theme: Theme) => ({
    success: theme.palette.mode === 'dark' ? theme.palette.success.dark : theme.palette.success.light,
    error: theme.palette.mode === 'dark' ? theme.palette.error.dark : theme.palette.error.light,
    confirm: theme.palette.mode === 'dark' ? theme.palette.warning.dark : theme.palette.warning.light,
})

const colorCache: Map<string, string> = new Map()

const cachedColor = (
    color: string,
    getContrastText: (color: string) => string,
): string => {
    if(!colorCache.has(color)) {
        colorCache.set(color, getContrastText(color))
    }
    return colorCache.get(color)!
}

export const buttonColors = (theme: Theme, colorMap: ColorMap = colorMapDefault) => {
    const colors = colorMap(theme)
    return {
        buttonSuccess: {
            backgroundColor: colors.success,
            color: cachedColor(colors.success, theme.palette.getContrastText),
            '&:hover': {
                backgroundColor: colors.success,
                color: cachedColor(colors.success, theme.palette.getContrastText),
            },
        },
        buttonError: {
            backgroundColor: colors.error,
            color: cachedColor(colors.error, theme.palette.getContrastText),
            '&:hover': {
                backgroundColor: colors.error,
                color: cachedColor(colors.error, theme.palette.getContrastText),
            },
        },
        buttonConfirm: {
            backgroundColor: colors.confirm,
            color: cachedColor(colors.confirm, theme.palette.getContrastText),
            '&:hover': {
                backgroundColor: colors.confirm,
                color: cachedColor(colors.confirm, theme.palette.getContrastText),
            },
        },
    }
}
