import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import icon from "../../images/logo4848.svg"

export default () => {

	const data = useStaticQuery(
		graphql `
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
	)

	return (
		    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
		      <div className="flex items-center text-2xl">
		        <div className="flex w-12 mr-3">
		          <Link to="/" className="navbar-logo" title="Logo">
				     <img src={icon} alt="NaiveInvestor" style={{ width: '48px' }} />
				   </Link>
		        </div>
		        <div class="flex font-bold font-serif text-blue-500 sm:text-2xl text-lg mr-3" >
		        	<Link to="/" >
		        	{data.site.siteMetadata.title}
		        	</Link>
		        </div>
		      </div>
		      <div class="flex">
			      <div class="flex text-sm">
			      	  <div class="flex float-right" >
				       <Link to={`/about/`} >
					      About
					    </Link>
					  </div>  
				   </div>
			   </div>
		      
		    </div>
		)
}