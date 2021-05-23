import React from 'react';

function Login(prop) {
    return (
        <section>
            <div className='container'>

            {prop.hasAccount ? <h3>Sign In</h3> : <h3>Sign Up</h3>}
            

            <div className='input-box'>
                <input type='text' required autoFocus placeholder='Email Address' value={prop.email} onChange={e => prop.setEmail(e.target.value)}/>
                <i className='fas fa-user'></i>
            </div>
            <p className='warning'>{prop.emailError}</p>

            <div className='input-box'>
                <input type='password' required placeholder='Password' value={prop.password} onChange={e => prop.setPassword(e.target.value)}/>
                <i className="fas fa-lock"></i>
            </div>
            <p className='warning'>{prop.passwordError}</p>


            {
               prop.hasAccount ? (<button className='btn' onClick={prop.handleLogin}>
               Sign In
           </button>) : (<button className='btn'  onClick={prop.handleSignup}>
               Sign Up
           </button>)
            }

            <p className='info'>Already own an account?  
            <span onClick={() => {prop.setHasAccount(!prop.hasAccount)}}>{prop.hasAccount ? ' Sign Up' : ' Sign In'}</span>
            </p>

            </div>

        </section>
    );
}

export default Login;