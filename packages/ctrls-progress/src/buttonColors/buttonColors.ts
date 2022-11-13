import { Theme } from '@mui/material/styles'

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

export const buttonColors = (theme: Theme, colorMap: ColorMap = colorMapDefault) => {
    const colors = colorMap(theme)
    return {
        buttonSuccess: {
            backgroundColor: colors.success,
            color: theme.palette.getContrastText(colors.success),
            '&:hover': {
                backgroundColor: colors.success,
                color: theme.palette.getContrastText(colors.success),
            },
        },
        buttonError: {
            backgroundColor: colors.error,
            color: theme.palette.getContrastText(colors.error),
            '&:hover': {
                backgroundColor: colors.error,
                color: theme.palette.getContrastText(colors.error),
            },
        },
        buttonConfirm: {
            backgroundColor: colors.confirm,
            color: theme.palette.getContrastText(colors.confirm),
            '&:hover': {
                backgroundColor: colors.confirm,
                color: theme.palette.getContrastText(colors.confirm),
            },
        },
    }
}
