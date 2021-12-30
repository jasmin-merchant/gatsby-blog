import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <main>
            <title>About Me</title>
            <h1>About Me!</h1>
            <Link to="/">Back to Home</Link>
            <p>Hey there! I'm building this site using Gatsby & hosting on Gatsby cloud and it's awesome!!</p>
        </main>
    )
}

export default AboutPage