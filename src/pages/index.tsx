import { ExperienceBar } from "../components/ExperienceBar";
import { Porfile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Porfile/>
        </div>
        <div>

        </div>
      </section>

    </div>
  )
}
