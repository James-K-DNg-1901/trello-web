import Box from '@mui/material/Box'

function BoardBar() {
  return (
    <Box sx={{
      backgroundColor: 'primary.dark',
      height: (theme) => theme.trello.appBoardBarHeight,
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    }}>
      board bar
    </Box>
  )
}

export default BoardBar
