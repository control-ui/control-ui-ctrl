import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react'

export const useWithConfirm = <TElement extends HTMLElement>(
    resetVal?: any,
    confirmDuration: number = 2500,
) => {
    const [confirmShow, setConfirmShow] = useState(false)
    const timerConfirm = useRef<number | undefined>()

    useEffect(() => {
        setConfirmShow(false)
        return () => window.clearTimeout(timerConfirm.current)
    }, [resetVal])

    const handleClick = useCallback((
        confirmShow: boolean,
        onClick: (e: MouseEvent<TElement>) => void,
        e: MouseEvent<TElement>,
    ) => {
        if(confirmShow) {
            setConfirmShow(false)
            onClick(e)
        } else {
            setConfirmShow(true)
            window.clearTimeout(timerConfirm.current)
            timerConfirm.current = window.setTimeout(() => {
                setConfirmShow(false)
            }, confirmDuration)
        }
    }, [confirmDuration])

    return {
        timer: timerConfirm,
        confirmShow,
        setConfirmShow,
        handleClick,
    }
}
