import { Link } from 'react-router-dom';

import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <Link className='directory-item-container' to={`shop/${title}`}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='body'>
        {title}
        <p>Shop Now</p>
      </div>
    </Link>
  );
};

export default DirectoryItem;
