import { tailChase } from 'ldrs'

tailChase.register()

export const Loader = ({ size = "40", color = "#E44848" }) => {
    return (
        <l-tail-chase
        size={size}
        speed="1.75"
        color={color}
        ></l-tail-chase>
    )
}