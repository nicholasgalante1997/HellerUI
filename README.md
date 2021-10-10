# Heller UI

![Orr](/src/assets/orr.jpeg)

## Installation

To get started, run

`npm install @nickgdev/hellerui`

or

`yarn add @nickgdev/hellerui`

### Example Usage

```javascript

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

```
