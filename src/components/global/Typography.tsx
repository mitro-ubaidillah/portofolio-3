
type Text = {
    name: string,
    color?: 'dark' | 'white' | 'active' | 'gray',
    textCase: 'uppercase' | 'capitalize' | 'lowercase',
}

const Typography = ({ name, color, textCase }: Text) => {
    return (
        <p
            className={`
                font-light text-xl 
                ${color ? `text-${color}` : 'text-dark'}
                ${textCase}
            `}
        >
            {name}
        </p>
    );
}

export default Typography;