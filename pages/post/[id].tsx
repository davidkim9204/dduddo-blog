import Head from 'next/head';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/layout/Layout';
import utilStyles from '../../styles/utils.module.css';
import { getAllPostIds, getPostData } from '../../lib/posts';
import { PostContent } from '../../model/posts';
interface postData {
  postData: PostContent;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const postData = await getPostData(context?.params?.id);
  return {
    props: {
      postData,
    },
  };
};

function Post({ postData }: postData) {
  return (
    <Layout home={false}>
      {postData.title}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml! }} />
      <div className={utilStyles.backToHome}>
        <Link href="/">
          <a>← Back to posts</a>
        </Link>
      </div>
    </Layout>
  );
}
// export default function Posts() {
//   return (
//     <Layout home={false}>
//       <Head>
//         <title>About Us</title>
//       </Head>
//       글들이 보일 곳
//       <div className={utilStyles.backToHome}>
//         <Link href="/posts">
//           <a>← Back to posts</a>
//         </Link>
//       </div>
//     </Layout>
//   );
// }
export default Post;
