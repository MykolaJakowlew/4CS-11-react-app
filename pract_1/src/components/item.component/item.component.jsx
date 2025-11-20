import './item.component.css'

export const ItemComponent = (props) => {
    console.log(props)
    const { counter, title, description, char } = props

    // const classNames = ['item']
    // if (linearGradient) {
    //     classNames.push(linearGradient)
    // }

    return (
        <div className='item'>
            <div className='item-counter-container'>
                <div className='item-counter'>{counter}{char}</div>
                {title}
            </div>
            <div className='item-description'>
               {description}
            </div>
        </div>
    )
}