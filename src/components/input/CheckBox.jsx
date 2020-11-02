import React from 'react'

function CheckBox(props) {
  const { id } = props

  return (
    <>
      <br />
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id={id} />
        <label className="form-check-label" htmlFor={id}>Show Books</label>
      </div>
    </>
  )
}

export default CheckBox
