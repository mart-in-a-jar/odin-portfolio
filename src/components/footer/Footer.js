import styled from "styled-components";
import { colors } from "../../utils/colors";
import { StyledHeading } from "../Heading";
import { SocialIcons } from "../SocialIconsFooter";
import { Image } from "../Image";

const StyledFooter = styled.footer`
    background-color: ${colors.backgroundBlue};
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    row-gap: 55px;
    @media screen and (width >= 660px) {
        flex-direction: row;
        padding: 45px;
        gap: 20px;
    }
`;

const FooterInfo = styled.div`
    padding: 30px 12px;
`;

const ContactText = styled.p`
    font-size: 1.2rem;
`;

const ContactInfo = styled.p`
    &:last-of-type {
        margin-bottom: 30px;
    }
`;

const ImageContainer = styled.div`
    @media screen and (width >= 660px) {
        flex-basis: 70%;
    }
    @media screen and (width >= 990px) {
        flex-basis: 120%;
    }
`;

const StyledLink = styled.a`
    color: inherit;
    &:visited {
        color: inherit;
    }
`;

export const Footer = ({ contactInfo, image }) => {
    return (
        <StyledFooter>
            <FooterInfo>
                <StyledHeading>Contact me</StyledHeading>
                <ContactText>{contactInfo.text}</ContactText>
                <ContactInfo>
                    <StyledLink
                        href={`https://www.google.com/maps/search/${contactInfo.address.line1} ${contactInfo.address.line2}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {contactInfo.address.line1}
                        <br />
                        {contactInfo.address.line2}
                    </StyledLink>
                </ContactInfo>
                <ContactInfo>
                    <StyledLink href={`tel:+1 ${contactInfo.phone}`}>
                        {contactInfo.phone}
                    </StyledLink>
                    <br />
                    <StyledLink href={`mailto:${contactInfo.email}`}>
                        {contactInfo.email}
                    </StyledLink>
                </ContactInfo>
                <SocialIcons />
            </FooterInfo>
            <ImageContainer>
                <Image imagePath={image} />
            </ImageContainer>
        </StyledFooter>
    );
};
