/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react'

function Password(props) {
  const { inputName, inputId, inputRef, error, labelText } = props
  const [show, setShow] = useState(false)

  return (
    <div className="form-group">
      <label htmlFor={inputId}>{labelText}</label>
      <div className="input-group">
        <input type={show ? 'text' : 'password'} name={inputName} id={inputId} ref={inputRef} autoComplete="off" spellCheck={false} className="form-control" />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={() => (setShow(!show))}><i className={`fa ${show ? 'fa-eye-slash' : 'fa-eye'}`} /></button>
        </div>
      </div>
      <small className="form-text text-muted">
        {error || '\u0020'}
      </small>
    </div>
  )
}

export default Password
