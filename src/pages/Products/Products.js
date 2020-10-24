import React from 'react';
import { homeObjTwo, homeObjThree, homeObjFour } from '../HomePage/Data';
import { InfoSection} from '../../components';


const Home = () => {
    return (
        <>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Home
