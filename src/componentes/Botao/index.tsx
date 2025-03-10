import { ReactElement } from 'react'
import './Botao.css'

interface BotaoPorps {
    children: ReactElement | string
}

const Botao = (props: BotaoPorps) => {
    return (<button className='botao'>
        {props.children}
    </button>)
}

export default Botao