import Head from "next/head";
import Link from "next/link";

export default function TwitchSearch() {
 return (
  <div className="project">
   <Head>
    <title>Twitch Search</title>
   </Head>
   <div className="project-main">
    <div className="project-header">
     <h1 className="project-title"> Twitch Search </h1>
     <Link href="https://github.com/criscunas/twitch-search">
      <a className="project-link">github.com/criscunas/twitch-search</a>
     </Link>
     <p className="project-description">
      A Full Stack mini application that allows a user to search a twitch user
      and return the follow count.
     </p>
    </div>

    <div className="project-about">
     <h1 className="project-about_title">The Assignment</h1>
     <p className="project-about_subhead">
      Utilize the Twitch API to fetch a user by username and return thier follow
      count while also building a node server to act as a proxy.
     </p>

     <h1 className="project-about_title">Tech</h1>
     <p className="project-about_subhead">
      React, Material UI, SCSS, Node , Express, Sqlite, Node-cache
     </p>
     <h1 className="project-about_title">My Role</h1>
     <p className="project-about_subhead">
      As this was a solo project, I handled every part of the assignment. Tasks
      included
     </p>
     <div className="project-list">
      <li className="project-list_item">
       Building out UI and setting up the node server.
      </li>

      <li className="project-list_item">
       Creating API routes to handle search requests.
      </li>

      <li className="project-list_item">
       Storing search results in sqlite and using node-cache to serve subsequent
       searches.
      </li>

      <li className="project-list_item">
       Apply responsive styling to fit mobile, tablet & desktop.
      </li>
     </div>
    </div>
   </div>
  </div>
 );
}
