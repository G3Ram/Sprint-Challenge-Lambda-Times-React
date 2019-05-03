import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  const tab = props.tab;
  let classNameValue = "tab";
  console.log("--------------- tab:: selectedTab " + props.selectedTab);
  console.log("--------------- tab:: props.tab" + props.tab);
  if (props.tab === props.selectedTab) {
    classNameValue = "tab active-tab";
  }
  console.log("------class name value is ----------" + classNameValue);
  return (
    <div
      className={classNameValue}
      onClick={tab => {
        props.onClick(props.tab);
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired
};

export default Tab;
