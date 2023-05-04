import { getAllVehicles } from '../../lib/api';

import Container from '../../components/Container'
import Grid from '../../components/Grid'
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Link from 'next/link'
import Tabs from '../../components/Tabs';

import { filterAllVehicleTypes } from '../../lib/utilities';

export async function getStaticProps() {
    const vehiclesData = await getAllVehicles();
    return {
      props: {
        vehiclesData
      }, // will be passed to the page component as props
    }
  }

const VehiclesPage = ({vehiclesData}) => {
  const vehicleTypes = filterAllVehicleTypes(vehiclesData);
    return (
        <Layout>
          <Container>
        <Heading 
          level={1} 
          textAlign="center"
          >Vehicles</Heading>
        <Tabs items={vehicleTypes}/> 
        <Grid />
        </Container>
        </Layout>
    )
}
export default VehiclesPage


