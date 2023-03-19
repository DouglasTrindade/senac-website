import styles from './styles.module.css'

const AboutUs = () => {
  return (
    <>
      <div>
        Início - Quem somos
      </div>
      <div className="img-fluid">
        <img className={`${styles.Img}`} src="images/aboutus-image.png" alt="Thumbnail Quem Somos"></img>        
      </div>
    </>
  )
}

export default AboutUs