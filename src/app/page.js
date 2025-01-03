import Head from "next/head";
import styles from "./Home.module.scss";

const socials = [
  {
    id: 'email',
    name: 'Email',
    logo: '/socials/email.svg',
    link: 'mailto:robert@robertwilkinson.dev'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    logo: '/socials/linkedin.svg',
    link: 'https://www.linkedin.com/in/robert-wilkinson-3421a0166/'
  }
]

const skills = [
  {
    id: 'react',
    name: 'React JS',
    logo: '/skills/react.png'
  },
  {
    id: 'redux',
    name: 'Redux',
    logo: '/skills/redux.png'
  },
  {
    id: 'next',
    name: 'Next JS',
    logo: '/skills/next.png'
  },
  {
    id: 'node',
    name: 'Node JS',
    logo: '/skills/node.png'
  },
  {
    id: 'express',
    name: 'Express JS',
    logo: '/skills/express.png'
  },
  {
    id: 'html',
    name: 'HTML',
    logo: '/skills/html.png'
  },
  {
    id: 'css',
    name: 'CSS',
    logo: '/skills/css.png'
  },
  {
    id: 'sass',
    name: 'Sass',
    logo: '/skills/sass.png'
  },
  {
    id: 'python',
    name: 'Python 3',
    logo: '/skills/python.png'
  },
  {
    id: 'expo',
    name: 'Expo',
    logo: '/skills/expo.png'
  },
  {
    id: 'native',
    name: 'Native',
    logo: '/skills/react.png'
  },
]

const tools = [
  {
    id: 'git',
    name: 'Git',
    logo: '/skills/git.png'
  },
  {
    id: 'vs-code',
    name: 'VS Code',
    logo: '/skills/vscode.png'
  },
  {
    id: 'photoshop',
    name: 'Photoshop',
    logo: '/skills/photoshop.png'
  },
  {
    id: 'Premiere',
    name: 'Premiere',
    logo: '/skills/premiere.png'
  },
]


export default function Home() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Robert Wilkinson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className={styles.bio}>
        <h1 className={styles.bioHeading}>Robert Wilkinson</h1>
        <p className={styles.bioText}>Hi I&apos;m, Robert</p>
        <p className={styles.bioText}>I create websites and web based applications, Projects I&apos;ve worked on have been on display at the UKs largest health organisation and IS Europe</p>

        <div className={styles.socials}>
          {socials.map((s, i) =>  (
            <div key={i} className={styles.socialItem} id={s.id} >
              <p ><a href={s.link}>{s.name}</a></p>
            </div>
          ))}
        </div>
      </div>


      <div className={styles.skillsAndTools}>
        <div className={styles.skillsContainer}>
          <h3 className={styles.skillsHeading} >Here are some of my favorite technologies:</h3>

          <div className={styles.skills}>

            { skills.map((s, i) => (
              <div key={i} className={styles.skill}>
                <img className={styles.skillLogo} src={s.logo} alt={s.name} />
                <p className={styles.skillName}>{s.name}</p>
              </div>
            ))}
          </div> 
        </div>

        <div className={styles.skillsContainer}>
          <h3 className={styles.skillsHeading}>Some of my favorite tools:</h3>

          <div className={styles.skills}>

            {tools.map((s, i) => (
              <div key={i} className={styles.skill}>
                <img className={styles.skillLogo} src={s.logo} alt={s.name} />
                <p className={styles.skillName}>{s.name}</p>
              </div>
            ))}
          </div> 
        </div> 
      </div>
    </div>
  )
}
