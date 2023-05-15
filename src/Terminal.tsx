import * as React from 'react'
import { XTerm } from 'xterm-for-react';

export const Terminal = () => {
   const xtermRef = React.useRef<XTerm>(null)

   React.useEffect(() => {
      // You can call any method in XTerm.js by using 'xterm xtermRef.current.terminal.[What you want to call]
      xtermRef.current?.terminal?.writeln("Hello, World!")
   }, [])

   return (
      // Create a new terminal and set it's ref.
      <XTerm ref={xtermRef} />
   )
}
