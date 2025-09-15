import React from 'react'
import { FaTriangleExclamation } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section  className="section">
        <div className='nf-div'>
            <FaTriangleExclamation className='nf-fa'/>
            <h3 className='nf-title'>404</h3>
            <p className='nf-p'>This page is Not Found</p>
            <Link to={'/'}>
                <button className='nf-btn'>Go Back</button>
            </Link>
        </div>
    </section>
  )
}

export default NotFound