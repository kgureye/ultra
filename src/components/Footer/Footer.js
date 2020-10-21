import React from 'react';
import { Button } from '../../globalStyles';
import {
     FooterContainer,
     FooterSubscription, 
     FooterSubHeading, 
     FooterSubText,
     Form,
     FormInput,
     FooterLinksContainer,
     FooterLinksWrapper,
     FooterLinksItems,
     FooterLinksTitle,
     FooterLink
    } from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the latest news and trends.
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time.</FooterSubText>
                <Form>
                    <FormInput name='email' type='email' placeholder='Your Email' />
                            <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>About us</FooterLinksTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/sign-up'>Testimonials</FooterLink>
                        <FooterLink to='/sign-up'>Careers</FooterLink>
                        <FooterLink to='/sign-up'>Investors</FooterLink>
                        <FooterLink to='/sign-up'>Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinksTitle>Contact us</FooterLinksTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/sign-up'>Testimonials</FooterLink>
                        <FooterLink to='/sign-up'>Careers</FooterLink>
                        <FooterLink to='/sign-up'>Investors</FooterLink>
                        <FooterLink to='/sign-up'>Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinksTitle>Videos</FooterLinksTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/sign-up'>Testimonials</FooterLink>
                        <FooterLink to='/sign-up'>Careers</FooterLink>
                        <FooterLink to='/sign-up'>Investors</FooterLink>
                        <FooterLink to='/sign-up'>Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinksTitle>Social Media</FooterLinksTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/sign-up'>Testimonials</FooterLink>
                        <FooterLink to='/sign-up'>Careers</FooterLink>
                        <FooterLink to='/sign-up'>Investors</FooterLink>
                        <FooterLink to='/sign-up'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterContainer>
    )
}

export default Footer
