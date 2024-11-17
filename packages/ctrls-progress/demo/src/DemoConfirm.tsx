import React from 'react'
import { ButtonConfirm } from '@ui-controls/progress/ButtonConfirm'
import { IconButtonConfirm } from '@ui-controls/progress/IconButtonConfirm'
import Box from '@mui/material/Box'
import MuiList from '@mui/material/List'
import IcDelete from '@mui/icons-material/DeleteOutline'
import IcDeleteConfirm from '@mui/icons-material/Delete'
import IcLogout from '@mui/icons-material/Logout'
import IcConfirm from '@mui/icons-material/QuestionMark'
import { ListItemButtonConfirm } from '@ui-controls/progress/ListItemButtonConfirm'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

export const DemoConfirm: React.FC<{}> = () => {
    return <>
        <Box style={{display: 'flex', flexWrap: 'wrap'}}>
            <Box mr={2} mb={2}>
                {/* text, no icon */}
                <ButtonConfirm
                    confirmText={'Click to confirm'}
                    onClick={() => {
                        console.log('confirm', new Date())
                    }}
                >
                    submit
                </ButtonConfirm>
            </Box>
            <Box mr={2} mb={2}>
                {/* text, initial icon, confirm icon */}
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
            </Box>
            <Box mr={2} mb={2}>
                {/* text, confirm icon */}
                <ButtonConfirm
                    confirmText={'Click to confirm'}
                    confirmIcon={<IcDeleteConfirm/>}
                    onClick={() => {
                        console.log('confirm', new Date())
                    }}
                >
                    submit
                </ButtonConfirm>
            </Box>
            <Box mr={2} mb={2}>
                {/* initial icon, confirm icon */}
                <ButtonConfirm
                    confirmIcon={<IcDeleteConfirm/>}
                    endIcon={<IcDelete/>}
                    onClick={() => {
                        console.log('confirm', new Date())
                    }}
                >
                    submit
                </ButtonConfirm>
            </Box>
        </Box>
        <Box style={{display: 'flex', flexWrap: 'wrap'}}>
            <Box mr={2} mb={2}>
                {/* tooltip, tooltipConfirm, confirmIcon */}
                <IconButtonConfirm
                    onClick={() => {
                        console.log('confirm', new Date())
                    }}
                    tooltip={'delete'}
                    tooltipConfirm={'click again to confirm'}
                    confirmIcon={<IcDeleteConfirm/>}
                >
                    <IcDelete/>
                </IconButtonConfirm>
            </Box>
            <Box mr={2} mb={2}>
                {/* tooltip, tooltipConfirm, confirmIcon */}
                <IconButtonConfirm
                    onClick={() => {
                        console.log('confirm', new Date())
                    }}
                    tooltip={'logout'}
                    tooltipConfirm={'click again to logout'}
                    confirmIcon={<IcConfirm/>}
                >
                    <IcLogout/>
                </IconButtonConfirm>
            </Box>
            <Box mr={2} mb={2}>
                {/* tooltip, tooltipConfirm */}
                <IconButtonConfirm
                    onClick={() => {
                        console.log('confirm', new Date())
                    }}
                    tooltip={'logout'}
                    tooltipConfirm={'click again to logout'}
                >
                    <IcLogout/>
                </IconButtonConfirm>
            </Box>
        </Box>
        <Box mb={2}>
            {/* list-item */}
            <MuiList>
                <ListItem>
                    <ListItemText
                        primary={'List Item'}
                        secondary={'only text'}
                    />
                </ListItem>
                <ListItemButtonConfirm
                    onClick={() => {
                        console.log('confirm', new Date())
                    }}
                    sx={{py: 0}}
                    icon={<IcLogout/>}
                    confirmText={'Click to confirm'}
                    confirmIcon={<IcConfirm/>}
                    primary={'Logout'}
                    secondaryTypographyProps={{variant: 'caption'}}
                    secondary={'from App'}
                />
                <ListItemButton onClick={() => undefined}>
                    <ListItemText
                        primary={'List Item'}
                        secondary={'as button'}
                    />
                </ListItemButton>
                <ListItemButtonConfirm
                    onClick={() => {
                        console.log('confirm', new Date())
                    }}
                    sx={{py: 0}}
                    icon={<IcLogout/>}
                    confirmText={'Click to confirm'}
                    confirmIcon={<IcConfirm/>}
                    primary={'Logout'}
                />
            </MuiList>
        </Box>
        <Box mb={2}>
            {/* list-item dense */}
            <MuiList dense>
                <ListItem>
                    <ListItemText
                        primary={'List Item'}
                        secondary={'only text'}
                    />
                </ListItem>
                <ListItemButtonConfirm
                    onClick={() => {
                        console.log('confirm', new Date())
                    }}
                    sx={{py: 0}}
                    icon={<IcLogout/>}
                    confirmText={'Click to confirm'}
                    confirmIcon={<IcConfirm/>}
                    primary={'Logout'}
                    secondaryTypographyProps={{variant: 'caption'}}
                    secondary={'from App'}
                />
                <ListItemButton onClick={() => undefined}>
                    <ListItemText
                        primary={'List Item'}
                        secondary={'as button'}
                    />
                </ListItemButton>
                <ListItemButtonConfirm
                    onClick={() => {
                        console.log('confirm', new Date())
                    }}
                    sx={{py: 0}}
                    icon={<IcLogout/>}
                    confirmText={'Click to confirm'}
                    confirmIcon={<IcConfirm/>}
                    primary={'Logout'}
                />
            </MuiList>
        </Box>
    </>
}
