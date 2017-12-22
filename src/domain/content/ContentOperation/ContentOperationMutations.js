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
import {ContentOperationInputType} from '../../content/ContentOperation/ContentOperationInputType.js';
import {ContentOperationResponseType} from '../../content/ContentOperation/ContentOperationResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentOperation = {
  type: ContentOperationResponseType,
  description: 'mutation for ofbiz createContentOperation method',
  args:{contentOperationToBeAdded: {type: ContentOperationInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentOperations/add?`, args.contentOperationToBeAdded, req);
  }
};
export {createContentOperation};


const updateContentOperation = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContentOperation method',
  args:{contentOperationToBeUpdated: {type: ContentOperationInputType},contentOperationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentOperations/${args.contentOperationId}?`, args.contentOperationToBeUpdated, req);
  }
};
export {updateContentOperation};


const deleteContentOperationByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContentOperationByIdUpdated method',
  args:{contentOperationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentOperations/${args.contentOperationId}?`, null, req);
  }
};
export {deleteContentOperationByIdUpdated};
