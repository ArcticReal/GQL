
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {InvoiceItemType} from '../accounting/InvoiceItemType.js';


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
    