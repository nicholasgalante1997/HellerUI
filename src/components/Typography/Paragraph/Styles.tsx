import styled from 'styled-components';
import { NativeParagraphProps } from './types';

export const Paragraph = styled.p<NativeParagraphProps>`
    color: ${(props: NativeParagraphProps) => (props.color ? props.color : 'black')};
    font-family: 'Poppins Regular';
    font-style: normal;
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '1rem')};
    font-weight: 200;
`;

export const ParagraphItalic = styled.p<NativeParagraphProps>`
    color: ${(props: NativeParagraphProps) => (props.color ? props.color : 'black')};
    font-family: 'Poppins Regular';
    font-style: italic;
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '1rem')};
    font-weight: 200;
`;

export const ParagraphBold = styled.p<NativeParagraphProps>`
    color: ${(props: NativeParagraphProps) => (props.color ? props.color : 'black')};
    font-family: 'Poppins Regular';
    font-style: normal;
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '1rem')};
    font-weight: 800;
`;

export const ParagraphBoldItalic = styled.p<NativeParagraphProps>`
    color: ${(props: NativeParagraphProps) => (props.color ? props.color : 'black')};
    font-family: 'Poppins Regular';
    font-style: oblique 45deg;
    font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '1rem')};
    font-weight: 800;
`;
