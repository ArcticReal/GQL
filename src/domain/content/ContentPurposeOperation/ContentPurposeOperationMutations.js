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
import {ContentPurposeOperationResponseType} from '../../content/ContentPurposeOperation/ContentPurposeOperationResponseType.js';
import {ContentPurposeOperationInputType} from '../../content/ContentPurposeOperation/ContentPurposeOperationInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentPurposeOperation = {
  type: ContentPurposeOperationResponseType,
  description: 'mutation for ofbiz createContentPurposeOperation method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentPurposeOperations/add?`, null, req);
  }
};
export {createContentPurposeOperation};


const deleteContentPurposeOperationByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContentPurposeOperationByIdUpdated method',
  args:{contentPurposeOperationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentPurposeOperations/${args.contentPurposeOperationId}?`, null, req);
  }
};
export {deleteContentPurposeOperationByIdUpdated};


const updateContentPurposeOperation = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContentPurposeOperation method',
  args:{contentPurposeOperationToBeUpdated: {type: ContentPurposeOperationInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentPurposeOperations/${args.nullVal}?`, args.contentPurposeOperationToBeUpdated, req);
  }
};
export {updateContentPurposeOperation};
