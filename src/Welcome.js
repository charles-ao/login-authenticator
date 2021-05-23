import React from 'react'

 function Welcome(prop) {
    return (
        <section>
            <div className='container'>
                <h2>Welcome!</h2>
                <button className='btn' onClick={prop.handleLogout}>Log Out</button>
            </div>
        </section>
    )
}

export default Welcome;
