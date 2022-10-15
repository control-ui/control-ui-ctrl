import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { ProgressStateValues, ps } from 'react-progress-state'
import CircularProgress from '@mui/material/CircularProgress'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { SxProps } from '@mui/material'
import { buttonColors } from '@ui-controls/progress/buttonColors'
import { useButtonProgress } from '@ui-controls/progress/useButtonProgress/useButtonProgress'

export type IconButtonProgressConfirmProps = {
    confirmIcon?: React.ReactNode
    // when `tooltipConfirm` it activates the two-clicks-to-confirm logic
    tooltipConfirm?: string | NonNullable<React.ReactNode>
    confirmDuration?: number
} | {
    confirmIcon: React.ReactNode
    tooltipConfirm: string | NonNullable<React.ReactNode>
    confirmDuration?: number
}

export type IconButtonProgressProps = IconButtonProgressConfirmProps & Omit<IconButtonProps, 'onClick' | 'onFocusVisible'> & {
    progress: ProgressStateValues
    resetVal?: any
    tooltip: string | NonNullable<React.ReactNode>
    tooltipDisabled?: string | NonNullable<React.ReactNode>
    onClick: () => void
    boxSx?: SxProps
    boxStyle?: React.CSSProperties
    // forces `ps.none` as initial, defaults to `true`
    showInitial?: boolean
}

export const IconButtonProgress: React.ComponentType<IconButtonProgressProps> = (
    {
        onClick, disabled,
        size = 'medium',
        progress, resetVal,
        confirmIcon, confirmDuration,
        tooltipConfirm, tooltip, tooltipDisabled,
        children,
        boxStyle, boxSx,
        style, sx,
        showInitial,
        ...props
    },
) => {
    const {
        progressState, currentProgress,
        handleClick, confirmShow,
    } = useButtonProgress(progress, resetVal, disabled, showInitial, confirmDuration)
    const theme = useTheme()
    const btnSx = buttonColors(theme)

    const hasConfirm = Boolean(tooltipConfirm)
    const title = disabled && tooltipDisabled ? tooltipDisabled :
        confirmShow && hasConfirm ? tooltipConfirm : tooltip
    return <Tooltip title={typeof title === 'undefined' ? '' : title}>
        <Box style={{display: 'inline-flex', ...boxStyle}} component={'span'} sx={boxSx}>
            <IconButton
                color={'inherit'}
                {...props}
                style={{display: 'flex', ...style}}
                size={size}
                disabled={disabled || currentProgress === ps.start}
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
                        handleClick(confirmShow, onClick)
                    } else {
                        onClick()
                    }
                }}
            >
                <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    {currentProgress === ps.start ?
                        <CircularProgress size={size === 'small' ? 18 : 24} sx={{position: 'absolute'}}/> : null}
                    {<span style={{opacity: currentProgress === ps.start ? 0.5 : 1, display: 'flex'}}>
                        {hasConfirm && confirmShow && confirmIcon ? confirmIcon : children}
                    </span>}
                </span>
            </IconButton>
        </Box>
    </Tooltip>
}
