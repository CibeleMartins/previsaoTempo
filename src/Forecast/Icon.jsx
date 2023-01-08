
// day
import nublado from '../assets/nublado.svg'
import ceuLimpo from '../assets/ceuLimpo.svg'
import poucasNuvens from '../assets/poucasNuvens.svg'
import nuvensDispersas from '../assets/nuvensDispersas.svg'
import nuvensQuebradas from '../assets/nublado.svg'
import chuvaDeBanho from '../assets/chuvaDeBanho.svg'
import chuva from '../assets/chuva.svg'
import trovoada from '../assets/trovoada.svg'
import neve from '../assets/neve.svg'
import nevoa from '../assets/névoa.svg'

// night
import ceuLimpoNoite from '../assets/ceuLimpoNoite.svg'
import poucasNuvensNoite from '../assets/poucasNuvensNoite.svg'
import nuvensDispersasNoite from  '../assets/nuvensDispersas.svg'
import nuvensQuebradasNoite from  '../assets/nublado.svg'
import chuvaDeBanhoNoite from  '../assets/chuvaDeBanhoNoite.svg'
import chuvaNoite from  '../assets/chuvaNoite.svg'
import trovoadaNoite from  '../assets/trovoadaNoite.svg'
import neveNoite from   '../assets/neve.svg'
import nevoaNoite from  '../assets/névoa.svg'


const dayIcons = [nublado, ceuLimpo, poucasNuvens, nuvensDispersas, nuvensQuebradas, chuvaDeBanho, chuva, trovoada, neve, nevoa  ]

dayIcons.map((i)=> {
    if (i.includes('nublado')){
        return console.log(i)
    }
})

const Icon = ({climateDescription, className})=> {

   if (climateDescription.toLowerCase() === 'nublado') {
    return (
        <img className={className} alt='nublado' src={nevoaNoite}/>
    )
   } else if(climateDescription.toLowerCase() === 'céu limpo') {
    return (
        console.log('n deu certo')
    )
   }
}


export default Icon;