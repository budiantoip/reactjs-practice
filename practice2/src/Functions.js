import React, { Component } from 'react';

export default function Biodata(props) {
    return <span> {props.name} umurnya {props.age} </span>;
}

export function Greeting(props) {
    return <h1> Halo {props.name} <Biodata age={props.age} />  </h1>;
}