import React from 'react'
import { Alert } from 'react-bootstrap'

const Massage = ({variant,children}) => {
  return (
    <div>
<Alert variant={variant}>

    {children}

</Alert>
    </div>
  )
}
Massage.defaultProps={
    variant:'info',
}
export default Massage