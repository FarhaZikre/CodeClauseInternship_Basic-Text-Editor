import React from 'react'
import editor from '../assets/editor.mp4'
export default function Navbar() {
    return (
        <>

            <nav class="navbar bg-body-tertiary"> 
                <div class="container-fluid">
                    <img src="./CodeClauseInternship_Basic-Text-Editor/text-logo.png" alt="React Image" />
                </div>
            </nav>
            <div className="main">
                <div className="video-overlay">
                    {/* this is used to add color on video */}
                </div>
                <video src={editor} autoPlay loop muted />
                <div className="content-container">
                    <div className="content">
                        <h1>Text-Editor</h1>
                        <a href="#editor-section">Explore</a>
                    </div>
                </div>
            </div>
        </>
    )
}
