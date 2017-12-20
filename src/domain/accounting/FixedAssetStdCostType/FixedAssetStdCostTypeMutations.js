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
import {FixedAssetStdCostTypeInputType} from '../../accounting/FixedAssetStdCostType/FixedAssetStdCostTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFixedAssetStdCostType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFixedAssetStdCostType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetStdCostTypes/add?`, null, req);
  }
};
export {createFixedAssetStdCostType};


const updateFixedAssetStdCostType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFixedAssetStdCostType method',
  args:{fixedAssetStdCostTypeToBeUpdated: {type: FixedAssetStdCostTypeInputType},fixedAssetStdCostTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetStdCostTypes/${args.fixedAssetStdCostTypeId}?`, args.fixedAssetStdCostTypeToBeUpdated, req);
  }
};
export {updateFixedAssetStdCostType};


const deleteFixedAssetStdCostTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFixedAssetStdCostTypeByIdUpdated method',
  args:{fixedAssetStdCostTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetStdCostTypes/${args.fixedAssetStdCostTypeId}?`, null, req);
  }
};
export {deleteFixedAssetStdCostTypeByIdUpdated};
