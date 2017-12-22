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
import {FixedAssetResponseType} from '../../accounting/FixedAsset/FixedAssetResponseType.js';
import {FixedAssetInputType} from '../../accounting/FixedAsset/FixedAssetInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFixedAsset = {
  type: FixedAssetResponseType,
  description: 'mutation for ofbiz createFixedAsset method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAssets/add?`, null, req);
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
