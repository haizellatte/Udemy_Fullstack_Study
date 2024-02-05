import Profile from "./Profile";

interface PostProps {
  post: {
    title: string;
    content: string;
  };
}

function Post({ post }: PostProps) {
  const { title, content } = post;

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <Profile name="심효은" nickname="졸려Zzzzz" age={20} gender="female" />
    </div>
  );
}

export default Post;
