import classnames from 'classnames/bind';
import styles from './heading.module.scss'; 

const cx = classnames.bind(styles);

const Heading = ({children, level}) => {
    const Tag = level > 6? 'h6' : `h${level}`; 

    const headingClasses = cx({
        heading: true,
        [`h${level}`] : level
    });

    return <Tag>{children}</Tag>
}
export default Heading;