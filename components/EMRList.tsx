import styles from "./EMRList.module.css"

const EMRList = () => {
  const emrSystems = [
    "Epic",
    "Cerner",
    "Allscripts",
    "MEDITECH",
    "NextGen Healthcare",
    "eClinicalWorks",
    "Athenahealth",
    "Practice Fusion",
    "Greenway Health",
    "McKesson",
    "GE Healthcare",
    "Kareo",
    "DrChrono",
    "CureMD",
    "AdvancedMD",
  ]

  return (
    <section className={styles.emrList}>
      <div className="container">
        <h2 className={styles.heading}>EMR Systems We Support</h2>
        <p className={styles.subheading}>
          We offer support for a wide range of EMR systems, including but not limited to:
        </p>
        <ul className={styles.list}>
          {emrSystems.map((emr, index) => (
            <li key={index} className={styles.item}>
              {emr}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default EMRList

