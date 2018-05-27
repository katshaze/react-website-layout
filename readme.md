# Multi-route website layout using React

This project uses React to create a webpage layout with reusable components across multiple routes within a single page app.

## Technologies used
* HTML5
* SCSS
* JavaScript
* React
* Parcel (for bundling & transpiling)

## Why React
* So that common components can be built once and then reused in multiple pages within the site, sending down the relevant content via the parent component through props.
* For example, the Image, Quote, Button and Post components are all reused on multiple pages.
* Easy for me (or other developers) to update

## Accessibility & Responsiveness
I have tried to take into account accessibility and responsiveness in the following ways:
* running an audit on accessibility via Chrome's dev tools (score 91%), which includes checks on things like having alt attributes on image tags etc.
* using Chrome's responsiveness tools to check the site still loads on slower networks
* adding in some responsiveness via media queries in the CSS to allow the site to render better on mobile (further improvements needed)
