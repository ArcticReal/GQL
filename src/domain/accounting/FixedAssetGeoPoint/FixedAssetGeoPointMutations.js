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
import {FixedAssetGeoPointResponseType} from '../../accounting/FixedAssetGeoPoint/FixedAssetGeoPointResponseType.js';
import {FixedAssetGeoPointInputType} from '../../accounting/FixedAssetGeoPoint/FixedAssetGeoPointInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFixedAssetGeoPoint = {
  type: FixedAssetGeoPointResponseType,
  description: 'mutation for ofbiz createFixedAssetGeoPoint method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetGeoPoints/add?`, null, req);
  }
};
export {createFixedAssetGeoPoint};


const deleteFixedAssetGeoPointByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetGeoPointByIdUpdated method',
  args:{fixedAssetGeoPointId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetGeoPoints/${args.fixedAssetGeoPointId}?`, null, req);
  }
};
export {deleteFixedAssetGeoPointByIdUpdated};


const updateFixedAssetGeoPoint = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetGeoPoint method',
  args:{fixedAssetGeoPointToBeUpdated: {type: FixedAssetGeoPointInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetGeoPoints/${args.nullVal}?`, args.fixedAssetGeoPointToBeUpdated, req);
  }
};
export {updateFixedAssetGeoPoint};
