import '../sass/ColorChanger.scss'

const ColorChanger = () => {

    const colors = [
        'green',
        'red',
        'blue'
    ]
    
    return (
        <div className="colors-changer">
            <button className="green-button"></button>
            <button className="red-button"></button>
            <button className="cyan-button"></button>
            <button className="blue-button"></button>
            <button className="purple-button"></button>
        </div>
    )
}

export default ColorChanger