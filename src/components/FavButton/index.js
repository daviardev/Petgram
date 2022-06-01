import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Button, LikedButton } from "./styles";

export const FavButton = ({ liked, likes, onClick }) => {
    return (
      <Button onClick={onClick}>
        {liked ? <LikedButton size="32px" /> : <FaRegHeart size="32px" />}
        {likes} likes!
      </Button>
    );
  };