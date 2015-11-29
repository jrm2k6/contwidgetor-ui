# contwidgetor-ui

### Still in development

## What is it?
A simple React component to display a grid showing your open-source contributions a la github

## API
Calling ```require('contwidgetor-ui');``` makes two components available.

```<NoContributionsGrid />``` does not take any props and will just render a simple text.
```<ContributionsGrid contributions={...}/>``` where contributions is a JSON object having items following this form: ```"2015-11-28": 4```. They key being a date and the value being the number of contributions for this date.

## Example
There is a working example in the ```Example``` folder.
To run it:

```
cd Example
npm install
webpack
open index.html
```
