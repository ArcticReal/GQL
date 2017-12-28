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
import {ContentPurposeTypeInputType} from '../../content/ContentPurposeType/ContentPurposeTypeInputType.js';
import {ContentPurposeTypeResponseType} from '../../content/ContentPurposeType/ContentPurposeTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentPurposeType = {
  type: ContentPurposeTypeResponseType,
  description: 'mutation for ofbiz createContentPurposeType method',
  args:{contentPurposeTypeToBeAdded: {type: ContentPurposeTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentPurposeTypes/add?`, args.contentPurposeTypeToBeAdded, req);
  }
};
export {createContentPurposeType};


const updateContentPurposeType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContentPurposeType method',
  args:{contentPurposeTypeToBeUpdated: {type: ContentPurposeTypeInputType},contentPurposeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentPurposeTypes/${args.contentPurposeTypeId}?`, args.contentPurposeTypeToBeUpdated, req);
  }
};
export {updateContentPurposeType};


const deleteContentPurposeTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContentPurposeTypeByIdUpdated method',
  args:{contentPurposeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentPurposeTypes/${args.contentPurposeTypeId}?`, null, req);
  }
};
export {deleteContentPurposeTypeByIdUpdated};
