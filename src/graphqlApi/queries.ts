import { gql } from '@apollo/client';
import { BLOGPOST_FIELDS_RECURSE, BLOGPOST_FIELDS } from './fragments';

export const GET_BLOGPOST = gql`
${BLOGPOST_FIELDS}
query getBlogPost($stage: Stage!, $where: BlogPostWhereUniqueInput!){
  blogPost(stage: $stage, where: $where){
    ...blogPostFields
	}
}
`;

export const GET_ROOT = gql`
${BLOGPOST_FIELDS_RECURSE}
query getBlogPost($stage: Stage!, $where: BlogPostWhereUniqueInput!){
  blogPost(stage: $stage, where: $where){
    ...blogPostFieldsRecurse
	}
}
`;
