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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createEntitySyncIncludeGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEntitySyncIncludeGroup method',
  args:{entitySyncId: {type: GraphQLString},entityGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityextSynchronization/createEntitySyncIncludeGroup?entitySyncId=${args.entitySyncId}entityGroupId=${args.entityGroupId}`, null, req);
  }
};
export {createEntitySyncIncludeGroup};


const deleteEntitySyncIncludeGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEntitySyncIncludeGroup method',
  args:{entitySyncId: {type: GraphQLString},entityGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityextSynchronization/deleteEntitySyncIncludeGroup?entitySyncId=${args.entitySyncId}entityGroupId=${args.entityGroupId}`, null, req);
  }
};
export {deleteEntitySyncIncludeGroup};


const updateEntitySyncIncludeGroup = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEntitySyncIncludeGroup method',
  args:{entitySyncId: {type: GraphQLString},entityGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/entityextSynchronization/updateEntitySyncIncludeGroup?entitySyncId=${args.entitySyncId}entityGroupId=${args.entityGroupId}`, null, req);
  }
};
export {updateEntitySyncIncludeGroup};
