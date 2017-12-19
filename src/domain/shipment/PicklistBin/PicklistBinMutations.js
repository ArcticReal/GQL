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
import {PicklistBinInputType} from '../../shipment/PicklistBin/PicklistBinInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPicklistBin = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPicklistBin method',
  args:{picklistBinToBeAdded: {type: PicklistBinInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/picklist/picklistBins/add?`, args.picklistBinToBeAdded, req);
  }
};
export {createPicklistBin};


const updatePicklistBin = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePicklistBin method',
  args:{picklistBinToBeUpdated: {type: PicklistBinInputType},picklistBinId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/picklist/picklistBins/${args.picklistBinId}?`, args.picklistBinToBeUpdated, req);
  }
};
export {updatePicklistBin};


const deletePicklistBinByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePicklistBinByIdUpdated method',
  args:{picklistBinId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/picklist/picklistBins/${args.picklistBinId}?`, null, req);
  }
};
export {deletePicklistBinByIdUpdated};
