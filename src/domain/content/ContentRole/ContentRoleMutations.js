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
import {ContentRoleInputType} from '../../content/ContentRole/ContentRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz createContentRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentRoles/add?`, null, req);
  }
};
export {createContentRole};


const deleteContentRoleByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteContentRoleByIdUpdated method',
  args:{contentRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentRoles/${args.contentRoleId}?`, null, req);
  }
};
export {deleteContentRoleByIdUpdated};


const updateContentRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateContentRole method',
  args:{contentRoleToBeUpdated: {type: ContentRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentRoles/${args.roleTypeId}?`, args.contentRoleToBeUpdated, req);
  }
};
export {updateContentRole};
