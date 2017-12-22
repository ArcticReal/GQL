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
import {FixedAssetProductResponseType} from '../../accounting/FixedAssetProduct/FixedAssetProductResponseType.js';
import {FixedAssetProductInputType} from '../../accounting/FixedAssetProduct/FixedAssetProductInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFixedAssetProduct = {
  type: FixedAssetProductResponseType,
  description: 'mutation for ofbiz createFixedAssetProduct method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetProducts/add?`, null, req);
  }
};
export {createFixedAssetProduct};


const deleteFixedAssetProductByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetProductByIdUpdated method',
  args:{fixedAssetProductId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetProducts/${args.fixedAssetProductId}?`, null, req);
  }
};
export {deleteFixedAssetProductByIdUpdated};


const updateFixedAssetProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetProduct method',
  args:{fixedAssetProductToBeUpdated: {type: FixedAssetProductInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetProducts/${args.nullVal}?`, args.fixedAssetProductToBeUpdated, req);
  }
};
export {updateFixedAssetProduct};
