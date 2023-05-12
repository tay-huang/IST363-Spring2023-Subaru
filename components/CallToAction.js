//components
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Container from './Container';
import Heading from './heading';

//styles
import styles from './calltoaction.module.scss';
import Paragraph from './Paragraph';

const CallToAction = () => {
    return <section className={styles.calltoaction}> 
    <Container>
        <Heading level={2}>Get Behind the Wheel</Heading>
            <Paragraph color="white"> 
                Start customizing your Crosstrek today, or contact your local Subaru dealer to experience one in person.
            </Paragraph>
            <ButtonGroup>
                <Button label= "Build and Price" />
                <Button label="Contact Dealer" />
            </ButtonGroup>
        </Container>
        </section>
}
export default CallToAction;