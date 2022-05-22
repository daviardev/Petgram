import React, { useEffect ,useState } from "react";
import { Category } from '../Category'
import { List, Item } from './styles'
export const ListOfCategories = ()=>{
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    window.fetch('https://petgram-server-daxter-ivf8j1no5-daxtergd.vercel.app/categories')
    .then(res => res.json())
    .then(response => {
      setCategories(response)
    })
  }, [])
  const [showFixed, setShowFixed] = useState(false)

  useEffect(()=>{
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      console.log(newShowFixed)
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)
  })

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category=><Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}