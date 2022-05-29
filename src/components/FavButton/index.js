import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Button } from "./styles";

export const FavButton = ({ liked, likes, onClick }) => {
    const Icon = liked ? FaRegHeart : FaHeart

    return <Button onClick={onClick}>
        <Icon size='32px' /> {likes} likes!
    </Button>
}