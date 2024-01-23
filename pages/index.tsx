import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Counters from '../components/counters'
import Header from '../components/header'
import RacesTable from '../components/races-table'
import AboutCampaign from '../components/aboutCampaign'
import { getAllPostsForHome } from '../lib/api'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  const [csvData, setCsvData ] = useState([]);

  useEffect(() => {
      fetchCsvData()
  }, []);

  const fetchCsvData = () => {
      const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR5EHXb8xjUUUTRehRkuMXXKMOlU-VvGTSNMhFBhrHGlcraKkmPfq9hZQb7aTYcgm6_MWjye0BZXNVf/pub?output=csv';

      axios.get(csvUrl)
      .then((response) => {
          const parsedCsvData = parseCsv(response.data);
          setCsvData(parsedCsvData);
      })
      .catch((error) => {
          console.error('Error fetching CSV data: ', error)
      })
  }

  function parseCsv(csvText) {
      const rows = csvText.split(/\r?\n/);        // Use a regular expression to split the CSV text into rows while handling '\r'
      const headers = rows[0].split(',');        // Extract headers (assumes the first row is the header row)
      const data = [];        // Initialize an array to store the parsed data
      for (let i = 1; i < rows.length; i++) {
          const rowData = rows[i].split(',');          // Use the regular expression to split the row while handling '\r'
          const rowObject = {};
          for (let j = 0; j < headers.length; j++) {
              rowObject[headers[j]] = rowData[j];
          }
          data.push(rowObject);
      }
      return data;
  }
  
  const donors = csvData[0]?.currentlyDonors;

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Alerg pentru Sanctuarul Nima`}</title>
      </Head>
      <Container>
        <Header />
        <Intro donors={donors} /> 
        <Counters donors={donors} />
        <AboutCampaign />
        <RacesTable />
        {/* {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
