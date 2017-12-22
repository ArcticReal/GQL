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
import {FixedAssetDepMethodResponseType} from '../../accounting/FixedAssetDepMethod/FixedAssetDepMethodResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFixedAssetDepMethod = {
  type: FixedAssetDepMethodResponseType,
  description: 'mutation for ofbiz createFixedAssetDepMethod method',
  args:{fixedAssetDepMethodToBeAdded: {type: FixedAssetDepMethodInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetDepMethods/add?`, args.fixedAssetDepMethodToBeAdded, req);
  }
};
export {createFixedAssetDepMethod};


const deleteFixedAssetDepMethodByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetDepMethodByIdUpdated method',
  args:{fixedAssetDepMethodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetDepMethods/${args.fixedAssetDepMethodId}?`, null, req);
  }
};
export {deleteFixedAssetDepMethodByIdUpdated};


const updateFixedAssetDepMethod = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetDepMethod method',
  args:{fixedAssetDepMethodToBeUpdated: {type: FixedAssetDepMethodInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetDepMethods/${args.nullVal}?`, args.fixedAssetDepMethodToBeUpdated, req);
  }
};
export {updateFixedAssetDepMethod};
