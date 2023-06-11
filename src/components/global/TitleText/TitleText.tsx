import './style.css';

type Text = {
    title: string
}

const TitleText = ({ title } : Text) => {
    return (
        <div className="text-4xl text-dark font-semibold bordered-underline">
            {title}
        </div>
    );
}

export default TitleText;