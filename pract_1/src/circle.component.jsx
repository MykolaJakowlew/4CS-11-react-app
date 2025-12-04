import { useRef, useState } from "react"

// circle.component.jsx
export const Circle = (props) => {
  const { color } = props
  return (
    <div className="circle" style={{ backgroundColor: color }}></div>
  )
}


export const Component = () => {
  const [isPressed, setIsPressed] = useState(false)
  const input = useRef();
  let message = "<empty>"
  if (isPressed) {
    message = input.current.value
  }
  const handleKeyUp = event => {
    if (event.key === 'Enter') {
      setIsPressed(true)
    }
  }
  return (
    <div style={{color: 'white'}}>
      <input
        placeholder="Type a text and press enter"
        ref={input}
        onKeyUp={handleKeyUp}
      />
      <div>message: {message}</div>
    </div>
  );
}
