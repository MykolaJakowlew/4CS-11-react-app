import { useState } from 'react'
import classes from './search.module.css'

export const Search = () => {
  const [searchValue, setSearchValue] = useState('')

  const onKeyUp = (event) => {
    console.log("press", event.key)
  }

  const onChangeHandler = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <>
      <div className={classes.container}>
        <input
          type="input"
          className={classes.field}
          placeholder="Name"
          name="name"
          id='name'
          value={searchValue}
          onKeyUp={onKeyUp}
          onChange={onChangeHandler}
        />
        <label for="name" className={classes.label}>Name</label>
      </div>
    </>
  )
}