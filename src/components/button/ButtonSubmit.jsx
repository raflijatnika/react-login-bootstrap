/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'

function ButtonSubmit({ children }) {
  return (
    <button type="submit" className="btn btn-block btn-primary">
      { children }
    </button>
  )
}

export default ButtonSubmit
