import React from 'react'
import { ProgressStateValues, ps } from 'react-progress-state'
import { useWithConfirm } from '@ui-controls/progress/useWithConfirm'
import { useWithProgress } from '@ui-controls/progress/useWithProgress'

export const useButtonProgress = (
    progress: ProgressStateValues,
    resetVal?: any,
    disabled?: boolean,
    // this property forces `ps.none` as initial
    showInitial?: boolean,
    confirmDuration?: number,
) => {
    const isMounted = React.useRef<boolean>(false)
    const currentProgress = React.useMemo(() => {
        if(showInitial || isMounted.current) return progress
        return ps.none
    }, [progress, showInitial])
    const {progressState, setProgressState} = useWithProgress(currentProgress, resetVal ? [resetVal] : [])
    const {confirmShow, handleClick, setConfirmShow} = useWithConfirm(resetVal ? [resetVal] : [], confirmDuration)

    React.useEffect(() => {
        if(!disabled) return
        setProgressState(0)
        setConfirmShow(false)
    }, [disabled, setConfirmShow, setProgressState])

    React.useEffect(() => {
        isMounted.current = true
        return () => {
            isMounted.current = false
        }
    }, [])

    return {
        progressState: progressState,
        confirmShow: confirmShow,
        handleClick: handleClick,
        currentProgress: currentProgress,
    }
}
