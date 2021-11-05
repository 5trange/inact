/* Check */
import styled from 'styled-components';
import { css } from 'styled-components';
import './CommonStyle.css';

// Font styles used throughout the app
export const primaryFontStyle = css`
    font-family: 'Nunito', sans-serif;
    font-size: 0.7rem;
    letter-spacing: -0.016rem;
    line-height: 1.25;
`;

export const secondaryFontStyle = css`
    font-family: 'Nunito', sans-serif;
    font-size: 0.6875rem;
    letter-spacing: -0.014rem;
    line-height: 1.63;
`;

/* Heading styles */
const commonHeadingStyle = css`
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
`;

export const headingTitle = css`
    ${commonHeadingStyle}
    font-size: clamp(1.25rem, 5vw, 2rem);
    letter-spacing: -0.04rem;
    color: #D8DEE9;
    transition: color 400ms ease-in;
    @media (min-width: 768px) {
        letter-spacing: -0.0625rem;
    }
`;

export const headingLarge = css`
    ${commonHeadingStyle}
    font-size: 1.5rem;
    letter-spacing: -0.03125rem;
    line-height: 2.14;
    color: #D8DEE9;
    transition: color 400ms ease-in-out;
`;

export const headingLargeSmall = css`
    ${commonHeadingStyle}
    font-size: clamp(1.25rem, 5vw, 1.5rem);
    letter-spacing: -0.026rem;
    line-height: 2.14;
    color: #D8DEE9;
    transition: color 400ms ease-in-out;
    @media (min-width: 768px) {
        letter-spacing: -0.03125rem;
    }
`;

export const headingBig = css`
    ${commonHeadingStyle}
    font-size: 1.25rem;
    letter-spacing: -0.04rem;
    color: #D8DEE9;
    transition: color 400ms ease-in-out;
`;

export const headingMediumLarge = css`
    ${commonHeadingStyle}
    font-size: 1.125rem;
    letter-spacing: -0.024rem;
    line-height: 1.7778;
    color: #D8DEE9;
    transition: color 400ms ease-in-out;
`;

export const headingMedium = css`
    ${commonHeadingStyle}
    font-size: 1rem;
    letter-spacing: -0.05rem;
    line-height: 1.5;
    color: #D8DEE9;
    transition: color 400ms ease-in-out;
`;

export const headingMediumSmall = css`
    ${commonHeadingStyle}
    font-size: 0.9375rem;
    letter-spacing: -0.019rem;
    line-height: 1;
    color: #D8DEE9;
    transition: color 400ms ease-in-out;
`;

export const headingSmall = css`
    ${commonHeadingStyle}
    font-size: clamp(0.75rem, 3vw, 1rem);
    letter-spacing: -0.016rem;
    line-height: 1.25;
    color: #D8DEE9;
    transition: color 400ms ease-in-out;
    @media (min-width: 768px) {
        letter-spacing: -0.05rem;
        line-height: 1.5;
    }
`;

export const headingExtraSmall = css`
    ${commonHeadingStyle}
    font-size: 0.75rem;
    letter-spacing: -0.016rem;
    line-height: 1.25;
    color: #D8DEE9;
    transition: color 400ms ease-in-out;
`;