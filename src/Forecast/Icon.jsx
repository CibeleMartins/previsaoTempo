
import overcast from '../assets/overcast.svg'

const Icon = ({climateDescription})=> {

   if (climateDescription.toLowerCase() === 'nublado') {
    return (
        <img alt='nublado' src={overcast}/>
    )
   } else {
    return (
        console.log('n deu certo')
    )
   }
}


export default Icon;