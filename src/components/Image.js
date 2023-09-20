import { styled } from "styled-components";

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Image = ({ imagePath, altText, size }) => {
    // https://cloudinary.com/documentation/transformation_reference
    // https://res.cloudinary.com/studentsamskipnaden-i-s-r-st-norge/image/upload/w_200,h_200,c_fill,f_auto/v1693484600/Testmappe/pexels-mikhail-nilov-6592676_nbgeg8.jpg
    // https://www.youtube.com/watch?v=_lQvw2vSDbs&t=338s

    // useRef to get width/height and apply in src ?

    const baseUrl =
        "https://res.cloudinary.com/studentsamskipnaden-i-s-r-st-norge/image/upload";
    const transformations = "f_auto,c_fill,g_auto,";
    const width = size?.width ? `w_${size.width},` : "";
    const height = size?.height ? `h_${size.height},` : "";

    return (
        <StyledImage
            src={
                baseUrl +
                "/" +
                transformations +
                width +
                height +
                "/" +
                imagePath
            }
            alt={altText}
        />
    );
};
