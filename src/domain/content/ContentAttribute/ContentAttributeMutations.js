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
import {ContentAttributeInputType} from '../../content/ContentAttribute/ContentAttributeInputType.js';
import {ContentAttributeResponseType} from '../../content/ContentAttribute/ContentAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentAttribute = {
  type: ContentAttributeResponseType,
  description: 'mutation for ofbiz createContentAttribute method',
  args:{contentAttributeToBeAdded: {type: ContentAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentAttributes/add?`, args.contentAttributeToBeAdded, req);
  }
};
export {createContentAttribute};


const updateContentAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContentAttribute method',
  args:{contentAttributeToBeUpdated: {type: ContentAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentAttributes/${args.attrName}?`, args.contentAttributeToBeUpdated, req);
  }
};
export {updateContentAttribute};


const deleteContentAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContentAttributeByIdUpdated method',
  args:{contentAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentAttributes/${args.contentAttributeId}?`, null, req);
  }
};
export {deleteContentAttributeByIdUpdated};
