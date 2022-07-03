import {
  Grid,
} from "@material-ui/core";

export const AboutMe = () => {
  return (
    <div className="card shadow-xl bg-white mb-6 rounded-xl">
      <div className="p-8">
        <h1 className="font-semibold text-2xl"> About me </h1>
          <div className="my-4">
            <h1 className="card-title font-semibold text-xl mb-2"> Bio </h1>
            <p className="text-base mb-2"> Full Stack Developer. Jiu Jitsu hobbyist. Primarily working with Javascript. Currently a Software Engineer Intern at Streamforge. Really enjoy learning about and 
            working the latest tech. Currently working with Vue.js but also familiar with other frameworks such as Next.js & React. Always looking to better my skills
            and pass it on. Feel free to reach me through my socials above. </p>
          </div>
          <div className = "my-4">
            <h1 className="card-title font-semibold text-xl mb-2"> Skills </h1>
            <p className="text-base mb-2"> Javascript, React, Vue.js, Next.js, Node, Express, API's, SQL, Github, HTML, CSS, SCSS, Tailwind CSS, Material UI, Agile Devlopment. </p>
          </div>
          <Grid container>
            <Grid item xs={12}>
              <h1 className="card-title font-semibold text-xl mb-2"> Education </h1>
            </Grid>
            <Grid item xs={12} sm={6}>
              <p className="text-base mb-2">
                BrainStation
                <br />
                Web Development
                <br />
                2022
                <br />
                New York, NY
              </p>
            </Grid>

            <Grid item xs={12} sm={6}>
            <p className="text-base mb-2">
                Johnston Community College
                <br />
                A.S. Criminal Justice Technology
                <br />
                2016-2018
                <br />
                Smithfield, NC
              </p>
            </Grid>
          </Grid>
      </div>  
    </div>
  );
};
