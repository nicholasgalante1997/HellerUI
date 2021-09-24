# Heller UI

![Lil Jon Yeah](https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Flil-jon-gifs&psig=AOvVaw1MiyXNf4ov6t5X1wU5cMRJ&ust=1632541356886000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCfmtDYlvMCFQAAAAAdAAAAABAJ)
## Installation 

To get started, run 

`npm install @nickgdev/hellerui`

or

`yarn add @nickgdev/hellerui`

### Example Usage 
`
import React from 'react';
import { Button } from '@nickgdev/hellerui';

const MySubmitButton = () => {
    const onSubmit = () => {};
    return (
       <Button onClick={onSubmit} color="white" backgroundColor="darkblue">
         <p>Submit</p>
       </Button>
    );
};
`

