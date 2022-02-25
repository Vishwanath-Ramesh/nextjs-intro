import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import sampleImage from "../../assets/images/sample.png";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Note: {id} </h1>

      <Link href="/notes">
        <a>Notes</a>
      </Link>
      <Image
        src={sampleImage}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
    </div>
  );
};

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(`${process.env.BASE_URL}/notes/${params.id}`);

  if (!response.ok) {
    res.writeHead(302, { Location: "/notes" });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  if (data) {
    return {
      props: { note: data },
    };
  }
}
