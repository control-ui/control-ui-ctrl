import React from 'react'
import { ProgressStateValues, ps } from 'react-progress-state'

export const useWithProgress = (progress: ProgressStateValues, resetVal?: any[], resetDelay: number = 1800) => {
    const timer = React.useRef<number>()
    const [progressState, setProgressState] = React.useState<0 | 1 | -1>(0)
    React.useEffect(() => {
        setProgressState(0)
        // eslint-disable-next-line
    }, resetVal || [])

    const isSuccess = progress === ps.done
    const isError = progress === ps.error
    React.useEffect(() => {
        if(isSuccess) {
            setProgressState(1)
        } else if(isError) {
            setProgressState(-1)
        }
        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => {
            setProgressState(0)
        }, resetDelay)
        return () => {
            window.clearTimeout(timer.current)
            setProgressState(0)
        }
    }, [isSuccess, isError, setProgressState, timer, resetDelay])

    return {
        timer,
        progressState,
        setProgressState,
    }
}
