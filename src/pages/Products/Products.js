import React from 'react';
import { homeObjTwo, homeObjThree, homeObjFour } from '../HomePage/Data';
import { InfoSection} from '../../components';
import ProductInfo from '../../components/products/ProductInfo';

const Home = () => {
    return (
        <>
            <ProductInfo />
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Home
