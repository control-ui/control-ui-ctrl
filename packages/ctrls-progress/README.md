# UI-Controls: Progress

Material-UI Button + IconButton with progress (loading/error/success) and double-click-to-confirm states.

```shell
npm i --save @ui-controls/progress @mui/material react-progress-state
```

Examples:

- [`ButtonConfirm`](#example-buttonconfirm)
- [`IconButtonConfirm`](#example-iconbuttonconfirm)
- [`ButtonProgress`](#example-buttonprogress)
- [`IconButtonProgress`](#example-iconbuttonprogress)
- [`ButtonProgress` + confirm](#example-buttonprogress-confirm)
- [`IconButtonProgress` + confirm](#example-iconbuttonprogress-confirm)

## Example `ButtonConfirm`

Only with a text:

```jsx
import React from 'react'
import {ps, useProgress} from 'react-progress-state'
import {ButtonConfirm} from '@ui-controls/progress/ButtonConfirm'

export const DemoProgress = () => {
    const [loading, setLoading, startLoading] = useProgress()
    return <>
        <ButtonConfirm
            confirmText={'Click to confirm'}
            onClick={() => {
                console.log('confirm', new Date())
            }}
        >
            submit
        </ButtonConfirm>
    </>
}
```

With text, initial-icon and confirm icon:

```jsx
import React from 'react'
import {ps, useProgress} from 'react-progress-state'
import {ButtonConfirm} from '@ui-controls/progress/ButtonConfirm'
import IcDelete from '@mui/icons-material/DeleteOutline'
import IcDeleteConfirm from '@mui/icons-material/Delete'

export const DemoProgress = () => {
    const [loading, setLoading, startLoading] = useProgress()
    return <>
        <ButtonConfirm
            confirmText={'Click to confirm'}
            confirmIcon={<IcDeleteConfirm/>}
            endIcon={<IcDelete/>}
            onClick={() => {
                console.log('confirm', new Date())
            }}
        >
            submit
        </ButtonConfirm>
    </>
}
```

## Example `IconButtonConfirm`

```jsx
import React from 'react'
import {ps, useProgress} from 'react-progress-state'
import {ButtonConfirm} from '@ui-controls/progress/ButtonConfirm'
import IcDelete from '@mui/icons-material/DeleteOutline'
import IcDeleteConfirm from '@mui/icons-material/Delete'

export const DemoProgress = () => {
    const [loading, setLoading, startLoading] = useProgress()
    return <>
        <IconButtonConfirm
            tooltip={'delete'}
            tooltipConfirm={'click again to confirm'}
            confirmIcon={<IcDeleteConfirm/>} // extra icon is optional
            onClick={() => {
                console.log('confirm', new Date())
            }}
        >
            <IcDelete/>
        </IconButtonConfirm>
    </>
}
```

## Example `ButtonProgress`

```jsx
import React from 'react'
import {ButtonProgress} from '@ui-controls/progress/ButtonProgress'
import {ps, useProgress} from 'react-progress-state'

export const DemoPage = () => {
    const [loading, setLoading, startLoading] = useProgress()
    return <>
        {/* Here would be your awesome form */}

        <ButtonProgress
            progress={loading.progress}
            onClick={() => {
                const pid = startLoading()
                new Promise((resolve) => {
                    // do some async stuff
                    window.setTimeout(() => {
                        resolve()
                    }, 600)
                })
                    .then(() => {
                        const isPid = setLoading(ps.done, undefined, pid)
                        if(!isPid) return
                        // when it didn't cancel or unmount, run the success logic
                        console.log('done', pid)
                    })
                    .catch((e) => {
                        const isPid = setLoading(ps.error, e, pid)
                        if(!isPid) return
                        // when it didn't cancel or unmount, run the error cleanup logic
                        console.log('error', pid)
                    })
            }}
        >
            submit
        </ButtonProgress>
    </>
}
```

## Example `IconButtonProgress`

```jsx
import React from 'react'
import {IconButtonProgress} from '@ui-controls/progress/IconButtonProgress'
import {ps, useProgress} from 'react-progress-state'
import IcLogin from '@mui/icons-material/Login'

export const DemoPage = () => {
    const [loading, setLoading, startLoading] = useProgress()
    return <>
        {/* Here would be your awesome form */}

        <IconButtonProgress
            progress={loading.progress}
            tooltip={'submit'}
            onClick={() => {
                const pid = startLoading()
                new Promise((resolve) => {
                    window.setTimeout(() => {
                        resolve()
                    }, 600)
                })
                    .then(() => {
                        const isPid = setLoading(ps.done, undefined, pid)
                        if(!isPid) return
                        console.log('done', pid)
                    })
                    .catch((e) => {
                        const isPid = setLoading(ps.error, e, pid)
                        if(!isPid) return
                        console.log('error', pid)
                    })
            }}
        >
            <IcLogin/>
        </IconButtonProgress>
    </>
}
```

## Example `ButtonProgress` confirm

> supports all props like `ButtonProgress`, activate confirm logic with either `confirmText` or `confirmIcon`

```jsx
import React from 'react'
import {ButtonProgress} from '@ui-controls/progress/ButtonProgress'
import {ps, useProgress} from 'react-progress-state'
import IcDelete from '@mui/icons-material/DeleteOutline'
import IcDeleteConfirm from '@mui/icons-material/Delete'

export const DemoPage = () => {
    const [loading, setLoading, startLoading] = useProgress()
    return <>
        {/* Here would be your awesome form */}

        <ButtonProgress
            progress={loading.progress}
            confirmText={'Click to confirm'}
            confirmIcon={<IcDeleteConfirm/>}
            endIcon={<IcDelete/>}
            onClick={() => {
                const pid = startLoading()
                new Promise((resolve) => {
                    // do some async stuff
                    window.setTimeout(() => {
                        resolve()
                    }, 600)
                })
                    .then(() => {
                        const isPid = setLoading(ps.done, undefined, pid)
                        if(!isPid) return
                        // when it didn't cancel or unmount, run the success logic
                        console.log('done', pid)
                    })
                    .catch((e) => {
                        const isPid = setLoading(ps.error, e, pid)
                        if(!isPid) return
                        // when it didn't cancel or unmount, run the error cleanup logic
                        console.log('error', pid)
                    })
            }}
        >
            submit
        </ButtonProgress>
    </>
}
```

## Example `IconButtonProgress` confirm

```jsx
import React from 'react'
import {IconButtonProgress} from '@ui-controls/progress/IconButtonProgress'
import {ps, useProgress} from 'react-progress-state'
import IcDelete from '@mui/icons-material/DeleteOutline'
import IcDeleteConfirm from '@mui/icons-material/Delete'

export const DemoPage = () => {
    const [loading, setLoading, startLoading] = useProgress()
    return <>
        {/* Here would be your awesome form */}

        <IconButtonProgress
            progress={loading.progress}
            tooltip={'submit'}
            tooltipConfirm={'click again to confirm'}
            confirmIcon={<IcDeleteConfirm/>} // extra icon is optional
            onClick={() => {
                const pid = startLoading()
                new Promise((resolve) => {
                    window.setTimeout(() => {
                        resolve()
                    }, 600)
                })
                    .then(() => {
                        const isPid = setLoading(ps.done, undefined, pid)
                        if(!isPid) return
                        console.log('done', pid)
                    })
                    .catch((e) => {
                        const isPid = setLoading(ps.error, e, pid)
                        if(!isPid) return
                        console.log('error', pid)
                    })
            }}
        >
            <IcDelete/>
        </IconButtonProgress>
    </>
}
```

## License

This project is free software distributed under the **MIT License**.

See: [LICENSE](https://github.com/control-ui/control-ui-ctrl/blob/main/LICENSE).

© 2022 bemit UG (haftungsbeschränkt)
