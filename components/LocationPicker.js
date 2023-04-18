import Container from './Container.js'
import Heading from './Heading';


import styles from './locationpicker.module.scss';

const LocationPicker = () => {
    return <section className={styles.
    locationPicker}>
        <Container>
        <Heading level={2}>
        Location picker
        </Heading>
    </Container>
    </section>

}

export default LocationPicker;