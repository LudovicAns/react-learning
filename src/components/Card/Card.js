import './Card.css'

function Card(props) {
    let title = props.title ? props.title : 'Title';
    let subtitle = props.subtitle ? props.subtitle : 'Subtitle';

    return (
        <div className="Card">
            <div className="img"></div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    );
}

export default Card;