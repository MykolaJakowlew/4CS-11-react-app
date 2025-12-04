import { useEffect, useRef, useState } from 'react';
import classes from './login.module.css';
import show from './imgs/view.png'
import hide from './imgs/hide.png'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [passwordState, setPasswordState] = useState('hide')
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  // executed when element will be rendered first time
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/')
    }
  }, [])

  const passwordRef = useRef()
  const emailRef = useRef()

  const singUpHanlder = () => {
    const password = passwordRef.current.value.trim()
    const email = emailRef.current.value.trim()
    // if (password.length == 0) {
    //   setErrors(prevErrors => [...prevErrors, "Password can not be empty"])
    // }

    const errors = []

    if (password.length == 0) {
      errors.push("Password is empty")
    }

    if (email.length == 0) {
      errors.push("Email is empty")
    }

    if (errors.length != 0) {
      setErrors(errors)
      return;
    }

    localStorage.setItem('token', crypto.randomUUID())
    navigate('/')
  }

  return (<>
    <div class="form-container sign-up-container">
      <div className={classes.wrapper}>
        <h1 className={classes.h1}>Login Account</h1>
        <input
          ref={emailRef}
          className={classes.input}
          type="email" placeholder="Email" />
        <div className={classes.password}>
          <input
            ref={passwordRef}
            className={classes.input}
            type={passwordState === 'hide' ? "password" : "text"}
            placeholder="Password"
            onChange={() => setErrors([])}
          />
          <div
            // onMouseDown={() => setPasswordState('show')}
            // onMouseUp={() => setPasswordState('hide')}
            onClick={() => [
              setPasswordState(prev => {
                // if (prev == 'hide') {
                //   return 'show'
                // } else {
                //   return 'hide'
                // }

                // condition ? <value if true> : <value if false>
                return prev == 'hide' ? 'show' : 'hide'
              })
            ]}
            className={classes.passwordIcon}>
            <img src={passwordState == 'hide' ? hide : show} />
          </div>
        </div>
        <div className={classes.errors}>
          {
            errors.map(error => {
              return (<li>{error}</li>)
            })
          }
        </div>
        <div className={classes.buttonWrapper}>
          <button
            onClick={singUpHanlder}
            className={classes.button}
          >Login</button>

          <button
            onClick={() => navigate('/registration')}
            className={classes.button}
          >To registration</button>
        </div>
      </div>
    </div></>);
}

