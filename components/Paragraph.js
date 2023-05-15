import classnames from 'classnames/bind';

import styles from './paragraph.module.scss';

let cx = classnames.bind(styles);

const Paragraph = ({children}) => {
    return <p className={styles.paragraph}>{children}</p>
}
export default Paragraph;