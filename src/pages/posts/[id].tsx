import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

export const PostPage = () => {
  const { id } = useRouter().query;
  const { data , isLoading} = trpc.useQuery(["posts.findOne", { id: 1 }]);

  console.log(`postId: ${id}`)

  if(isLoading) return <p>...Loading</p>
  if(!data) return <p>Data Not Found</p>

  return (
    <div style={{ margin: '48px', border: '1px solid', padding: '4px' }}>
      <p>id: { data.id }</p>
      <p>title: { data.title }</p>
    </div>
  )
}

export default PostPage;