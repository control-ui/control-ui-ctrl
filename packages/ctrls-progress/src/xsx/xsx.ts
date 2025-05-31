import type { Theme } from '@mui/material/styles'
import type { SxProps, SystemStyleObject } from '@mui/system'

/**
 * Xombine SxProps, supporting function or object style SxProps.
 * If a function is specified, returns a new function, calling the respective function at the correct position
 */
export const xsx = (...sx: (SxProps<Theme> | undefined | null)[]) => {
    const fn = sx.some(sx2 => typeof sx2 === 'function')

    if(fn) {
        return (theme: Theme) => {
            return sx.reduce<SystemStyleObject<Theme>>((sxFinal, sx2) => {
                return {
                    ...sxFinal,
                    ...typeof sx2 === 'function' ? sx2(theme) : sx2,
                }
            }, {})
        }
    }

    return sx.reduce<SystemStyleObject<Theme>>((sxFinal, sx2) => {
        return {
            ...sxFinal,
            ...sx2,
        }
    }, {})
}
