import style from '../styles/Twitch.module.scss';
import { Box, Grid } from "@material-ui/core";
import Head from 'next/head';
import Link from 'next/link';

export default function TwitchSearch () {
  return (
    <div>
      <Head>
        <title>Twitch Search</title>
      </Head>
      <Box className={style.twitch}>
        <div className={style.twitch__header}>
          <h1 className={style.twitch__title}> Twitch Search </h1>
          <Link href="https://github.com/criscunas/twitch-search">
            <a className={style.twitch__description_note}>
              github.com/criscunas/twitch-search
            </a>
          </Link>
          <p className={style.twitch__description}>
            A Full Stack mini application that allows a user to search a twitch user and return the follow count.
          </p>
        </div>

        <div className={style.twitch__about}>
          <h1 className={style.twitch__about_head}>The Assignment</h1>
          <p className={style.twitch__about_description}>
            Utilize the Twitch API to fetch a user by username and return thier follow count while also building
            a node server to act as a proxy.
          </p>

          <h1 className={style.twitch__about_head}>Tech</h1>
          <p className={style.twitch__about_description}>
            React, Material UI, SCSS, Node , Express, Sqlite, Node-cache
          </p>
          <h1 className={style.twitch__about_head}>My Role</h1>
          <p className={style.twitch__about_description}>
            As this was a solo project, I handled every part of the assignment. Tasks included          
          </p>
          <Grid
            container
            className={style.twitch__about_list}
            spacing={2}
          >
            <Grid item xs={12} sm={6}>
              <li className={style.twitch__about_list_item}>
                Building out UI and setting up the node server.
              </li>
            </Grid>

            <Grid item xs={12} sm={6}>
              <li className={style.twitch__about_list_item}>
                Creating API routes to handle search requests.
              </li>
            </Grid>

            <Grid item xs={12} sm={6}>
              <li className={style.twitch__about_list_item}>
                Storing search results in sqlite and using node-cache to serve subsequent searches.
              </li>
            </Grid>

            <Grid item xs={12} sm={6}>
              <li className={style.twitch__about_list_item}>
                Apply responsive styling to fit mobile, tablet & desktop.
              </li>
            </Grid>
          </Grid>
        </div>

      </Box>
    </div>
  )
}