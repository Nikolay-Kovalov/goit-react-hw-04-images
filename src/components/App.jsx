import { getImages } from "api";
import { LoadMoreButton } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Layout } from "./Layout/Layout";
import { Loader } from "./Loader/Loader";
import { Searchbar } from "./Searchbar/Searchbar";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import { useEffect } from "react";


export const App = () => {

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuerry, setSearchQuerry] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalHits, setTotalHits] = useState('');
  

  
  const setToastAlert = () => {
       const notify = () => toast('Введите пожалуйста Ваш запрос', {  position: 'top-right', style: {backgroundColor: 'red', color: 'white'}});
      return notify()
  }
  
  const showSearchQuerry = (querry) => {
    setSearchQuerry(querry);
    setImages([]);
    setPage(1);
    setError(null);
  }

  const loadMore = () => {
 fetchImage(searchQuerry, page)
  }

  const fetchImage = async (querry, page) => {
   
    setIsLoading(true)
    
    try {
      const image = await getImages(querry, page)
        setImages(prevImages => [...prevImages, ...image.data.hits])
        setPage(prevPage => prevPage + 1)
        setTotalHits(image.data.totalHits)
    }
    catch (error) {
      setError('Что-то пошло не так. Перезагрузите пожалуйста страницу!')
    }
    finally { setIsLoading(false) }
    
  }

  useEffect(() => {
    if (searchQuerry === '') {
      return
    }
    fetchImage(searchQuerry, page)
  }, [searchQuerry, page]) 


    return (

      <Layout>
        <Searchbar
        onSubmit = {showSearchQuerry}
        />
        {error && <p style={{fontSize: 24, color: 'red', textAlign: 'center'}}>{error}</p>}
        {searchQuerry && <ImageGallery
        Images={images}
        />}
        {images.length > 0 && images.length < totalHits && <LoadMoreButton text="Load more" onClickButton={loadMore} />}
        {isLoading && <Loader />}
        {images.length === totalHits && <p style={{fontSize: 36, textAlign: 'center'}}>Это были все фотографии по Вашему запросу</p>}
    <Toaster autoClose={3000} />
      </Layout>
    )
  
}





