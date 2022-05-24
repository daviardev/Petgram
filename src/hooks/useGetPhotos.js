import { useQuery, gql } from "@apollo/client";

export const useGetPhotos = (id) => {
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
        variables: { id },
    })

    return { loading, error, data }
}