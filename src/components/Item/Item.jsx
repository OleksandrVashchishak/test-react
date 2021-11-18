import './Item.css';

const Item = ({ name, position, description, image }) => {
    return (
        <div className="team__item">
            <div className="team__img-wrapper">
                <img src={image} alt="" className="team__img" />
            </div>
            <div className="team__content">
                <h3 className="team__item-title">{name} </h3>
                <h5 className="team__position">{position}</h5>
                <p className="team__text">{description} </p>
            </div>
        </div>
    );
}

export default Item;