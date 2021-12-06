import Link from 'next/link';

interface post {
  title: string;
  id: string;
}

function PostLink(props: post) {
  return (
    <li>
      <Link href={`/post/${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
}

export default PostLink;
