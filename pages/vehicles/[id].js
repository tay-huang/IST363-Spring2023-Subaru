import Image from 'next/image'
import Layout from '../../components/Layout';
import Showcase from '../../components/Showcase';
import TrimPicker from '../../components/TrimPicker'

import { getAllVehicleSlugs, getVehicleDataBySlug } from '../../lib/api'

export async function getStaticPaths() {
    const vehicles = await getAllVehicleSlugs();
    console.log({vehicles});
    const paths = vehicles.map((vehicle) => {
        return {
            params: {
                id: vehicle.node.slug
            }
        }
    })
    
    return {
      paths: paths,
      fallback: false, // can also be true or 'blocking'
    }
  }
  
  // `getStaticPaths` requires using `getStaticProps`
  export async function getStaticProps({params}) {
    const { id } = params;
    console.log({id});
    const vehicleData = await getVehicleDataBySlug(id);
    return {
      // Passed to the page component as props
      props: { 
        vehicleData
      },
    }
  }
  
  export default function SingleVehiclePage({ vehicleData }) {
    const {title, featuredImage, vehicleInformation} = vehicleData;
    const { trimLevels, showcase } = vehicleInformation;
    //console.log({trimLevels});
    return <Layout>
       <Showcase 
       subheadline={`Subaru ${title}`}
       headline={showcase.headline ? showcase.headline : null}
       backgroundImage={featuredImage ? featuredImage.node : null}
       />
       <TrimPicker trimLevels={trimLevels} />
    </Layout> 
  }