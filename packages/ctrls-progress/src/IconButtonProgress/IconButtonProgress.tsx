import { CSSProperties, MouseEvent, ReactNode } from 'react'
import Tooltip, { TooltipProps } from '@mui/material/Tooltip'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { ProgressStateValues, ps } from 'react-progress-state/useProgressNext'
import CircularProgress from '@mui/material/CircularProgress'
import { useTheme, SxProps } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { buttonColors, ColorMap } from '@ui-controls/progress/buttonColors'
import { useButtonProgress } from '@ui-controls/progress/useButtonProgress'

export type IconButtonProgressConfirmProps = {
    confirmIcon?: ReactNode
    // when `tooltipConfirm` it activates the two-clicks-to-confirm logic
    tooltipConfirm?: string | NonNullable<ReactNode>
    confirmDuration?: number
} | {
    confirmIcon: ReactNode
    tooltipConfirm: string | NonNullable<ReactNode>
    confirmDuration?: number
}

export type IconButtonProgressProps = IconButtonProgressConfirmProps & Omit<IconButtonProps, 'onClick' | 'onFocusVisible'> & {
    progress: ProgressStateValues
    resetVal?: any
    tooltip: string | NonNullable<ReactNode>
    tooltipDisabled?: string | NonNullable<ReactNode>
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
    boxSx?: SxProps
    boxStyle?: CSSProperties
    // when `true` will display any `progress` color from mount on,
    // `false` forces `ps.none`, only when then changed it shows the actual button-state
    showInitial?: boolean
    resetDelay?: number
    // when `true` enabled pointer-events on the tooltip
    tooltipInteractive?: boolean
    colorMap?: ColorMap
    TooltipProps?: Omit<TooltipProps, 'title'>
}

export const IconButtonProgress = (
    {
        onClick, disabled,
        size = 'medium',
        progress, resetVal,
        confirmIcon, confirmDuration,
        resetDelay,
        tooltipConfirm, tooltip, tooltipDisabled,
        children,
        boxStyle, boxSx,
        sx,
        showInitial,
        tooltipInteractive = false,
        colorMap,
        TooltipProps,
        ...props
    }: IconButtonProgressProps,
) => {
    const {
        progressState, currentProgress,
        handleClick, confirmShow,
    } = useButtonProgress<HTMLButtonElement>(progress, resetVal, disabled, showInitial, confirmDuration, resetDelay)
    const theme = useTheme()
    const btnSx = buttonColors(theme, colorMap)

    const hasConfirm = Boolean(tooltipConfirm)
    const title = disabled && tooltipDisabled ? tooltipDisabled :
        confirmShow && hasConfirm ? tooltipConfirm : tooltip

    return <Tooltip
        title={typeof title === 'undefined' ? '' : title}
        disableInteractive={!tooltipInteractive}
        {...TooltipProps || {}}
    >
        <Box style={{display: 'inline-flex', ...boxStyle}} component={'span'} sx={boxSx}>
            <IconButton
                color={'inherit'}
                {...props}
                size={size}
                disabled={disabled || progress === ps.loading}
                sx={{
                    marginLeft: 0,
                    position: 'relative',
                    display: 'inline-block',
                    ...sx,
                    ...(hasConfirm && confirmShow ?
                        btnSx.buttonConfirm :
                        progressState === 1 ?
                            btnSx.buttonSuccess :
                            progressState === -1 ?
                                btnSx.buttonError : {}),
                }}
                onFocusVisible={e => {
                    e.stopPropagation()
                }}
                onClick={(e) => {
                    e.stopPropagation()
                    if(hasConfirm) {
                        handleClick(confirmShow, onClick, e)
                    } else {
                        onClick(e)
                    }
                }}
            >
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {currentProgress === ps.loading ?
                        <CircularProgress size={size === 'small' ? 18 : 24} sx={{position: 'absolute'}}/> : null}
                    {<span style={{opacity: currentProgress === ps.loading ? 0.5 : 1, display: 'flex'}}>
                        {hasConfirm && confirmShow && confirmIcon ? confirmIcon : children}
                    </span>}
                </span>
            </IconButton>
        </Box>
    </Tooltip>
}
