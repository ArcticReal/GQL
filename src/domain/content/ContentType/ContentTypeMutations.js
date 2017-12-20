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
import {ContentTypeInputType} from '../../content/ContentType/ContentTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentType method',
  args:{contentTypeToBeAdded: {type: ContentTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentTypes/add?`, args.contentTypeToBeAdded, req);
  }
};
export {createContentType};


const updateContentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentType method',
  args:{contentTypeToBeUpdated: {type: ContentTypeInputType},contentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentTypes/${args.contentTypeId}?`, args.contentTypeToBeUpdated, req);
  }
};
export {updateContentType};


const deleteContentTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContentTypeByIdUpdated method',
  args:{contentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentTypes/${args.contentTypeId}?`, null, req);
  }
};
export {deleteContentTypeByIdUpdated};
