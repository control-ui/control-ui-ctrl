import React from 'react'
import { ButtonProgress } from '@ui-controls/progress/ButtonProgress'
import { IconButtonProgress } from '@ui-controls/progress/IconButtonProgress'
import { ps, useProgress } from 'react-progress-state'
import Box from '@mui/material/Box'
import IcDeleteConfirm from '@mui/icons-material/Delete'
import IcDelete from '@mui/icons-material/DeleteOutline'

export const DemoProgressConfirm: React.FC<{}> = () => {
    const [loading1, setLoading1, startLoading1] = useProgress()
    const [loading2, setLoading2, startLoading2] = useProgress()
    const [loading3, setLoading3, startLoading3] = useProgress()
    const [loading4, setLoading4, startLoading4] = useProgress()
    return <>
        <Box style={{display: 'flex', flexWrap: 'wrap'}}>
            <Box mr={2} mb={2}>
                {/* text, no icon */}
                <ButtonProgress
                    progress={loading1.progress}
                    confirmText={'Click to confirm'}
                    onClick={() => {
                        const pid = startLoading1()
                        window.setTimeout(() => {
                            const isPid = setLoading1(ps.done, undefined, pid)
                            if(!isPid) return
                            console.log('done', pid)
                        }, 600)
                    }}
                >
                    submit w/ success
                </ButtonProgress>
            </Box>
            <Box mr={2} mb={2}>
                {/* text, no icon */}
                <ButtonProgress
                    progress={loading2.progress}
                    confirmText={'Click to confirm'}
                    onClick={() => {
                        const pid = startLoading2()
                        window.setTimeout(() => {
                            const isPid = setLoading2(ps.error, undefined, pid)
                            if(!isPid) return
                            console.log('error', pid)
                        }, 600)
                    }}
                >
                    submit w/ error
                </ButtonProgress>
            </Box>
            <Box mr={2} mb={2}>
                {/* text, initial icon, confirm icon */}
                <ButtonProgress
                    progress={loading1.progress}
                    confirmText={'Click to confirm'}
                    confirmIcon={<IcDeleteConfirm/>}
                    endIcon={<IcDelete/>}
                    onClick={() => {
                        const pid = startLoading1()
                        window.setTimeout(() => {
                            const isPid = setLoading1(ps.done, undefined, pid)
                            if(!isPid) return
                            console.log('done', pid)
                        }, 600)
                    }}
                >
                    submit w/ success
                </ButtonProgress>
            </Box>
            <Box mr={2} mb={2}>
                {/* text, initial icon, confirm icon */}
                <ButtonProgress
                    progress={loading2.progress}
                    confirmText={'Click to confirm'}
                    confirmIcon={<IcDeleteConfirm/>}
                    endIcon={<IcDelete/>}
                    onClick={() => {
                        const pid = startLoading2()
                        window.setTimeout(() => {
                            const isPid = setLoading2(ps.error, undefined, pid)
                            if(!isPid) return
                            console.log('error', pid)
                        }, 600)
                    }}
                >
                    submit w/ error
                </ButtonProgress>
            </Box>
            <Box mr={2} mb={2}>
                {/* text, confirm icon */}
                <ButtonProgress
                    progress={loading1.progress}
                    confirmText={'Click to confirm'}
                    confirmIcon={<IcDeleteConfirm/>}
                    onClick={() => {
                        const pid = startLoading1()
                        window.setTimeout(() => {
                            const isPid = setLoading1(ps.done, undefined, pid)
                            if(!isPid) return
                            console.log('done', pid)
                        }, 600)
                    }}
                >
                    submit w/ success
                </ButtonProgress>
            </Box>
            <Box mr={2} mb={2}>
                {/* text, confirm icon */}
                <ButtonProgress
                    progress={loading2.progress}
                    confirmText={'Click to confirm'}
                    confirmIcon={<IcDeleteConfirm/>}
                    onClick={() => {
                        const pid = startLoading2()
                        window.setTimeout(() => {
                            const isPid = setLoading2(ps.error, undefined, pid)
                            if(!isPid) return
                            console.log('error', pid)
                        }, 600)
                    }}
                >
                    submit w/ error
                </ButtonProgress>
            </Box>
            <Box mr={2} mb={2}>
                {/* initial icon, confirm icon */}
                <ButtonProgress
                    progress={loading1.progress}
                    confirmIcon={<IcDeleteConfirm/>}
                    endIcon={<IcDelete/>}
                    onClick={() => {
                        const pid = startLoading1()
                        window.setTimeout(() => {
                            const isPid = setLoading1(ps.done, undefined, pid)
                            if(!isPid) return
                            console.log('done', pid)
                        }, 600)
                    }}
                >
                    submit w/ success
                </ButtonProgress>
            </Box>
            <Box mr={2} mb={2}>
                {/* initial icon, confirm icon */}
                <ButtonProgress
                    progress={loading2.progress}
                    confirmIcon={<IcDeleteConfirm/>}
                    endIcon={<IcDelete/>}
                    onClick={() => {
                        const pid = startLoading2()
                        window.setTimeout(() => {
                            const isPid = setLoading2(ps.error, undefined, pid)
                            if(!isPid) return
                            console.log('error', pid)
                        }, 600)
                    }}
                >
                    submit w/ error
                </ButtonProgress>
            </Box>
            <Box mr={2} mb={2}>
                {/* text, no icon */}
                <ButtonProgress
                    progress={loading1.progress}
                    confirmText={'Click to confirm'}
                    onClick={() => {
                        const pid = startLoading1()
                        window.setTimeout(() => {
                            const isPid = setLoading1(ps.done, undefined, pid)
                            if(!isPid) return
                            console.log('done', pid)
                        }, 600)
                    }}
                >
                    submit w/ success
                </ButtonProgress>
            </Box>
            <Box mr={2} mb={2}>
                {/* text, no icon */}
                <ButtonProgress
                    progress={loading2.progress}
                    confirmText={'Click to confirm'}
                    onClick={() => {
                        const pid = startLoading2()
                        window.setTimeout(() => {
                            const isPid = setLoading2(ps.error, undefined, pid)
                            if(!isPid) return
                            console.log('error', pid)
                        }, 600)
                    }}
                >
                    submit w/ error
                </ButtonProgress>
            </Box>
        </Box>
        <Box style={{display: 'flex', flexWrap: 'wrap'}}>
            <Box mr={2} mb={2}>
                {/* tooltip, tooltipConfirm, confirmIcon */}
                <IconButtonProgress
                    progress={loading3.progress}
                    onClick={() => {
                        const pid = startLoading3()
                        window.setTimeout(() => {
                            const isPid = setLoading3(ps.done, undefined, pid)
                            if(!isPid) return
                            console.log('done', pid)
                        }, 600)
                    }}
                    tooltip={'delete'}
                    tooltipConfirm={'click again to confirm'}
                    confirmIcon={<IcDeleteConfirm/>}
                >
                    <IcDelete/>
                </IconButtonProgress>
            </Box>
            <Box mr={2} mb={2}>
                {/* tooltip, tooltipConfirm, confirmIcon */}
                <IconButtonProgress
                    progress={loading4.progress}
                    onClick={() => {
                        const pid = startLoading4()
                        window.setTimeout(() => {
                            const isPid = setLoading4(ps.error, undefined, pid)
                            if(!isPid) return
                            console.log('error', pid)
                        }, 600)
                    }}
                    tooltip={'delete'}
                    tooltipConfirm={'click again to confirm'}
                    confirmIcon={<IcDeleteConfirm/>}
                >
                    <IcDelete/>
                </IconButtonProgress>
            </Box>
            <Box mr={2} mb={2}>
                {/* tooltip, tooltipConfirm */}
                <IconButtonProgress
                    progress={loading3.progress}
                    onClick={() => {
                        const pid = startLoading3()
                        window.setTimeout(() => {
                            const isPid = setLoading3(ps.done, undefined, pid)
                            if(!isPid) return
                            console.log('done', pid)
                        }, 600)
                    }}
                    tooltip={'delete'}
                    tooltipConfirm={'click again to confirm'}
                >
                    <IcDelete/>
                </IconButtonProgress>
            </Box>
            <Box mr={2} mb={2}>
                {/* tooltip, tooltipConfirm */}
                <IconButtonProgress
                    progress={loading4.progress}
                    onClick={() => {
                        const pid = startLoading4()
                        window.setTimeout(() => {
                            const isPid = setLoading4(ps.error, undefined, pid)
                            if(!isPid) return
                            console.log('error', pid)
                        }, 600)
                    }}
                    tooltip={'delete'}
                    tooltipConfirm={'click again to confirm'}
                >
                    <IcDelete/>
                </IconButtonProgress>
            </Box>
        </Box>
    </>
}
