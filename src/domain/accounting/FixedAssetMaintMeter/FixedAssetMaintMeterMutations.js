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
import {FixedAssetMaintMeterInputType} from '../../accounting/FixedAssetMaintMeter/FixedAssetMaintMeterInputType.js';
import {FixedAssetMaintMeterResponseType} from '../../accounting/FixedAssetMaintMeter/FixedAssetMaintMeterResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFixedAssetMaintMeter = {
  type: FixedAssetMaintMeterResponseType,
  description: 'mutation for ofbiz createFixedAssetMaintMeter method',
  args:{fixedAssetMaintMeterToBeAdded: {type: FixedAssetMaintMeterInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetMaintMeters/add?`, args.fixedAssetMaintMeterToBeAdded, req);
  }
};
export {createFixedAssetMaintMeter};


const deleteFixedAssetMaintMeterByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetMaintMeterByIdUpdated method',
  args:{fixedAssetMaintMeterId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetMaintMeters/${args.fixedAssetMaintMeterId}?`, null, req);
  }
};
export {deleteFixedAssetMaintMeterByIdUpdated};


const updateFixedAssetMaintMeter = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetMaintMeter method',
  args:{fixedAssetMaintMeterToBeUpdated: {type: FixedAssetMaintMeterInputType},maintHistSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetMaintMeters/${args.maintHistSeqId}?`, args.fixedAssetMaintMeterToBeUpdated, req);
  }
};
export {updateFixedAssetMaintMeter};
