import {ReactNode} from 'react'

type CardProps = {
    children: ReactNode,
    title?: string
}

const Card = ({ children, title } : CardProps) => {
    return (
        <div className='drop-shadow-2xl border-2 min-h-[210px] max-w-[390px] p-6 bg-white rounded-lg'>
            <div className='font-medium text-2xl text-font-primary mb-6'>{title}</div>
            <div className='text-lg font-light text-font-primary'>
                {children}
            </div>
        </div>
    )
}

export default Card;
