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
import {FixedAssetInputType} from '../../accounting/FixedAsset/FixedAssetInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFixedAsset = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAsset method',
  args:{fixedAssetToBeAdded: {type: FixedAssetInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAssets/add?`, args.fixedAssetToBeAdded, req);
  }
};
export {createFixedAsset};


const updateFixedAsset = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAsset method',
  args:{fixedAssetToBeUpdated: {type: FixedAssetInputType},fixedAssetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAssets/${args.fixedAssetId}?`, args.fixedAssetToBeUpdated, req);
  }
};
export {updateFixedAsset};


const deleteFixedAssetByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetByIdUpdated method',
  args:{fixedAssetId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAssets/${args.fixedAssetId}?`, null, req);
  }
};
export {deleteFixedAssetByIdUpdated};
