import Image from 'next/image'
import TopNav from "../src/components/TopNav";
import appDetails from "../config/appDetails";
import Head from "next/head";


export default function Home() {
  return (
    <div >
      <Head>
        <title>{appDetails.title}</title>
        <meta name="description" content={appDetails.metaDescription} />
      </Head>


      <TopNav/>

     <main className="flex h-100 w-100 text-xl">
      
     </main>

    </div>
  )
}
