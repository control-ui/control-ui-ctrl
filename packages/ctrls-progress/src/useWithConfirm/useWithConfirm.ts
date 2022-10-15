import React from 'react'

export const useWithConfirm = (resetVal?: any[], confirmDuration: number = 2500) => {
    const [confirmShow, setConfirmShow] = React.useState(false)
    const timerConfirm = React.useRef<number | undefined>()
    React.useEffect(() => {
        return () => window.clearTimeout(timerConfirm.current)
    }, [timerConfirm])
    React.useEffect(() => {
        setConfirmShow(false)
        // eslint-disable-next-line
    }, resetVal || [])

    const handleClick = React.useCallback((confirmShow: boolean, onClick: () => void) => {
        if(confirmShow) {
            setConfirmShow(false)
            onClick()
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
