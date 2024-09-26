export default function MouseEvent(){
    return(<h1>Click Me
    onClick={e => console.log('onClick')}
    onMouseEnter={e => console.log('onMouseEnter')}
    onMouseDown={e => console.log('onMouseDown')}
    onMouseOver={e => console.log('onMouseOver')}
    onMouseUp={e => console.log('onMouseUp')}
    onMouseLeave={e => console.log('onMouseLeave')}
    </h1>)
}