import React from 'react'
import styled from './styled.module.scss'

const NotFound = () => {
  return (
    <div className={styled.parent}>
      <h1
        style={{
          color: '#fff',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        404
        <span className={styled.border} />
        Not Found
      </h1>
    </div>
  )
}

export default NotFound
