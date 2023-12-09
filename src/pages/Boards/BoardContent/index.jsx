import Box from '@mui/material/Boxs'

function BoardContent() {
  return (
    <Box sx={{
      backgroundColor: 'primary.main',
      height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.appBoardBarHeight})`,
      width: '100%',
      display: 'flex',
      alignItems: 'center'
    }}>
      board content
    </Box>
  )
}

export default BoardContent
