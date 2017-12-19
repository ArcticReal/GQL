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
import {FixedAssetTypeGlAccountInputType} from '../../accounting/FixedAssetTypeGlAccount/FixedAssetTypeGlAccountInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFixedAssetTypeGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFixedAssetTypeGlAccount method',
  args:{fixedAssetTypeGlAccountToBeAdded: {type: FixedAssetTypeGlAccountInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetTypeGlAccounts/add?`, args.fixedAssetTypeGlAccountToBeAdded, req);
  }
};
export {createFixedAssetTypeGlAccount};


const deleteFixedAssetTypeGlAccountByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetTypeGlAccountByIdUpdated method',
  args:{fixedAssetTypeGlAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetTypeGlAccounts/${args.fixedAssetTypeGlAccountId}?`, null, req);
  }
};
export {deleteFixedAssetTypeGlAccountByIdUpdated};


const updateFixedAssetTypeGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetTypeGlAccount method',
  args:{fixedAssetTypeGlAccountToBeUpdated: {type: FixedAssetTypeGlAccountInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetTypeGlAccounts/${args.nullVal}?`, args.fixedAssetTypeGlAccountToBeUpdated, req);
  }
};
export {updateFixedAssetTypeGlAccount};
