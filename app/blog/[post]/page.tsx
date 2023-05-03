type ParamsType = {
  params: {
    post: string;
  };
};

export default async function Page({ params: { post } }: ParamsType) {
  console.log(post);
  return <h1>My Page {post}</h1>;
}


