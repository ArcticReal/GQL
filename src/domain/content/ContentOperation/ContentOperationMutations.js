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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createContentOperation = {
  type: GraphQLString,
  description: 'mutation for ofbiz createContentOperation method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentOperations/add?`, null, req);
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
