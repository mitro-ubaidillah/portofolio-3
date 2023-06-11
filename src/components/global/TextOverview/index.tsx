import './style.css'

type Text = {
    title: string,
    body: string
}

const TextOverview = ({ title, body } : Text) => {
    return(
        <div className='text-start'>
            <h1 className="text-8xl font-bold bordered-underline-gray mb-12">{title}</h1>
            <p className='text-2xl leading-9'>{body}</p>
        </div>
    );
}

export default TextOverview;