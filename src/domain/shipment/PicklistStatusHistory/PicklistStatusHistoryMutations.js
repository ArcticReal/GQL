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
import {PicklistStatusHistoryInputType} from '../../shipment/PicklistStatusHistory/PicklistStatusHistoryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPicklistStatusHistory = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPicklistStatusHistory method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`shipment/picklist/picklistStatusHistorys/add?`, null, req);
  }
};
export {createPicklistStatusHistory};


const updatePicklistStatusHistory = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePicklistStatusHistory method',
  args:{picklistStatusHistoryToBeUpdated: {type: PicklistStatusHistoryInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`shipment/picklist/picklistStatusHistorys/${args.nullVal}?`, args.picklistStatusHistoryToBeUpdated, req);
  }
};
export {updatePicklistStatusHistory};


const deletePicklistStatusHistoryByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePicklistStatusHistoryByIdUpdated method',
  args:{picklistStatusHistoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`shipment/picklist/picklistStatusHistorys/${args.picklistStatusHistoryId}?`, null, req);
  }
};
export {deletePicklistStatusHistoryByIdUpdated};
