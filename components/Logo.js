import Image from 'next/image';

import styles from './logo.module.scss';

const Logo = () => {
    return <Image 
        src="/logo.webp"
        alt="Subaru"
        width={250}
        height={63}
        className={styles.logo}
    />
}
export default Logo;