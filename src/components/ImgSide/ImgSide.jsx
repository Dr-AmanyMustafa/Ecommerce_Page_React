import "./ImgSide.css"
import { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


export default function ImgSide() {
    const [mainImage, setMainImage] = useState("../../../public/images/image-product-1.jpg");
    const [open, setOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);

  const handleThumbnailClick = (e) => {
    setMainImage(() => e.target.dataset.url);
    setImageIndex(() => Number(e.target.dataset.index));
  };

    return(
        <>
        <div>
            <div className="img-wrapper">
                <div className="main-img">
                    <img src={mainImage} alt="shoesImg" onClick={() => setOpen(true)} />
                </div>
                <div className="thumbnails">
                    <img 
                        className=
                        {mainImage === "../../../public/images/image-product-1.jpg" ? "active-thumb" : ""}
                        onClick={handleThumbnailClick}
                        data-url="../../../public/images/image-product-1.jpg"
                        data-index="0"                
                        src="../../../public/images/image-product-1-thumbnail.jpg" alt="shoesImgthumb"
                    />
                    <img 
                        className=
                        {mainImage === "../../../public/images/image-product-2.jpg" ? "active-thumb" : ""}
                        onClick={handleThumbnailClick}
                        data-url="../../../public/images/image-product-2.jpg"
                        data-index="1"                
                        src="../../../public/images/image-product-2-thumbnail.jpg" alt="shoesImgthumb"
                    />
                    <img 
                        className=
                        {mainImage === "../../../public/images/image-product-3.jpg" ? "active-thumb" : ""}
                        onClick={handleThumbnailClick}
                        data-url="../../../public/images/image-product-3.jpg"
                        data-index="2"                
                        src="../../../public/images/image-product-3-thumbnail.jpg" alt="shoesImgthumb"
                    />
                    <img 
                        className=
                        {mainImage === "../../../public/images/image-product-4.jpg" ? "active-thumb" : ""}
                        onClick={handleThumbnailClick}
                        data-url="../../../public/images/image-product-4.jpg"
                        data-index="3"                
                        src="../../../public/images/image-product-4-thumbnail.jpg" alt="shoesImgthumb"
                    />               
                </div>
            </div>
            
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={imageIndex}
        slides={[
          {
            src: "../../../public/images/image-product-1.jpg",
            alt: "image 1",
            width: 600,
            height: "auto",
          },
          {
            src: "../../../public/images/image-product-2.jpg",
            alt: "image 1",
            width: 600,
            height: "auto",
          },
          {
            src: "../../../public/images/image-product-3.jpg",
            alt: "image 1",
            width: 600,
            height: "auto",
          },
          {
            src: "../../../public/images/image-product-4.jpg",
            alt: "image 1",
            width: 600,
            height: "auto",
          },
        ]}
      />
    </div>

        </>
    )
};
