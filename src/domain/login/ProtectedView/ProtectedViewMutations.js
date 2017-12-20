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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProtectedView = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProtectedView method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`login/protectedViews/add?`, null, req);
  }
};
export {createProtectedView};


const deleteProtectedViewByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProtectedViewByIdUpdated method',
  args:{protectedViewId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`login/protectedViews/${args.protectedViewId}?`, null, req);
  }
};
export {deleteProtectedViewByIdUpdated};


const updateProtectedView = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProtectedView method',
  args:{protectedViewToBeUpdated: {type: ProtectedViewInputType},viewNameId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`login/protectedViews/${args.viewNameId}?`, args.protectedViewToBeUpdated, req);
  }
};
export {updateProtectedView};
