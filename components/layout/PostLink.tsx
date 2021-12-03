import Link from 'next/link';

interface post {
  title: string;
  id: string;
}

function PostLink(props: post) {
  return (
    <li>
      <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
}

export default PostLink;
