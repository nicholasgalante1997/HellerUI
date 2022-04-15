import '@nickgdev/hellerui/lib/index.css';
import '@nickgdev/hellerui/lib/themes/dark.css';
import '@nickgdev/hellerui/lib/themes/pinched.css';
import '@nickgdev/hellerui/lib/themes/font.css';

const app = document.getElementById('app');

const heading = document.createElement('h1');
heading.setAttribute('class', 'heading');
heading.textContent = 'hellerui';

const divider = document.createElement('hr');
divider.setAttribute('style',
  'margin-left:0px;margin-bottom:0.75rem;width:25%;color:white;align-self:start;');

const paragraph = document.createElement('p');
paragraph.setAttribute('class', 'paragraph');
paragraph.textContent = 'a design system that wants to live!';

app.appendChild(heading);
app.appendChild(divider);
app.appendChild(paragraph);
