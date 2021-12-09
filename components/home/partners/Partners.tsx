import { Bloq } from "./logos/Bloq";
import { Chipax } from "./logos/Chipax";
import { MindfulChef } from "./logos/MindfulChef";
import { OneMedical } from "./logos/OneMedical";
import { Raisedev } from "./logos/Raisedev";
import { Sendoso } from "./logos/Sendoso";
import styles from "./Partners.module.scss";

export const Partners = () => (
  <div
    className={styles.partners + " d-flex flex-column justify-content-center"}
  >
    <div className="d-flex justify-content-around">
      <Sendoso />
      <Chipax />
      <MindfulChef />
      <Raisedev />
      <Bloq />
      <OneMedical />
    </div>
  </div>
);
