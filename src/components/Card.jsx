import React from 'react'

// Layout
import Layout from '../layout/LayoutVH'

function Card(props) {
  const { title, children } = props
  return (
    <Layout>
      <div className="card">
        <div className="card-body">
          <div className="card-title text-center">
            <h4>{title}</h4>
          </div>
          {children}
        </div>
      </div>
    </Layout>
  )
}

export default Card
