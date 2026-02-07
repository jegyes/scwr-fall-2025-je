/*src/Container.js*/ 
/*container component centers the content in the page display*/

import React from 'react'

const Container = ({ children }) => (
    <div style={styles.container}>
        { children }
    </div>
)

const styles = {
    container: {
        margin: '0 auto',
        padding: '50px 100px'
    }
}

export default Container