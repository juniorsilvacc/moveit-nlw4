import { ExperienceBar } from "../components/ExperienceBar";
import { Porfile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";

import Head from 'next/head';

import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Porfile/>
            <CompletedChallenges/>
            <Countdown/>

          </div>
          <div>
            <ChallengeBox/>
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
