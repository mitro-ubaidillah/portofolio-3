import {ReactNode} from 'react'

type ContentProps = {
    children: ReactNode,
}

const Content = ({children} : ContentProps) => {
    return (
        <div className='px-20 py-24'>
            {children}
        </div>
    )
}

export default Content;