import { xsx } from '@ui-controls/progress/xsx'
import { MouseEvent, ReactNode, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import { useWithConfirm } from '@ui-controls/progress/useWithConfirm'
import { buttonColors, ColorMap } from '@ui-controls/progress/buttonColors'
import ListItemButton, { ListItemButtonProps } from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import { HasConfirm, WithConfirmProps } from '@ui-controls/progress/ButtonConfirm'
import ListItemText, { ListItemTextProps } from '@mui/material/ListItemText'

export type ListItemButtonConfirmProps =
    HasConfirm &
    Partial<WithConfirmProps> &
    Omit<ListItemButtonProps, 'onClick'> &
    Pick<ListItemTextProps, 'primary' | 'primaryTypographyProps' | 'secondary' | 'secondaryTypographyProps'> &
    {
        resetVal?: any
        onClick: (e: MouseEvent<HTMLDivElement>) => void
        colorMap?: ColorMap
        icon: ReactNode
    }

export const ListItemButtonConfirm = (
    {
        className,
        onClick, children,
        confirmIcon,
        icon,
        confirmText, confirmDuration,
        sx,
        resetVal, disabled,
        colorMap,
        primary, secondary,
        // eslint-disable-next-line deprecation/deprecation
        primaryTypographyProps, secondaryTypographyProps,
        ...props
    }: ListItemButtonConfirmProps,
) => {
    const {confirmShow, handleClick, setConfirmShow} = useWithConfirm<HTMLDivElement>(resetVal, confirmDuration)
    const theme = useTheme()
    const btnSx = buttonColors(theme, colorMap)

    useEffect(() => {
        if(!disabled) return
        setConfirmShow(false)
    }, [disabled, setConfirmShow])

    return <ListItemButton
        {...props}
        className={className}
        disabled={disabled}
        sx={
            confirmShow ? xsx(
                sx,
                btnSx.buttonConfirm,
            ) : sx
        }
        onClick={(e) => {
            e.stopPropagation()
            handleClick(confirmShow, onClick, e)
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
