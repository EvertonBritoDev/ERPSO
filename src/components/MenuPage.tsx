import { ImgMenuTechAndOptica } from './ImgMenuTechAndOptica'
import { useNavigate } from 'react-router-dom'
function MenuPage() {
  const navigate = useNavigate()
  const openServices = (): void => {
    navigate('/ServicesPage')
  }
  const openInitial = (): void => {
    navigate('/')
  }

  const openResume = (): void => {
    navigate('/ResumePage')
  }

  const openContact = (): void => {
    navigate('/ContactPage')
  }
  /*
  const openChat = (): void => {
    navigate('/Chat')
  }
  */
  return (
    <div className="container-menu">
      <ImgMenuTechAndOptica
        onClick={openInitial}
        className="img-cursor"
      ></ImgMenuTechAndOptica>
      <h5 className="config-text-menu text-hover" onClick={openResume}>
        Quem somos{' '}
      </h5>
      <h5 className="config-text-menu text-hover" onClick={openServices}>
        Serviços{' '}
      </h5>
      <h5 className="config-text-menu text-hover" onClick={openContact}>
        Contato{' '}
      </h5>
    </div>
  )
}

export default MenuPage
