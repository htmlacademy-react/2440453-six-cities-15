import { MAX_GALLERY_SIZE } from '../../consts';

type TGalleryProps = {
  images: string[];
}

function Gallery({images}:TGalleryProps) : JSX.Element {
  const imagesList : JSX.Element[] = [];
  if (images) {
    const imagesCount = images.length > MAX_GALLERY_SIZE ? MAX_GALLERY_SIZE : images.length;
    for (let i = 0; i < imagesCount; i++) {
      imagesList.push(
        <div className="offer__image-wrapper " key={images[i]}>
          <img className="offer__image" src={images[i]} key={images[i]} alt="Photo studio"/>
        </div>
      );
    }
  }
  return(
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {imagesList}
      </div>
    </div>
  );
}

export default Gallery;
