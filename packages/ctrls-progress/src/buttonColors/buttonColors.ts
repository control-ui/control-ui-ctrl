import { Theme } from '@mui/material/styles'

export const buttonColors = (theme: Theme) => ({
    buttonSuccess: {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.success.dark : theme.palette.success.light,
        color: theme.palette.getContrastText(theme.palette.mode === 'dark' ? theme.palette.success.dark : theme.palette.success.light),
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.success.dark : theme.palette.success.light,
            color: theme.palette.getContrastText(theme.palette.mode === 'dark' ? theme.palette.success.dark : theme.palette.success.light),
        },
    },
    buttonError: {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.error.dark : theme.palette.error.light,
        color: theme.palette.getContrastText(theme.palette.mode === 'dark' ? theme.palette.error.dark : theme.palette.error.light),
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.error.dark : theme.palette.error.light,
            color: theme.palette.getContrastText(theme.palette.mode === 'dark' ? theme.palette.error.dark : theme.palette.error.light),
        },
    },
    buttonConfirm: {
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.warning.dark : theme.palette.warning.light,
        color: theme.palette.getContrastText(theme.palette.mode === 'dark' ? theme.palette.warning.dark : theme.palette.warning.light),
        '&:hover': {
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.warning.dark : theme.palette.warning.light,
            color: theme.palette.getContrastText(theme.palette.mode === 'dark' ? theme.palette.warning.dark : theme.palette.warning.light),
        },
    },
})
