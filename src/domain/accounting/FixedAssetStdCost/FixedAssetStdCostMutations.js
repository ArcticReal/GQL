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
import {FixedAssetStdCostInputType} from '../../accounting/FixedAssetStdCost/FixedAssetStdCostInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFixedAssetStdCost = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetStdCost method',
  args:{fixedAssetStdCostToBeAdded: {type: FixedAssetStdCostInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetStdCosts/add?`, args.fixedAssetStdCostToBeAdded, req);
  }
};
export {createFixedAssetStdCost};


const deleteFixedAssetStdCostByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetStdCostByIdUpdated method',
  args:{fixedAssetStdCostId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetStdCosts/${args.fixedAssetStdCostId}?`, null, req);
  }
};
export {deleteFixedAssetStdCostByIdUpdated};


const updateFixedAssetStdCost = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetStdCost method',
  args:{fixedAssetStdCostToBeUpdated: {type: FixedAssetStdCostInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetStdCosts/${args.nullVal}?`, args.fixedAssetStdCostToBeUpdated, req);
  }
};
export {updateFixedAssetStdCost};
