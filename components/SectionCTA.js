import styles from './sectioncta.module.scss';
import Heading from './Heading';
import Paragraph from './Paragraph';

const SectionCTA = () => {
    return <section className={styles.sectionCta}>
        <Heading level={2}>
            Color picker
        </Heading>
        <Paragraph>
            This is the description of the car.
        </Paragraph>
        Call to actions go here.
    </section>

}
export default SectionCTA;