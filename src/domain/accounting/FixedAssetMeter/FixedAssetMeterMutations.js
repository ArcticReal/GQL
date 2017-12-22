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
import {FixedAssetMeterResponseType} from '../../accounting/FixedAssetMeter/FixedAssetMeterResponseType.js';
import {FixedAssetMeterInputType} from '../../accounting/FixedAssetMeter/FixedAssetMeterInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFixedAssetMeter = {
  type: FixedAssetMeterResponseType,
  description: 'mutation for ofbiz createFixedAssetMeter method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/fixedAsset/fixedAssetMeters/add?`, null, req);
  }
};
export {createFixedAssetMeter};


const deleteFixedAssetMeterByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFixedAssetMeterByIdUpdated method',
  args:{fixedAssetMeterId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/fixedAsset/fixedAssetMeters/${args.fixedAssetMeterId}?`, null, req);
  }
};
export {deleteFixedAssetMeterByIdUpdated};


const updateFixedAssetMeter = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFixedAssetMeter method',
  args:{fixedAssetMeterToBeUpdated: {type: FixedAssetMeterInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/fixedAsset/fixedAssetMeters/${args.nullVal}?`, args.fixedAssetMeterToBeUpdated, req);
  }
};
export {updateFixedAssetMeter};
