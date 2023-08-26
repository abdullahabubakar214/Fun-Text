import React from 'react';

export default function Alert(props) {
  const getAlertBackgroundColor = () => {
    if (props.alert.type === 'success') {
      return 'green'; // Custom background color for success alerts
    } else if (props.alert.type === 'error') {
      return 'red'; // Custom background color for error alerts
    } else {
      return 'yellow'; // Default background color for other alert types
    }
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} text-${
          props.mode === 'black' ? 'white' : 'black'
        }`}
        style={{ backgroundColor: getAlertBackgroundColor() }}
        role="alert"
      >
        <strong>{props.alert.type}</strong> {props.alert.msg}
      </div>
    )
  );
}
