import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`} className={styles.link}>
                {post.heroImage ? (
                <GatsbyImage className={styles.image} alt={post.title} image={post.heroImage?.gatsbyImageData} />
                ) : post.heroGradient ? (
                    <div className={styles.image} style={{ height: 181, background: post.heroGradient }} />
                ) : null}
                <h2 className={styles.title}>{post.title}</h2>
              </Link>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.description.childMarkdownRemark.html,
                }}
              />
              <div className={styles.meta}>
                <small className="meta">{post.publishDate}</small>
                <Tags tags={post.tags} />
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
