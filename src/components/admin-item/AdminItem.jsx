import { useDispatch } from 'react-redux'
import { removeService, setEditItem } from '../../store/slices/services-slice'
import './AdminItem.scss'

const AdminItem = ({ item }) => {
  const dispatch = useDispatch()

  const onClickRemoveItem = () => {
    dispatch(removeService(item.id))
  }

  const handleClickEditItem = () => {
    const editItem = {
      id: item.id,
      title: item.title,
      price: item.price
    }
    dispatch(setEditItem(editItem))
  }

  return <li className='admin-item'>
    <div className="admin-item__left">
      <div className="admin-item__title">
        {item.title}
      </div>
      <div className="admin-item__price">
        от {item.price}р
      </div>
    </div>
    <div className='admin-item__btns'>
      <button onClick={handleClickEditItem} className="admin-item__btns-item">
        Редактировать
      </button>
      <button onClick={onClickRemoveItem} className="admin-item__btns-item">
        Удалить
      </button>
    </div>
  </li>
}

export default AdminItem