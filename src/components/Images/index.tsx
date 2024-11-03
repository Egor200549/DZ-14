import './style.css';
import images from '../../images/images.png';

const Images = () => {
    return (
        <section className='images'>
            <img className='images__image' src={images} alt="images" />
        </section>
    )
}

export default Images;