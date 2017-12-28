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
import {ProtectedViewInputType} from '../../login/ProtectedView/ProtectedViewInputType.js';
import {ProtectedViewResponseType} from '../../login/ProtectedView/ProtectedViewResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProtectedView = {
  type: ProtectedViewResponseType,
  description: 'mutation for ofbiz createProtectedView method',
  args:{protectedViewToBeAdded: {type: ProtectedViewInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`login/protectedViews/add?`, args.protectedViewToBeAdded, req);
  }
};
export {createProtectedView};


const deleteProtectedViewByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProtectedViewByIdUpdated method',
  args:{protectedViewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`login/protectedViews/${args.protectedViewId}?`, null, req);
  }
};
export {deleteProtectedViewByIdUpdated};


const updateProtectedView = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProtectedView method',
  args:{protectedViewToBeUpdated: {type: ProtectedViewInputType},viewNameId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`login/protectedViews/${args.viewNameId}?`, args.protectedViewToBeUpdated, req);
  }
};
export {updateProtectedView};
