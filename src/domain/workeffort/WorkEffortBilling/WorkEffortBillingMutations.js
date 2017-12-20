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
import {WorkEffortBillingInputType} from '../../workeffort/WorkEffortBilling/WorkEffortBillingInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortBilling = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWorkEffortBilling method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortBillings/add?`, null, req);
  }
};
export {createWorkEffortBilling};


const updateWorkEffortBilling = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWorkEffortBilling method',
  args:{workEffortBillingToBeUpdated: {type: WorkEffortBillingInputType},invoiceItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortBillings/${args.invoiceItemSeqId}?`, args.workEffortBillingToBeUpdated, req);
  }
};
export {updateWorkEffortBilling};


const deleteWorkEffortBillingByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWorkEffortBillingByIdUpdated method',
  args:{workEffortBillingId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortBillings/${args.workEffortBillingId}?`, null, req);
  }
};
export {deleteWorkEffortBillingByIdUpdated};
