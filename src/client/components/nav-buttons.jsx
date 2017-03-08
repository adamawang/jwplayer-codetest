import React, { Component } from 'react';


export const NextArrow = function(props) {
  return (
    <div {...props}>
      <img
        className="icon-style"
        src="../../icons/arrow-right.svg"
      />
    </div>
  );
};

export const PrevArrow = function(props) {
  return (
    <div {...props}>
      <img
        className="icon-style"
        src="../../icons/arrow-left.svg"
      />
    </div>
  );
};
