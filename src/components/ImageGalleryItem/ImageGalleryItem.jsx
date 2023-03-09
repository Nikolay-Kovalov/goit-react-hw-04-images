import { Modal } from "components/Modal/Modal"
import { ImageItem, Image } from "./ImageGalleryItem.styled"
import PropTypes from 'prop-types'
import { useState } from "react"


export const ImageGalleryItem = ({ image, bigImage }) => {
  
 const [isOpen, setIsOpen] = useState(false)

  
 const toggleModal = () => {
    setIsOpen(isOpen  => !isOpen);
  }
  
      return (
        <ImageItem>
            <Image src={image} alt="img" onClick={toggleModal}/>
          {isOpen && <Modal img={bigImage} onClose={toggleModal} />}
        </ImageItem>
    )
  
}




// export class ImageGalleryItem extends Component {
//  state = {
//           isOpen: false,
//  }
  
//   toggleModal = () => {
//     this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
//   }
  

   
//   render() {
//     const { isOpen } = this.state;
//     const { image, bigImage } = this.props;
//       return (
//         <ImageItem>
//             <Image src={image} alt="img" onClick={this.toggleModal}/>
//           {isOpen && <Modal img={bigImage} onClose={this.toggleModal} />}
//         </ImageItem>
//     )
// }   
// }

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  bigImage: PropTypes.string.isRequired
}

