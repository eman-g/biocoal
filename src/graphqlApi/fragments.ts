import { gql } from '@apollo/client';

export const BLOGPOST_FIELDS = gql`
fragment blogPostFields on BlogPost {
  id
  title
  slug
  content {
    markdown
    html
  }
  author {
    name
  }
  publishedAt
  next {
    slug
    title
  }
  banner {
    url
  }
}`;

export const CATEGORY_FIELDS = gql`
fragment blogPostFields on BlogPost {
  id
  title
  slug
}`;


export const BLOGPOST_FIELDS_RECURSE = gql`
${CATEGORY_FIELDS}
fragment blogPostFieldsRecurse on BlogPost {
  ...blogPostFields
  children {
    ...blogPostFields
    children {
      ...blogPostFields
      children {
        ...blogPostFields
        children {
          ...blogPostFields
        }
      }
    }
  }
}
`;


