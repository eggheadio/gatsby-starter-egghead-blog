import React from 'react'
import Link from './Link'
import { StaticQuery, graphql } from 'gatsby'
import theme from '../lib/theme'
import { css } from '@emotion/core'

const Twitter = ({ url, color }) => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            social {
              twitterUrl
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata } }) => {
      const { twitterUrl } = siteMetadata.social
      const to = url || twitterUrl
      const textColor = color || theme.colors.body_color
      return (
        <Link
          to={to}
          css={css`
            color: ${textColor};
            margin-left: 10px;
            :hover {
              color: ${theme.brand.primary};
            }
          `}
          aria-label="Visit my Twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 24 20"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M24,2.96470588 C23.1,3.40941176 22.2,3.55764706 21.15,3.70588235 C22.2,3.11294118 22.95,2.22352941 23.25,1.03764706 C22.35,1.63058824 21.3,1.92705882 20.1,2.22352941 C19.2,1.33411765 17.85,0.741176471 16.5,0.741176471 C13.95,0.741176471 11.7,2.96470588 11.7,5.63294118 C11.7,6.07764706 11.7,6.37411765 11.85,6.67058824 C7.8,6.52235294 4.05,4.59529412 1.65,1.63058824 C1.2,2.37176471 1.05,3.11294118 1.05,4.15058824 C1.05,5.78117647 1.95,7.26352941 3.3,8.15294118 C2.55,8.15294118 1.8,7.85647059 1.05,7.56 C1.05,7.56 1.05,7.56 1.05,7.56 C1.05,9.93176471 2.7,11.8588235 4.95,12.3035294 C4.5,12.4517647 4.05,12.4517647 3.6,12.4517647 C3.3,12.4517647 3,12.4517647 2.7,12.3035294 C3.3,14.2305882 5.1,15.7129412 7.35,15.7129412 C5.7,17.0470588 3.6,17.7882353 1.2,17.7882353 C0.75,17.7882353 0.45,17.7882353 0,17.7882353 C2.25,19.1223529 4.8,20.0117647 7.5,20.0117647 C16.5,20.0117647 21.45,12.6 21.45,6.22588235 C21.45,6.07764706 21.45,5.78117647 21.45,5.63294118 C22.5,4.89176471 23.4,4.00235294 24,2.96470588 Z"
            />
          </svg>
        </Link>
      )
    }}
  />
)

export default Twitter
