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
import {FixedAssetTypeInputType} from '../../accounting/FixedAssetType/FixedAssetTypeInputType.js';
import {FixedAssetTypeResponseType} from '../../accounting/FixedAssetType/FixedAssetTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFixedAssetType = {
  type: FixedAssetTypeResponseType,
  description: 'mutation for ofbiz createFixedAssetType method',
  args:{fixedAssetTypeToBeAdded: {type: FixedAssetTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetTypes/add?`, args.fixedAssetTypeToBeAdded, req);
  }
};
export {createFixedAssetType};


const updateFixedAssetType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetType method',
  args:{fixedAssetTypeToBeUpdated: {type: FixedAssetTypeInputType},fixedAssetTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetTypes/${args.fixedAssetTypeId}?`, args.fixedAssetTypeToBeUpdated, req);
  }
};
export {updateFixedAssetType};


const deleteFixedAssetTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetTypeByIdUpdated method',
  args:{fixedAssetTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetTypes/${args.fixedAssetTypeId}?`, null, req);
  }
};
export {deleteFixedAssetTypeByIdUpdated};
