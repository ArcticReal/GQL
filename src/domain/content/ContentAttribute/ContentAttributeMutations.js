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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentAttributes/add?`, null, req);
  }
};
export {createContentAttribute};


const updateContentAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentAttribute method',
  args:{contentAttributeToBeUpdated: {type: ContentAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentAttributes/${args.attrName}?`, args.contentAttributeToBeUpdated, req);
  }
};
export {updateContentAttribute};


const deleteContentAttributeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContentAttributeByIdUpdated method',
  args:{contentAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentAttributes/${args.contentAttributeId}?`, null, req);
  }
};
export {deleteContentAttributeByIdUpdated};
