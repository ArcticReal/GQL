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
import {ContentRoleResponseType} from '../../content/ContentRole/ContentRoleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createContentRole = {
  type: ContentRoleResponseType,
  description: 'mutation for ofbiz createContentRole method',
  args:{contentRoleToBeAdded: {type: ContentRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/content/contentRoles/add?`, args.contentRoleToBeAdded, req);
  }
};
export {createContentRole};


const deleteContentRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteContentRoleByIdUpdated method',
  args:{contentRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/content/contentRoles/${args.contentRoleId}?`, null, req);
  }
};
export {deleteContentRoleByIdUpdated};


const updateContentRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateContentRole method',
  args:{contentRoleToBeUpdated: {type: ContentRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/content/contentRoles/${args.roleTypeId}?`, args.contentRoleToBeUpdated, req);
  }
};
export {updateContentRole};
