import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a className={styles.headerLink}>홈(글)</a>
      </Link>
      <Link href="/about">
        <a className={styles.headerLink}>소개</a>
      </Link>
    </div>
  );
};

export default Header;
