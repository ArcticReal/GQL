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
import {DataResourceRoleInputType} from '../../content/DataResourceRole/DataResourceRoleInputType.js';
import {DataResourceRoleResponseType} from '../../content/DataResourceRole/DataResourceRoleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createDataResourceRole = {
  type: DataResourceRoleResponseType,
  description: 'mutation for ofbiz createDataResourceRole method',
  args:{dataResourceRoleToBeAdded: {type: DataResourceRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`content/dataResource/dataResourceRoles/add?`, args.dataResourceRoleToBeAdded, req);
  }
};
export {createDataResourceRole};


const deleteDataResourceRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteDataResourceRoleByIdUpdated method',
  args:{dataResourceRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`content/dataResource/dataResourceRoles/${args.dataResourceRoleId}?`, null, req);
  }
};
export {deleteDataResourceRoleByIdUpdated};


const updateDataResourceRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateDataResourceRole method',
  args:{dataResourceRoleToBeUpdated: {type: DataResourceRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`content/dataResource/dataResourceRoles/${args.roleTypeId}?`, args.dataResourceRoleToBeUpdated, req);
  }
};
export {updateDataResourceRole};
