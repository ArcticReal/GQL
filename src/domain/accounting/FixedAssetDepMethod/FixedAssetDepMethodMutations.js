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
import {FixedAssetDepMethodInputType} from '../../accounting/FixedAssetDepMethod/FixedAssetDepMethodInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFixedAssetDepMethod = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFixedAssetDepMethod method',
  args:{fixedAssetDepMethodToBeAdded: {type: FixedAssetDepMethodInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetDepMethods/add?`, args.fixedAssetDepMethodToBeAdded, req);
  }
};
export {createFixedAssetDepMethod};


const deleteFixedAssetDepMethodByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFixedAssetDepMethodByIdUpdated method',
  args:{fixedAssetDepMethodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetDepMethods/${args.fixedAssetDepMethodId}?`, null, req);
  }
};
export {deleteFixedAssetDepMethodByIdUpdated};


const updateFixedAssetDepMethod = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFixedAssetDepMethod method',
  args:{fixedAssetDepMethodToBeUpdated: {type: FixedAssetDepMethodInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetDepMethods/${args.nullVal}?`, args.fixedAssetDepMethodToBeUpdated, req);
  }
};
export {updateFixedAssetDepMethod};
