
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

import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {InvoiceItemType} from '../accounting/InvoiceItem.js';


const WorkEffortBillingType = new GraphQLObjectType({
  name: 'WorkEffortBillingType',
  description: 'Type for WorkEffortBilling in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortBilling, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortBilling.workEffortId}`)
    },
    percentage: {type: GraphQLFloat},
    invoice: {
      type: InvoiceItemType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (workEffortBilling, args, {loaders}) => loaders.ofbiz.load(`invoiceItems/find?invoiceId=${workEffortBilling.invoiceId}`)
    },
    invoiceItemSeqId: {type: GraphQLString}
  })
});

export {WorkEffortBillingType};
    




const WorkEffortBillingInputType = new GraphQLInputObjectType({
  name: 'WorkEffortBillingInputType',
  description: 'input type for WorkEffortBilling in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    percentage: {type: GraphQLFloat},
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString}
  })
});

export {WorkEffortBillingInputType};
    