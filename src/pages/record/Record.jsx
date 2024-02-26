import HeaderPage from '../../components/header-page/HeaderPage'
import './Record.scss'

const Record = () => {
  return <div className="record">
    <div className="record__container">
      <HeaderPage title='Записаться онлайн' />
      <form className='record__form'>
        <input type='text' placeholder='Имя' className='record__input' />
        <input type='phone' placeholder='Номер телефона' className='record__input' />
        <button className='record__submit'>
          Записаться
        </button>
      </form>
    </div>
  </div>
}

export default Record