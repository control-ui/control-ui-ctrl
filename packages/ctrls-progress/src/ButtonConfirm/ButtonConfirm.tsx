import { MouseEvent, ReactNode, useEffect } from 'react'
import Button, { ButtonProps } from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import { useWithConfirm } from '@ui-controls/progress/useWithConfirm'
import { buttonColors, ColorMap } from '@ui-controls/progress/buttonColors'

export interface WithConfirmProps {
    confirmIcon: ReactNode
    confirmText: ReactNode | string
    // todo: add optional dialog view instead of button label switch
    // confirmDialog?: boolean
    confirmDuration?: number
    resetDelay?: number
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
        onClick: (e: MouseEvent<HTMLButtonElement>) => void
        colorMap?: ColorMap
    }

export const ButtonConfirm = (
    {
        className, classNameWrapper,
        style,
        onClick, children,
        confirmIcon,
        endIcon,
        confirmText, confirmDuration,
        sx,
        resetVal, disabled,
        colorMap,
        ...props
    }: ButtonConfirmProps,
) => {
    const {confirmShow, handleClick, setConfirmShow} = useWithConfirm<HTMLButtonElement>(resetVal, confirmDuration)
    const theme = useTheme()
    const btnSx = buttonColors(theme, colorMap)

    useEffect(() => {
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
                handleClick(confirmShow, onClick, e)
            }}
            endIcon={confirmShow && confirmIcon ? confirmIcon : endIcon}
        >
            {confirmShow && confirmText ? confirmText : children}
        </Button>
    </div>
}
