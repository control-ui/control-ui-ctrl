import React from 'react'
import useTheme from '@mui/material/styles/useTheme'
import { useWithConfirm } from '@ui-controls/progress/useWithConfirm'
import { buttonColors, ColorMap } from '@ui-controls/progress/buttonColors'
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import { HasConfirm, WithConfirmProps } from '@ui-controls/progress'
import { ListItemTextProps } from '@mui/material'
import ListItemText from '@mui/material/ListItemText'

export type ListItemButtonConfirmProps =
    HasConfirm &
    Partial<WithConfirmProps> &
    Omit<ListItemButtonProps, 'onClick'> &
    Pick<ListItemTextProps, 'primary' | 'primaryTypographyProps' | 'secondary' | 'secondaryTypographyProps'> &
    {
        resetVal?: any
        onClick: () => void
        colorMap?: ColorMap
        icon: React.ReactNode
    }

export const ListItemButtonConfirm: React.ComponentType<ListItemButtonConfirmProps> = (
    {
        className,
        onClick, children,
        confirmIcon,
        icon,
        confirmText, confirmDuration,
        sx,
        resetVal, disabled,
        colorMap,
        primary, primaryTypographyProps,
        secondary, secondaryTypographyProps,
        ...props
    },
) => {
    const {confirmShow, handleClick, setConfirmShow} = useWithConfirm(resetVal ? [resetVal] : undefined, confirmDuration)
    const theme = useTheme()
    const btnSx = buttonColors(theme, colorMap)

    React.useEffect(() => {
        if(!disabled) return
        setConfirmShow(false)
    }, [disabled, setConfirmShow])

    return <ListItemButton
        {...props}
        className={className}
        disabled={disabled}
        sx={
            confirmShow ? {
                ...sx,
                ...btnSx.buttonConfirm,
            } : sx
        }
        onClick={(e) => {
            e.stopPropagation()
            handleClick(confirmShow, onClick)
        }}
    >
        <ListItemIcon>
            {confirmShow && confirmIcon ? confirmIcon : icon}
        </ListItemIcon>
        <ListItemText
            primary={confirmShow ? confirmText : primary}
            primaryTypographyProps={primaryTypographyProps}
            secondary={confirmShow && secondary ? primary : secondary}
            secondaryTypographyProps={secondaryTypographyProps}
        />
        {children}
    </ListItemButton>
}
