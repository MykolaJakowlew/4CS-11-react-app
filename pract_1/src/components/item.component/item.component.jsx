import "./item.component.css"

// item.component.jsx
export const ItemComponent = (props) => {
  const { title, count, description } = props
  return (
    <div className='item'>
      <div className='item-counter-container'>
        <div className='item-counter'>{count}%</div>
        {title}
      </div>
      <div className='item-description'>
        {description}
      </div>
    </div>
  )
}