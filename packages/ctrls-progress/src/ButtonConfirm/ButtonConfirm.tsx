import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'
import useTheme from '@mui/material/styles/useTheme'
import { useWithConfirm } from '@ui-controls/progress/useWithConfirm'
import { buttonColors } from '@ui-controls/progress/buttonColors'

export interface WithConfirmProps {
    confirmIcon: React.ReactNode
    confirmText: React.ReactNode | string
    confirmDuration?: number
}

export type HasConfirm =
    Pick<WithConfirmProps, 'confirmIcon'> |
    Pick<WithConfirmProps, 'confirmText'>

export type ButtonConfirmProps =
    HasConfirm &
    Partial<WithConfirmProps> &
    Omit<ButtonProps, 'onClick'> &
    {
        classNameWrapper?: string
        resetVal?: any
        onClick: () => void
    }

export const ButtonConfirm: React.ComponentType<ButtonConfirmProps> = (
    {
        className, classNameWrapper,
        style,
        onClick, children,
        confirmIcon,
        endIcon,
        confirmText, confirmDuration,
        sx,
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

    return <div className={classNameWrapper} style={style}>
        <Button
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
            endIcon={confirmShow && confirmIcon ? confirmIcon : endIcon}
        >
            {confirmShow && confirmText ? confirmText : children}
        </Button>
    </div>
}
