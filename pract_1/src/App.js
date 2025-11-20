import './App.css'
// import ItemComponent from './components/item.component/item.component.jsx'
import { ItemComponent, Header } from './components/index.js'
import { itemData } from './item.data.js'

function App() {

  return (
    <>
      <Header />
      <div className='container'>
        {/* <div className='item'>
          <div className='item-counter-container'>
            <div className='item-counter'>20+</div>
            партнерів
          </div>
          <div className='item-description'>
            ІТ СТЕП Університет співпрацює з провідними ІТ-компаніями, університетами та організаціями світового рівня
          </div>
        </div>
        <div className='item'>
          <div className='item-counter-container'><div className='item-counter'>9+</div> minor-програм та освітніх траєкторій</div>
          <div className='item-description'>
            Кожен студент у нас може вивчати те, що подобається та необхідне саме йому, і скласти для себе власну освітню карту
          </div>
        </div>
        <div className='item'>
          <div className='item-counter-container'><div className='item-counter'>60%</div>студентів навчаються на інтернатурах</div>
          <div className='item-description'>
            Щомісяця ми пропонуємо нашим студентам проходження інтернатур у провідних ІТ компаніях країни та усього світу
          </div>
        </div>
        <div className='item'>
          <div className='item-counter-container'><div className='item-counter'>7</div>місце</div>
          <div className='item-description'>
            по рейтингу ЗНО серед приватних форм власності за 2023 рік. Та 12 серед всіх форм власності
          </div>
        </div> */}
        {/* <ItemComponent counter={4 + 5} title="title-1" description="Dolor ut et minim amet ipsum nisi aliqua ut est veniam fugiat sit."/>
        <ItemComponent counter={2 -2} title="title-2" description="Velit qui voluptate laboris cillum magna aliqua."/>
        <ItemComponent counter={5+67} title="title-3" description="Consequat in voluptate ex ipsum minim exercitation laborum nisi labore dolore."/>
        <ItemComponent counter={46/5} title="title-4" description="Eiusmod ea anim exercitation culpa deserunt."/> */}

        {
          itemData.map(elem => {
            return (
              <ItemComponent
                title={elem.title}
                description={elem.description}
                counter={elem.counter}
                char={elem.char}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default App
