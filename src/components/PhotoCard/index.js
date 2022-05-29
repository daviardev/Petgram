import React from "react";
import { ImgWrapper, Img, Article } from "./styles";
import { FavButton } from '../FavButton'
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { useToggleLikeMutation } from '../../hooks/useToggleLikeMutation'
import { Link } from "@reach/router";

const DEFAULT_IMAGE = ' '

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const [show, element] = useNearScreen()
    const { mutation } = useToggleLikeMutation()
    const key = `like-${id}`
    const [liked, setLiked] = useLocalStorage(key, false)
      const handleFavClick = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }
    
    return (
        <Article ref={element}>
            {
                show && <>
                    <Link to={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src} /> 
                </ImgWrapper>
            </Link>
            <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
            
            </>
            }
        </Article>
    )
}

//FaRegHeart | FaHeart