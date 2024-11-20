import { useEffect, useMemo, useRef } from 'react'
import { ProgressStateValues, ps } from 'react-progress-state/useProgressNext'
import { useWithConfirm } from '@ui-controls/progress/useWithConfirm'
import { useWithProgress } from '@ui-controls/progress/useWithProgress'

export const useButtonProgress = <TElement extends HTMLElement>(
    progress: ProgressStateValues,
    resetVal?: any,
    disabled?: boolean,
    // this property forces `ps.none` as initial
    showInitial?: boolean,
    confirmDuration?: number,
    resetDelay?: number,
) => {
    const isMounted = useRef<boolean>(false)
    const currentProgress = useMemo(() => {
        if(showInitial || isMounted.current) return progress
        // todo: when disabled, allow ending current but do not apply when starting from new
        return ps.none
    }, [progress, showInitial])
    const {progressState} = useWithProgress(currentProgress, resetVal, resetDelay)
    const {confirmShow, handleClick, setConfirmShow} = useWithConfirm<TElement>(resetVal, confirmDuration)

    useEffect(() => {
        if(!isMounted.current) {
            isMounted.current = true
            return
        }
        if(!disabled) return
        setConfirmShow(false)
    }, [disabled, setConfirmShow])

    return {
        progressState: progressState,
        confirmShow: confirmShow,
        handleClick: handleClick,
        currentProgress: currentProgress,
    }
}
