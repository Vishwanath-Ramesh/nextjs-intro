import React from 'react'
import Link from 'next/link'
import Button from '../components/button'

export default () => (
  <div>
    <h1>Index page</h1>

    <Link href="/notes">
      <a>Notes</a>
    </Link>
    <Button label="Dummy button" />
  </div> 
)