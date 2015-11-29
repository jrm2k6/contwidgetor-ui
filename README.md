# contwidgetor-ui
[https://cloud.githubusercontent.com/assets/1088099/11459292/2b15ccce-9688-11e5-9c38-f42afb2a84a5.png]


### Still in development

## What is it?
A simple React component to display a grid showing your open-source contributions a la github

## API
Calling ```require('contwidgetor-ui');``` makes two components available.

```<NoContributionsGrid />``` does not take any props and will just render a simple text.
```<ContributionsGrid contributions={...}/>``` where contributions is a JSON object.

The JSON object has items of this form:```"2015-11-28": 4```. 
The key is a date and the value being the number of contributions for this date.

## Example
There is a working example in the ```Example``` folder.
To run it:

```
cd Example
npm install
webpack
open index.html
```
