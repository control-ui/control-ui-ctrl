import { xsx } from '@ui-controls/progress/xsx'
import { MouseEvent, ReactNode, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { useWithConfirm } from '@ui-controls/progress/useWithConfirm'
import Tooltip, { TooltipProps } from '@mui/material/Tooltip'
import { buttonColors, ColorMap } from '@ui-controls/progress/buttonColors'

export type IconButtonConfirmProps = {
    confirmIcon?: ReactNode
    confirmDuration?: number
    tooltipConfirm: string | NonNullable<ReactNode>
    tooltip: string | NonNullable<ReactNode>
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
    resetVal?: any
    // when `true` enabled pointer-events on the tooltip
    tooltipInteractive?: boolean
    colorMap?: ColorMap
    TooltipProps?: Omit<TooltipProps, 'title' | 'children'>
} & Omit<IconButtonProps, 'onClick'>

export const IconButtonConfirm = (
    {
        onClick,
        tooltip, tooltipConfirm,
        confirmIcon, confirmDuration,
        sx,
        children,
        resetVal, disabled,
        tooltipInteractive = false,
        colorMap,
        TooltipProps,
        ...props
    }: IconButtonConfirmProps,
) => {
    const {confirmShow, handleClick, setConfirmShow} = useWithConfirm<HTMLButtonElement>(resetVal, confirmDuration)
    const theme = useTheme()
    const btnSx = buttonColors(theme, colorMap)

    useEffect(() => {
        if(!disabled) return
        setConfirmShow(false)
    }, [disabled, setConfirmShow])

    const title: string | NonNullable<ReactNode> = (confirmShow ? tooltipConfirm : tooltip) as string | NonNullable<ReactNode>

    return <Tooltip
        title={typeof title === 'undefined' ? '' : title}
        disableInteractive={!tooltipInteractive}
        {...TooltipProps || {}}
    >
        <IconButton
            {...props}
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
            {confirmShow && confirmIcon ? confirmIcon : children}
        </IconButton>
    </Tooltip>
}
