import React from 'react'
import AppTheme from './AppTheme'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { DemoProgress } from './DemoProgress'
import { DemoConfirm } from './DemoConfirm'
import { DemoProgressConfirm } from './DemoProgressConfirm'
import Box from '@mui/material/Box'

export const App = () =>
    <AppTheme>
        <Box mx={2} mt={2} mb={3}>
            <Typography variant={'h2'} gutterBottom>Buttons with Semantic Colors + States</Typography>
        </Box>

        <Paper
            sx={{p: 2, mx: 1, my: 4}}
        >
            <Typography variant={'h2'} gutterBottom>Buttons with Confirm</Typography>
            <DemoConfirm/>
        </Paper>
        <Paper
            sx={{p: 2, mx: 1, my: 4}}
        >
            <Typography variant={'h2'} gutterBottom>Buttons with Progress</Typography>
            <DemoProgress/>
        </Paper>
        <Paper
            sx={{p: 2, mx: 1, my: 4}}
        >
            <Typography variant={'h2'} gutterBottom>Buttons with Progress + Confirm</Typography>
            <DemoProgressConfirm/>
        </Paper>
    </AppTheme>
