import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout/layout";
import { sql_query } from "../lib/db";

export async function getStaticProps() {
  try {
    const result = await sql_query(`
      SELECT * FROM themes
  `);

    let allThemeData = JSON.parse(JSON.stringify(result));
    return {
      props: { allThemeData },
    };
  } catch (e) {
    return { props: { allThemeData: false } };
  }
}

export default function Themes(props: any) {
  const { allThemeData } = props;
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="row mt-3">
        <section>
          <h2>Themes</h2>
          <div className="row">
            {allThemeData.map((item: any) => {
              if (item.parent_id == 0) {
                return (
                  <div
                    className="col-6 col-md-4 col-lg-2 my-2 text-center"
                    key={item.id}
                  >
                    <Link href={`/themes/${item.id}`}>
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <Link href={`/themes/${item.id}`}>
                            <a>Learn more</a>
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
}
