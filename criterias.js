[{"content":"# Querying for Elements With Different Criteria\n\nReact Testing Library provides many different query functions.  Each begins with a name like `getBy`, `findBy`, etc.  The names also have common endings.  The different name endings indicate how the query for an element will be performed.\n\n| End of Function Name | Search Criteria                                                    |\n|----------------------|--------------------------------------------------------------------|\n| ByRole               | Finds elements based on their implicit or explicit ARIA role       |\n| ByLabelText          | Find form elements based upon the text their paired labels contain |\n| ByPlaceholderText    | Find form elements based upon their placeholder text               |\n| ByText               | Find elements based upon the text they contain                     |\n| ByDisplayValue       | Find elements based upon their current value                       |\n| ByAltText            | Find elements based upon their `alt` attribute                     |\n| ByTitle              | Find elements based upon their `title` attribute                   |\n| ByTestId             | Find elements based upon their `data-testid` attribute             |\n\n## When to Use Each\n\nAlways prefer using query functions ending with `ByRole`.  Only use others if `ByRole` is not an option.","type":"text","id":"88wvz"},{"content":"import { screen, render } from '@testing-library/react';\nimport { useState } from 'react';\n\nfunction DataForm() {\n  const [email, setEmail] = useState('asdf@asdf.com');\n\n  return (\n    <form>\n      <h3>Enter Data</h3>\n\n      <div data-testid=\"image wrapper\">\n        <img alt=\"data\" src=\"data.jpg\" />\n      </div>\n\n      <label htmlFor=\"email\">Email</label>\n      <input\n        id=\"email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n      />\n\n      <label htmlFor=\"color\">Color</label>\n      <input id=\"color\" placeholder=\"Red\" />\n\n      <button title=\"Click when ready to submit\">Submit</button>\n    </form>\n  );\n}\n\nrender(<DataForm />);","type":"code","id":"c4lel"},{"content":"test('selecting different elements', () => {\r\n  render(<DataForm />);\r\n\r\n  const elements = [\r\n    screen.getByRole('button'),\r\n    screen.getByText(/enter/i),\r\n    // or\r\n    screen.getByText('Enter Data'),\r\n\r\n    screen.getByLabelText(/email/i),\r\n    screen.getByPlaceholderText('Red'),\r\n    screen.getByDisplayValue('asdf@asdf.com'),\r\n    screen.getByAltText('data'),\r\n    // or\r\n    screen.getByAltText(/Data/i),\r\n\r\n    screen.getByTitle('Click when ready to submit'),\r\n    // or\r\n    screen.getByTitle(/ready to submit/i),\r\n\r\n    screen.getByTestId('image wrapper')\r\n  ];\r\n\r\n  for (let element of elements) {\r\n    expect(element).toBeInTheDocument();\r\n  }\r\n});\r\n","type":"code","id":"0lamu"},{"content":"this below is just something I wanted to try on my own, (not related to the course video's)","type":"text","id":"pxrvo"},{"content":"import { screen, render } from '@testing-library/react';\nimport { useState } from 'react';\n\nconst Comp = () => {\n  return (\n    <div>\n      <button aria-label= 'button'>\n        <svg />\n      </button>\n    </div>\n  );\n};\n\nrender(<Comp />);","type":"code","id":"dut25"},{"content":"test('get the button with an assigned name', ()=>{\r\n  render(<Comp/>);\r\n  const button = screen.getByRole('button', {name: /button/i});\r\n  \r\n  expect(button).toBeInTheDocument();\r\n})","type":"code","id":"3k261"}]