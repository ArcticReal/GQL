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
import {FixedAssetMaintInputType} from '../../accounting/FixedAssetMaint/FixedAssetMaintInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFixedAssetMaint = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFixedAssetMaint method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetMaints/add?`, null, req);
  }
};
export {createFixedAssetMaint};


const deleteFixedAssetMaintByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFixedAssetMaintByIdUpdated method',
  args:{fixedAssetMaintId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetMaints/${args.fixedAssetMaintId}?`, null, req);
  }
};
export {deleteFixedAssetMaintByIdUpdated};


const updateFixedAssetMaint = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFixedAssetMaint method',
  args:{fixedAssetMaintToBeUpdated: {type: FixedAssetMaintInputType},maintHistSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetMaints/${args.maintHistSeqId}?`, args.fixedAssetMaintToBeUpdated, req);
  }
};
export {updateFixedAssetMaint};
