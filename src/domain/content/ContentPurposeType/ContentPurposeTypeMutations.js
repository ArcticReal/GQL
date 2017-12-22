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
import {ContentPurposeTypeResponseType} from '../../content/ContentPurposeType/ContentPurposeTypeResponseType.js';
import {ContentPurposeTypeInputType} from '../../content/ContentPurposeType/ContentPurposeTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentPurposeType = {
  type: ContentPurposeTypeResponseType,
  description: 'mutation for ofbiz createContentPurposeType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentPurposeTypes/add?`, null, req);
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
