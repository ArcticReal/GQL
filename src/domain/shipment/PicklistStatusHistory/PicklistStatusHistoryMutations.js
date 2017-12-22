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
import {PicklistStatusHistoryResponseType} from '../../shipment/PicklistStatusHistory/PicklistStatusHistoryResponseType.js';
import {PicklistStatusHistoryInputType} from '../../shipment/PicklistStatusHistory/PicklistStatusHistoryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPicklistStatusHistory = {
  type: PicklistStatusHistoryResponseType,
  description: 'mutation for ofbiz createPicklistStatusHistory method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/picklist/picklistStatusHistorys/add?`, null, req);
  }
};
export {createPicklistStatusHistory};


const updatePicklistStatusHistory = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePicklistStatusHistory method',
  args:{picklistStatusHistoryToBeUpdated: {type: PicklistStatusHistoryInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/picklist/picklistStatusHistorys/${args.nullVal}?`, args.picklistStatusHistoryToBeUpdated, req);
  }
};
export {updatePicklistStatusHistory};


const deletePicklistStatusHistoryByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePicklistStatusHistoryByIdUpdated method',
  args:{picklistStatusHistoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/picklist/picklistStatusHistorys/${args.picklistStatusHistoryId}?`, null, req);
  }
};
export {deletePicklistStatusHistoryByIdUpdated};
