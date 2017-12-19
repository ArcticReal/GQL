import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';
import {ContentKeywordInputType} from '../../content/ContentKeyword/ContentKeywordInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createContentKeyword = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContentKeyword method',
  args:{contentKeywordToBeAdded: {type: ContentKeywordInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentKeywords/add?`, args.contentKeywordToBeAdded, req);
  }
};
export {createContentKeyword};


const deleteContentKeywordByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContentKeywordByIdUpdated method',
  args:{contentKeywordId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentKeywords/${args.contentKeywordId}?`, null, req);
  }
};
export {deleteContentKeywordByIdUpdated};


const updateContentKeyword = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContentKeyword method',
  args:{contentKeywordToBeUpdated: {type: ContentKeywordInputType},keyword: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentKeywords/${args.keyword}?`, args.contentKeywordToBeUpdated, req);
  }
};
export {updateContentKeyword};
