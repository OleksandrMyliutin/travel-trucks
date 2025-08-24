import s from './Hero.module.css'
import Button from '../Button/Button'

const Hero = () => {
    return (
        <>
            <div className={s.heroContainer}>
                <div className={s.title}>
                    <div className={s.text}>
                        <h1>Campers of your dreams</h1>
                        <p>You can find everything you want in our catalog</p>
                    </div>
                    <Button link to='/catalog'>View Now</Button>
                </div>
            </div>
        </>
    )
}

export default Hero
