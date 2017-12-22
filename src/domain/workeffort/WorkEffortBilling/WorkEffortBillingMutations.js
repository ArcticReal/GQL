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
import {WorkEffortBillingResponseType} from '../../workeffort/WorkEffortBilling/WorkEffortBillingResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortBilling = {
  type: WorkEffortBillingResponseType,
  description: 'mutation for ofbiz createWorkEffortBilling method',
  args:{workEffortBillingToBeAdded: {type: WorkEffortBillingInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortBillings/add?`, args.workEffortBillingToBeAdded, req);
  }
};
export {createWorkEffortBilling};


const updateWorkEffortBilling = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateWorkEffortBilling method',
  args:{workEffortBillingToBeUpdated: {type: WorkEffortBillingInputType},invoiceItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortBillings/${args.invoiceItemSeqId}?`, args.workEffortBillingToBeUpdated, req);
  }
};
export {updateWorkEffortBilling};


const deleteWorkEffortBillingByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteWorkEffortBillingByIdUpdated method',
  args:{workEffortBillingId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortBillings/${args.workEffortBillingId}?`, null, req);
  }
};
export {deleteWorkEffortBillingByIdUpdated};
