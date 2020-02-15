import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout/layout"

export default ({data}) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
        Welcome! My name is Avinash. I consider myself an amateur and still naive trader who has been actively dipping his toes in the public markets since 2010. And yet, I feel like i have only scratched the surface of what's available to us.
    </p>
    
    <p>
        I started out by investing in broad market ETF that tracked major indexes as they were cost effective way to invest while learning the ropes of investing. As more of the market became available to the general public through cheaper commission rates and balance requirement, I started exploring other forms of securities such as direct stock purchase of publicly listed companies to more recently exploring the options markets.
    </p>

    <p>
        As is the case with all beginners, I have made quite a few mistakes while learning to trade. Some small while others rather large. I see it as the cost of learning. Lessons learnt by this Naive Investor.
    </p>

    <p>
        Sharing one's knowledge and lessons is the best way to remember it. Hence 'I'm dedicating this blog as a space to capture those lessons I learnt through these potentially bad investments as well as share my thoughts on day to day financial events. I hope others find it helpful in their journey to be a a better investor!
    </p>

    <p>
      <b>Disclaimer</b>: 
    </p>

    <p>
        Ideas and Thoughts expressed in on this site are just that.. <b><i>Thoughts!</i></b> They are in no way intended to be advice or recommendations on securities and/or general stock investments. Trading in securities is inherently risky business. Please consult with your financial advisor on any investment decision you make.
    </p>
  
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
