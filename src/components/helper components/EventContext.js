import React, { useState } from 'react'
import { createContext } from 'react'

export const Context = createContext('');
const EventContext = (props) => {
    const [eventContext, setEventContext] = useState();

    const contextProps = {
        // eventContext,
        setEventContext
    }

  return (
    <Context.Provider value={contextProps}>{props.children}</Context.Provider>
  )
}

export default EventContext
