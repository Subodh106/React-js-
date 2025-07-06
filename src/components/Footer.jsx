import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
            <p>
                &copy; {new Date().getFullYear()} My Website. All rights reserved.
            </p>
        </footer>
    </div>
  )
}

export default Footer