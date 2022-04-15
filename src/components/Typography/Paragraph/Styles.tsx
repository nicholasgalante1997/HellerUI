import styled from 'styled-components';
import { NativeParagraphProps } from './types';

export const Paragraph = styled.p<NativeParagraphProps>`
    color: ${(props: NativeParagraphProps) => (props.color ? props.color : 'black')};
    font-family: 'Poppins Regular';
    font-style: normal;
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '1rem')};
    font-weight: 200;
    margin-block-start: 0.25em;
    margin-block-end: 0.25em;
`;

export const ParagraphItalic = styled.p<NativeParagraphProps>`
    color: ${(props: NativeParagraphProps) => (props.color ? props.color : 'black')};
    font-family: 'Poppins Italic';
    font-style: normal;
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '1rem')};
    font-weight: 200;
    margin-block-start: 0.25em;
    margin-block-end: 0.25em;
`;

export const ParagraphBold = styled.p<NativeParagraphProps>`
    color: ${(props: NativeParagraphProps) => (props.color ? props.color : 'black')};
    font-family: 'Poppins Bold';
    font-style: normal;
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '1rem')};
    font-weight: 800;
    margin-block-start: 0.25em;
    margin-block-end: 0.25em;
`;

export const ParagraphBoldItalic = styled.p<NativeParagraphProps>`
    color: ${(props: NativeParagraphProps) => (props.color ? props.color : 'black')};
    font-family: 'Poppins BoldItalic';
    font-style: normal;
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '1rem')};
    font-weight: 800;
    margin-block-start: 0.25em;
    margin-block-end: 0.25em;
`;

export const ParagraphThin = styled.p<NativeParagraphProps>`
    color: ${(props: NativeParagraphProps) => (props.color ? props.color : 'black')};
    font-family: 'Poppins Thin';
    font-style: normal;
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '1rem')};
    font-weight: 500;
    margin-block-start: 0.25em;
    margin-block-end: 0.25em;
`;
