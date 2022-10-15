import React from 'react'
import useTheme from '@mui/material/styles/useTheme'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { useWithConfirm } from '@ui-controls/progress/useWithConfirm'
import Tooltip from '@mui/material/Tooltip'
import { buttonColors } from '@ui-controls/progress/buttonColors'

export type IconButtonConfirmProps = {
    confirmIcon?: React.ReactNode
    confirmDuration?: number
    tooltipConfirm: string | NonNullable<React.ReactNode>
    tooltip: string | NonNullable<React.ReactNode>
    onClick: () => void
    resetVal?: any
} & Omit<IconButtonProps, 'onClick'>

export const IconButtonConfirm: React.ComponentType<IconButtonConfirmProps> = (
    {
        onClick,
        tooltip, tooltipConfirm,
        confirmIcon, confirmDuration,
        sx,
        children,
        resetVal, disabled,
        ...props
    },
) => {
    const {confirmShow, handleClick, setConfirmShow} = useWithConfirm(resetVal ? [resetVal] : undefined, confirmDuration)
    const theme = useTheme()
    const btnSx = buttonColors(theme)

    React.useEffect(() => {
        if(!disabled) return
        setConfirmShow(false)
    }, [disabled, setConfirmShow])

    const title: string | NonNullable<React.ReactNode> = (confirmShow ? tooltipConfirm : tooltip) as string | NonNullable<React.ReactNode>
    return <Tooltip title={typeof title === 'undefined' ? '' : title}>
        <IconButton
            {...props}
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
            {confirmShow && confirmIcon ? confirmIcon : children}
        </IconButton>
    </Tooltip>
}
