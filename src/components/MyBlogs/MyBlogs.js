import { Box, Card, CardHeader, CardActions, Button, Grid} from "@material-ui/core";
import DateFormatter from '../../../lib/date-formatter';
import blogStyles from './MyBlogs.module.scss';
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import {useRouter} from 'next/router';

const MyBlogs = ({posts}) => {

  const Router = useRouter()

  return (
    <Box className={blogStyles.blogs}>
      <h1 className={blogStyles.blogs__header}> Blogs </h1>
      <Grid container column spacing = {2} >
        {posts.map(({ date, excerpt, title, slug }, i) => {
          return (
            <Grid item xs={12} sm={6} key = {i}>
              <Card key={i} className={blogStyles.blogs__card}>
                <h2 className={blogStyles.blogs__card_title}>{title}</h2>
                <p className={blogStyles.blogs__card_date}>
                  <DateFormatter dateString={date} />
                </p>
                <p className={blogStyles.blogs__card_text}>{excerpt} .....</p>
                <div className={blogStyles.blogs__card_button}>
                  <Button
                    variant="string"
                    size="small"
                    color="info"
                    endIcon={<ReadMoreIcon />}
                    style={{ backgroundColor: "#E1CE7A" }}
                    onClick = {() => Router.push(`/posts/${slug}`)}
                  >
                    <p className={blogStyles.blogs__button_text}> Read </p>
                  </Button>
                </div>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default MyBlogs;