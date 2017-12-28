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
import {ContentTypeAttrInputType} from '../../content/ContentTypeAttr/ContentTypeAttrInputType.js';
import {ContentTypeAttrResponseType} from '../../content/ContentTypeAttr/ContentTypeAttrResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentTypeAttr = {
  type: ContentTypeAttrResponseType,
  description: 'mutation for ofbiz createContentTypeAttr method',
  args:{contentTypeAttrToBeAdded: {type: ContentTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentTypeAttrs/add?`, args.contentTypeAttrToBeAdded, req);
  }
};
export {createContentTypeAttr};


const updateContentTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContentTypeAttr method',
  args:{contentTypeAttrToBeUpdated: {type: ContentTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentTypeAttrs/${args.attrName}?`, args.contentTypeAttrToBeUpdated, req);
  }
};
export {updateContentTypeAttr};


const deleteContentTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContentTypeAttrByIdUpdated method',
  args:{contentTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentTypeAttrs/${args.contentTypeAttrId}?`, null, req);
  }
};
export {deleteContentTypeAttrByIdUpdated};
