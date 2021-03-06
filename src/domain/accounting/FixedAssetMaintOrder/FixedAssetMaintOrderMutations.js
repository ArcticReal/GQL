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
import {FixedAssetMaintOrderInputType} from '../../accounting/FixedAssetMaintOrder/FixedAssetMaintOrderInputType.js';
import {FixedAssetMaintOrderResponseType} from '../../accounting/FixedAssetMaintOrder/FixedAssetMaintOrderResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFixedAssetMaintOrder = {
  type: FixedAssetMaintOrderResponseType,
  description: 'mutation for ofbiz createFixedAssetMaintOrder method',
  args:{fixedAssetMaintOrderToBeAdded: {type: FixedAssetMaintOrderInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetMaintOrders/add?`, args.fixedAssetMaintOrderToBeAdded, req);
  }
};
export {createFixedAssetMaintOrder};


const deleteFixedAssetMaintOrderByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetMaintOrderByIdUpdated method',
  args:{fixedAssetMaintOrderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetMaintOrders/${args.fixedAssetMaintOrderId}?`, null, req);
  }
};
export {deleteFixedAssetMaintOrderByIdUpdated};


const updateFixedAssetMaintOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetMaintOrder method',
  args:{fixedAssetMaintOrderToBeUpdated: {type: FixedAssetMaintOrderInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetMaintOrders/${args.nullVal}?`, args.fixedAssetMaintOrderToBeUpdated, req);
  }
};
export {updateFixedAssetMaintOrder};
