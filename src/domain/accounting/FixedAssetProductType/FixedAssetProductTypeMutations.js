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
import {FixedAssetProductTypeInputType} from '../../accounting/FixedAssetProductType/FixedAssetProductTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFixedAssetProductType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetProductType method',
  args:{fixedAssetProductTypeToBeAdded: {type: FixedAssetProductTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetProductTypes/add?`, args.fixedAssetProductTypeToBeAdded, req);
  }
};
export {createFixedAssetProductType};


const updateFixedAssetProductType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetProductType method',
  args:{fixedAssetProductTypeToBeUpdated: {type: FixedAssetProductTypeInputType},fixedAssetProductTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetProductTypes/${args.fixedAssetProductTypeId}?`, args.fixedAssetProductTypeToBeUpdated, req);
  }
};
export {updateFixedAssetProductType};


const deleteFixedAssetProductTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetProductTypeByIdUpdated method',
  args:{fixedAssetProductTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetProductTypes/${args.fixedAssetProductTypeId}?`, null, req);
  }
};
export {deleteFixedAssetProductTypeByIdUpdated};
