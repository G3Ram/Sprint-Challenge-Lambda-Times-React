##What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
React propTypes are essentially a dictionary where you define what props your component needs and
what types they should be.

When working in a bigger project we will have many complex components. If a fellow developer wants to use
a child component he needs to know what properties the ChildComponent will have so that his code functions
properly. He will need to search the component code for usages of this.props object and figure out what would
be the property types of the props. If the propTypes are defined, then the fellow developer will know
by reading the propTypes what properties will be available and their types as well.

Also, propTypes helps to check if the data coming from the API is as per the requirements of the function. if the
function is expecting a number and if a string is passed then there is a high chance for the code to break. if
the propertytypes are defined and checked, this can be avoided.

##Describe a life-cycle event in React?
Every React Component has a lifecycle of its own, lifecycle of a component can be defined as the
series of methods that are invoked in different stages of the component’s existence.

1. Initialization: This is the stage where the component is constructed with the given Props and default state.
   This is done in the constructor of a Component Class.
2. Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.
3. Updating: Updating is the stage when the state of a component is updated and the application is repainted.
4. Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.

React provides the developers a set of predefined functions that if present is invoked around specific events in the lifetime of the component.
Developers are supposed to override the functions with desired logic to execute accordingly. Ex. of a few methods are ComponentWillMount(),
ComponentDidMount(), ComponentWillUnmount()

##Explain the details of a Higher Order Component?
A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of
the React API. They are a pattern that stems from React’s nature that privileges composition over inheritance.
a higher-order component is a function that takes (wraps) a component and returns a new component.
The main purpose of a higher-order component in React is to share common functionality between components without repeating code.

##What are three different ways to style components in React? Explain some of the benefits of each.

1. CSS Stylesheet - This is the normal styling method where we have all the styles in a .css file and import it into
   the .js. This styling is beneficial as it is not dependent on any framework.
2. In-line styling - This type of styling is beneficial to override any of the framework styling.
3. Styled component - Styled-components is a library for React and React Native that allows us to use
   component-level styles in our application that are written with a mixture of JavaScript and CSS. This
   type of styling helps developer as there will be not need for a .css file and everything can be accomplished as a .js
   file.
4. React-strap - This is a styling provided by react. This is a framework written on top of bootstrap. There are
   predefined buttons and other features that could come in handy with minimal efforts in styling.
