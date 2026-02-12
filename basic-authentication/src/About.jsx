/* src/Public.js */
import React from 'react'
import Container from './Container'
import './App.css'

function About() {
    return (
        <Container>
            <h1>About Project 5</h1>
                <h2>Serverless Cloud with React - Fall 2025</h2>
                    <div className="about-the-project">
                        <ul>                        
                            <li>Serverless app utlizing Vite, React JSX, React Router, Amplify;</li>
                            <li>Enables basic user authentication with AWS Cognito;</li>
                            <li>Demonstrates the effect of authenticatiion and routing to establish public and protected content areas;</li>
                            <li>Consists of Lab 10's components:  Home-public, Profile-protected, Protected, with the addition of this 
                                information component-public.    
                            </li>
                            <li>Limited use of AI - ChatGPT 5.2 - for help debugging a useEffect issue in the Profile Component that prevented refresh after signOut.</li>
                        </ul>
                    </div>
                    

        </Container>
    )
}

export default About