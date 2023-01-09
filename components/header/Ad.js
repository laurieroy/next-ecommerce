import Link from "next/link"
import styles from "./styles.module.scss"

export default function Ad() {
  return (
    <Link to="/browse">
      <div className={styles.Ad}>Ad</div>
    </Link>
  )
}
