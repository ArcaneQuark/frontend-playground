// Basic idea - textbox with enter, and empty area for text. When enter is pressed, ping the server with the data from it, use a selector to get the response, put it in a textbox.
import { TextField, Typography } from "@mui/material"

function SearchBox() {
  return (
    <div>
    <TextField id="story-title" label="Filled" variant="filled" />
      <Button variant="outlined">Delve into the Dark Archives</Button>
    </div>
  )
}


function StoryDisplay({title, text}){
  return (
    <div>
    <Typography variant="h1"> {title} </Typography>
      <br/>
      <Typography variant="body">{text} </Typography>
    </div>
  )
}

function Lovecraft({title, text}) {
  return (
    <div>
      <SearchBox />
      <StoryDisplay title={title} text={text}/>
    </div>

  )
}
