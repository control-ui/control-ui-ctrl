import React from 'react'
import { useTheme } from '@mui/material/styles'
import CircularProgress from '@mui/material/CircularProgress'
import { green } from '@mui/material/colors'
import Button, { ButtonProps } from '@mui/material/Button'
import { ProgressStateValues, ps } from 'react-progress-state'
import Box from '@mui/material/Box'
import { buttonColors, ColorMap } from '@ui-controls/progress/buttonColors'
import { WithConfirmProps } from '@ui-controls/progress/ButtonConfirm'
import { SxProps } from '@mui/material'
import { useButtonProgress } from '@ui-controls/progress/useButtonProgress'

export type ButtonProgressProps = Omit<ButtonProps, 'onClick'> & Partial<WithConfirmProps> & {
    progress: ProgressStateValues
    resetVal?: any
    classNameWrapper?: string
    onClick: () => void
    boxStyle?: React.CSSProperties
    boxSx?: SxProps
    // when `true` will display any `progress` color from mount on,
    // `false` forces `ps.none`, only when then changed it shows the actual button-state
    showInitial?: boolean
    colorMap?: ColorMap
}

export const ButtonProgress: React.ComponentType<ButtonProgressProps> = (
    {
        progress, resetVal,
        className, classNameWrapper,
        boxStyle, boxSx,
        onClick, children,
        confirmIcon, confirmText, confirmDuration,
        resetDelay,
        endIcon, sx,
        fullWidth,
        disabled,
        showInitial,
        colorMap,
        ...props
    },
) => {
    const {
        progressState, currentProgress,
        handleClick, confirmShow,
    } = useButtonProgress(progress, resetVal, disabled, showInitial, confirmDuration, resetDelay)
    const theme = useTheme()
    const btnSx = buttonColors(theme, colorMap)
    const hasConfirm = Boolean(confirmIcon || confirmText)
    return <Box
        className={classNameWrapper}
        style={boxStyle}
        sx={{
            marginLeft: 0,
            position: 'relative',
            display: fullWidth ? 'block' : 'inline-block',
            ...boxSx || {},
        }}
    >
        <Button
            {...props}
            // `disabled` must check against the original `progress`, to be able to not rely on any coloring logic
            disabled={disabled || progress === ps.start}
            className={className}
            sx={{
                ...sx || {},
                // todo: don't show "success" when nothing else happened after an disable and was "success" before and "not just mounted" / fixes: green-when-enabled/mounted-again
                ...(hasConfirm && confirmShow ?
                    btnSx.buttonConfirm :
                    progressState === 1 ?
                        btnSx.buttonSuccess :
                        progressState === -1 ?
                            btnSx.buttonError : {}),
            }}
            onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
                if(hasConfirm) {
                    handleClick(confirmShow, onClick)
                } else {
                    onClick()
                }
            }}
            endIcon={
                hasConfirm && confirmShow && confirmIcon ? confirmIcon : endIcon
            }
            fullWidth
        >
            {hasConfirm && confirmShow && confirmText ? confirmText : children}
        </Button>

        {currentProgress === ps.start &&
            <CircularProgress
                size={24}
                style={{
                    marginTop: -12,
                    marginLeft: -12,
                }}
                sx={{
                    color: green[500],
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                }}
            />}
    </Box>
}
