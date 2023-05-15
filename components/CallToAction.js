//components
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Container from './Container';
import Heading from './Heading';

//styles
import styles from './calltoaction.module.scss';
import Paragraph from './Paragraph';

const CallToAction = ({ vehicleName }) => {
    return <section className={styles.calltoaction}> 
    <Container>
        <div className={styles.calltoaction_flexbox}>
            <Heading level={2}>Get Behind the Wheel</Heading>
                <Paragraph color="white"> 
                    Start customizing your {vehicleName} today, or contact your local Subaru dealer to experience one in person.
                </Paragraph>
                <ButtonGroup>
                    <Button label= "Build and Price" type="primary" />
                    <Button label="Contact Dealer" type="secondary" />
                </ButtonGroup>
            </div>
        </Container>
        </section>
}
export default CallToAction;