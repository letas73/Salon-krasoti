import { useEffect, useState } from 'react'
import AdminList from '../../components/admin-list/AdminList'
import HeaderPage from '../../components/header-page/HeaderPage'
import { useDispatch, useSelector } from 'react-redux'
import './Admin.scss'
import { createService, editService } from '../../store/slices/services-slice'

const Admin = () => {
  const dispatch = useDispatch()
  const editItem = useSelector((state) => state.services.editItem)
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangePrice = (e) => {
    setPrice(e.target.value)
  }

  const onClickAddService = () => {
    const item = {
      id: Math.random() * (50 - 6) + 6,
      title,
      price: +price
    }
    dispatch(createService(item))
    setTitle('')
    setPrice(0)
  }

  const onClickEditService = () => {
    const dto = {
      id: editItem.id,
      title,
      price
    }
    dispatch(editService(dto))
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      setPrice(editItem.price)
    }
  }, [editItem])

  return <div className='admin'>
    <div className="admin__container">
      <HeaderPage title='Админ панель' />
      <div className='admin__form'>
        <input
          type='text'
          placeholder='Название'
          className='admin__form-input'
          onChange={handleChangeTitle}
          value={title}
        />
        <input
          type='number'
          placeholder='Цена'
          className='admin__form-input'
          onChange={handleChangePrice}
          value={price}
        />
        <button onClick={editItem ? onClickEditService : onClickAddService} className='admin__form-btn'>
          {
            editItem ? 'Редактировать' : 'Добавить'
          }
        </button>
      </div>
      <AdminList/> 
    </div>
  </div>
}

export default Admin