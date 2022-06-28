import React from 'react';
import Link from 'next/link';

function Rating() {
  return (
    <div className="rating-wrapper">
    <div className="rating">
    98
    </div>
    <p>
        <Link href="/">
         Read review
        </Link>
    </p>
    </div>
  )
}

export default Rating