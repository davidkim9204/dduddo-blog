import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { prependOnceListener } from 'process';
import Layout from '../../components/layout/Layout';
import utilStyles from '../../styles/utils.module.css';

function Post() {
  const router = useRouter();
  console.log(router.query.title);
  return (
    <Layout home={false}>
      <h1>{router.query.title}</h1>
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
