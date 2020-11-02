import React from 'react'

function Text(props) {
  const { inputName, inputId, inputRef, error, labelText } = props

  return (
    <div className="form-group">
      <label htmlFor={inputId}>{labelText}</label>
      <input type="text" name={inputName} id={inputId} ref={inputRef} autoComplete="off" spellCheck={false} className="form-control" />
      <small className="form-text text-muted">
        {error || ''}
      </small>
    </div>
  )
}

export default Text
