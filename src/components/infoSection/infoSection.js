import React from 'react'
import {Link} from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import { 
    InfoSec, 
    InfoRow,
    InfoColumn, 
    TextWrapper,
    TopLine,
    Heading,
    SubTitle,
    ImgWrapper,
    Img
 } from './infoSection.elements'


const infoSection = ({
    primary, 
    lightBg, 
    imgStart,
     lightTopLine, 
     lightTextDesc, 
     buttonLabel, 
     description,
     headline,
     lightText,
     topLine,
     img,
     start,
     alt }) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                        <Link to='/sign-up'>
                            <Button big fontBig primary={primary}>
                                {buttonLabel}
                            </Button>
                        </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
                </InfoSec>
        </>
    )
}

export default infoSection

