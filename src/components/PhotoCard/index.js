import React from "react";
import { ImgWrapper, Img, Article } from "./styles";
import { FavButton } from '../FavButton'
import { useNearScreen } from "../../hooks/useNearScreen";
import { useToggleLikeMutation } from '../../hooks/useToggleLikeMutation'
import { Link } from "@reach/router";

const DEFAULT_IMAGE = 'https://www.housesitmatch.com/wp-content/themes/petsitter/images/job-placeholder.gif'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
    const [show, element] = useNearScreen()
    const { mutation } = useToggleLikeMutation()
      const handleFavClick = () => {
     mutation({
      variables: {
        input: { id }
      }
    })
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