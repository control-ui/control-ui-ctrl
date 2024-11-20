import { useEffect, useRef, useState } from 'react'
import { ProgressStateValues, ps } from 'react-progress-state/useProgressNext'

export const useWithProgress = (progress: ProgressStateValues, resetVal?: any, resetDelay: number = 1800) => {
    const timer = useRef<number>()
    const [progressState, setProgressState] = useState<0 | 1 | -1>(0)
    useEffect(() => {
        setProgressState(0)
        return () => {
            window.clearTimeout(timer.current)
        }
    }, [resetVal])

    const isSuccess = progress === ps.success
    const isError = progress === ps.error
    useEffect(() => {
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
    }
}
