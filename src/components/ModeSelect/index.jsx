import { useColorScheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightMode from '@mui/icons-material/LightMode'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <Box>
      <FormControl size='small'>
        <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="demo-simple-select"
          value={mode}
          label="Mode"
          onChange={handleChange}
        >
          <MenuItem value="light">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LightMode fontSize='small' /> Light
            </Box>
          </MenuItem>
          <MenuItem value="dark">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <DarkModeOutlined fontSize='small' /> Dark
            </Box>
          </MenuItem>
          <MenuItem value="system">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <SettingsBrightnessIcon fontSize='small' /> System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default ModeSelect
