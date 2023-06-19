
type Text = {
    name: string,
    color?: 'dark' | 'white' | 'active' | 'gray',
    textCase?: 'uppercase' | 'capitalize' | 'lowercase',
    size? : 'base' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl',
    fontWeight?: 'light' | 'medium' | 'semibold' | 'bold',
    className?: string,
}

const Typography = ({ name, color, textCase, size, fontWeight, className }: Text) => {
    return (
        <p
            className={`${color ? `text-${color}` : 'text-dark'} ${textCase ? textCase : ''} ${size ? `text-${size}` : 'text-base'} ${fontWeight ? `font-${fontWeight}` : 'font-normal'} ${className ? className : ''}`}
        >
            {name}
        </p>
    );
}

export default Typography;