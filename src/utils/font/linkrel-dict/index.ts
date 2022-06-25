import { GoogleFontObject } from 'src/@types/linkrel';

export default {
  poppins: {
    fontUrl:
      'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;700&display=swap',
    key: 'g-f-heller-poppins'
  }
} as const as { [x: string]: GoogleFontObject };
