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
import {ContentSearchResultInputType} from '../../content/ContentSearchResult/ContentSearchResultInputType.js';
import {ContentSearchResultResponseType} from '../../content/ContentSearchResult/ContentSearchResultResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentSearchResult = {
  type: ContentSearchResultResponseType,
  description: 'mutation for ofbiz createContentSearchResult method',
  args:{contentSearchResultToBeAdded: {type: ContentSearchResultInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentSearchResults/add?`, args.contentSearchResultToBeAdded, req);
  }
};
export {createContentSearchResult};


const updateContentSearchResult = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContentSearchResult method',
  args:{contentSearchResultToBeUpdated: {type: ContentSearchResultInputType},contentSearchResultId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentSearchResults/${args.contentSearchResultId}?`, args.contentSearchResultToBeUpdated, req);
  }
};
export {updateContentSearchResult};


const deleteContentSearchResultByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContentSearchResultByIdUpdated method',
  args:{contentSearchResultId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentSearchResults/${args.contentSearchResultId}?`, null, req);
  }
};
export {deleteContentSearchResultByIdUpdated};
