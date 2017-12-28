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
import {FixedAssetIdentTypeInputType} from '../../accounting/FixedAssetIdentType/FixedAssetIdentTypeInputType.js';
import {FixedAssetIdentTypeResponseType} from '../../accounting/FixedAssetIdentType/FixedAssetIdentTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFixedAssetIdentType = {
  type: FixedAssetIdentTypeResponseType,
  description: 'mutation for ofbiz createFixedAssetIdentType method',
  args:{fixedAssetIdentTypeToBeAdded: {type: FixedAssetIdentTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetIdentTypes/add?`, args.fixedAssetIdentTypeToBeAdded, req);
  }
};
export {createFixedAssetIdentType};


const updateFixedAssetIdentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetIdentType method',
  args:{fixedAssetIdentTypeToBeUpdated: {type: FixedAssetIdentTypeInputType},fixedAssetIdentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetIdentTypes/${args.fixedAssetIdentTypeId}?`, args.fixedAssetIdentTypeToBeUpdated, req);
  }
};
export {updateFixedAssetIdentType};


const deleteFixedAssetIdentTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetIdentTypeByIdUpdated method',
  args:{fixedAssetIdentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetIdentTypes/${args.fixedAssetIdentTypeId}?`, null, req);
  }
};
export {deleteFixedAssetIdentTypeByIdUpdated};
