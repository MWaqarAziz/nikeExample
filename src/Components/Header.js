import React from 'react'
import {Link} from 'react-router-dom'
export const Header = () => {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>{ ' '}
          <Link to="launch">Launch</Link>
        </nav>
        Welcome nike website
      </div>
    );
}
