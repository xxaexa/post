import Link from 'next/link'
import styles from '@/styles/navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Link href={'/'} className={styles.navLinks}>
          Home
        </Link>
        <Link href={'/edit-post'} className={styles.navLinks}>
          Edit
        </Link>
      </div>
    </nav>
  )
}
export default Navbar
