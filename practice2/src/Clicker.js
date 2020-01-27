import React, { Component } from 'react';

export default function Clicker() {
    function handleClick(e) {
        alert('berhasil mengklik!');
        e.preventDefault();
    }

    return (
        <a href="#" onClick={handleClick}> Klik Bro Sis</a>
    );
}