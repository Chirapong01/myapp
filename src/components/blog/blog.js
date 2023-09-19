import { Grid } from '@mui/material'
import './blog.css'
import CardPj from './card/card'

function BlogPJ() {
    return (
        <div className='blog'>
            <Grid container direction="row"
                justifyContent="center"
                alignItems="center" spacing={5}>
                <Grid item xs={3}>
                    <CardPj img={"./images/HTML_Blog-scaled.jpeg"} text={"lorem"} headers={"header1"} />
                </Grid>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={3}>
                    <CardPj img={"./images/HTML_Blog-scaled.jpeg"} text={"lorem"} headers={"header2"} />
                </Grid>
            </Grid>
        </div>
    )
}

export default BlogPJ