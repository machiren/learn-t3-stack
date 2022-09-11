import { trpc } from "../../utils/trpc";

export const PostsPage = () => {
  const { data , isLoading} = trpc.useQuery(["posts.findMany"]);

  if(isLoading) return <p>...Loading</p>
  if(!data) return <p>Data Not Found</p>

  return data.map(d => {
    return (
      <div key={d.id} style={{ margin: '48px', border: '1px solid', padding: '4px' }}>
        <p>id: { d.id }</p>
        <p>title: { d.title }</p>  
      </div>
    )
  });
}

export default PostsPage;
