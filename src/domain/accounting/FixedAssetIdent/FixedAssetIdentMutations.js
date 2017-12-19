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
import {FixedAssetIdentInputType} from '../../accounting/FixedAssetIdent/FixedAssetIdentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFixedAssetIdent = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetIdent method',
  args:{fixedAssetIdentToBeAdded: {type: FixedAssetIdentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetIdents/add?`, args.fixedAssetIdentToBeAdded, req);
  }
};
export {createFixedAssetIdent};


const deleteFixedAssetIdentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetIdentByIdUpdated method',
  args:{fixedAssetIdentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetIdents/${args.fixedAssetIdentId}?`, null, req);
  }
};
export {deleteFixedAssetIdentByIdUpdated};


const updateFixedAssetIdent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetIdent method',
  args:{fixedAssetIdentToBeUpdated: {type: FixedAssetIdentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetIdents/${args.nullVal}?`, args.fixedAssetIdentToBeUpdated, req);
  }
};
export {updateFixedAssetIdent};
