
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

import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';
import {InvoiceItemType} from '../../accounting/InvoiceItem/InvoiceItemType.js';


const WorkEffortBillingType = new GraphQLObjectType({
  name: 'WorkEffortBillingType',
  description: 'Type for WorkEffortBilling in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortBilling, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortBilling.workEffortId}`)
    },
    percentage: {type: GraphQLFloat},
    invoice: {
      type: InvoiceItemType,
      args : {invoiceId: {type: GraphQLString}},
      resolve: (workEffortBilling, args, {loaders}) => loaders.ofbiz.load(`accounting/invoice/invoiceItems/find?invoiceId=${workEffortBilling.invoiceId}`)
    },
    invoiceItemSeqId: {type: GraphQLString}
  })
});

export {WorkEffortBillingType};
    