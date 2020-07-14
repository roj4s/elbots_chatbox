import React from 'react';


import './avatarbar.css';

export default function AvatarBar({image, title, subtitle}) {

    return (
        <div className="AvatarBar">
            <img className="AvatarBarImage" src={image} />
            <div className="AvatarBarTitlesContainer">
                <span className="AvatarBarTitle">{title}</span>
                <span className="AvatarBarSubtitle">{subtitle}</span>
            </div>
        </div>
    );

}