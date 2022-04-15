import styled from 'styled-components';
import { StyledHeaderProps } from './types';

export const H1 = styled.h1<StyledHeaderProps>`
    color: ${(props: StyledHeaderProps) => (props.color ? props.color : 'black')};
    font-family: 'Poppins Bold';
    font-size: 3.5rem;
    font-weight: ${(props) => props.scale};
    margin-block-start: 0px;
    margin-block-end: 0px;
`;

export const H2 = styled.h2<StyledHeaderProps>`
    color: ${(props: StyledHeaderProps) => (props.color ? props.color : 'black')};
    font-family: 'Poppins Bold';
    font-size: 3rem;
    font-weight: ${(props) => props.scale};
    margin-block-start: 0px;
    margin-block-end: 0px;
`;

export const H3 = styled.h3<StyledHeaderProps>`
    color: ${(props: StyledHeaderProps) => (props.color ? props.color : 'black')};
    font-family: 'Poppins Bold';
    font-size: 2.5rem;
    font-weight: ${(props) => props.scale};
    margin-block-start: 0px;
    margin-block-end: 0px;
`;

export const H4 = styled.h4<StyledHeaderProps>`
    color: ${(props: StyledHeaderProps) => (props.color ? props.color : 'black')};
    font-family: 'Poppins Bold';
    font-size: 2rem;
    font-weight: ${(props) => props.scale};
    margin-block-start: 0px;
    margin-block-end: 0px;
`;

export const H5 = styled.h5<StyledHeaderProps>`
    color: ${(props: StyledHeaderProps) => (props.color ? props.color : 'black')};
    font-family: 'Poppins Bold';
    font-size: 1.5rem;
    font-weight: ${(props) => props.scale};
    margin-block-start: 0px;
    margin-block-end: 0px;
`;

export const H6 = styled.h6<StyledHeaderProps>`
    color: ${(props: StyledHeaderProps) => (props.color ? props.color : 'black')};
    font-family: 'Poppins Bold';
    font-size: 1rem;
    font-weight: ${(props) => props.scale};
    margin-block-start: 0px;
    margin-block-end: 0px;
`;
