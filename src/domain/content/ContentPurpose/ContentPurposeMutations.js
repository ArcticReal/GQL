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
import {ContentPurposeResponseType} from '../../content/ContentPurpose/ContentPurposeResponseType.js';
import {ContentPurposeInputType} from '../../content/ContentPurpose/ContentPurposeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentPurpose = {
  type: ContentPurposeResponseType,
  description: 'mutation for ofbiz createContentPurpose method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentPurposes/add?`, null, req);
  }
};
export {createContentPurpose};


const deleteContentPurposeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContentPurposeByIdUpdated method',
  args:{contentPurposeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentPurposes/${args.contentPurposeId}?`, null, req);
  }
};
export {deleteContentPurposeByIdUpdated};


const updateContentPurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContentPurpose method',
  args:{contentPurposeToBeUpdated: {type: ContentPurposeInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentPurposes/${args.nullVal}?`, args.contentPurposeToBeUpdated, req);
  }
};
export {updateContentPurpose};
