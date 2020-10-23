import React from 'react';
import { Button } from '../../globalStyles';
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
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
     FooterLink,
     SocialMedia,
     SocialMediaWrap,
     SocialLogo,
     WebsiteRights,
     SocialIcon,
     SocialIcons,
     SocialIconLink
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
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>Videos</FooterLinksTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinksTitle>Social Media</FooterLinksTitle>
                        <FooterLink to='/'>How it works</FooterLink>
                        <FooterLink to='/'>Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink>
                        <FooterLink to='/'>Investors</FooterLink>
                        <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon>
                            ULTRA
                        </SocialIcon>
                    </SocialLogo>
                    <WebsiteRights>ULTRA © 2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook' rel='noopener noreferrer'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram' rel='noopener noreferrer'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter' rel='noopener noreferrer'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Linkedin' rel='noopener noreferrer'>
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
