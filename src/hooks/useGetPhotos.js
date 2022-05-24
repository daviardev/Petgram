import { useQuery, gql } from "@apollo/client";

export const useGetPhotos = (categoryId) => {
    const get_Photos = gql`
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
          id
          categoryId
          src
          likes
          userId
          liked
        }
      }
    `

    const { loading, error, data } = useQuery(get_Photos, {
        variables: { categoryId },
    })

    return { loading, error, data }
}