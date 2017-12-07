
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {GlReconciliationType} from '../accounting/GlReconciliationType.js';
import {AcctgTransEntryType} from '../accounting/AcctgTransEntryType.js';


const GlReconciliationEntryType = new GraphQLObjectType({
  name: 'GlReconciliationEntryType',
  description: 'Type for GlReconciliationEntry in accounting',

  fields: () => ({
    glReconciliation: {
      type: GlReconciliationType,
      args : {glReconciliationId: {type: GraphQLString}},
      resolve: (glReconciliationEntry, args, {loaders}) => loaders.ofbiz.load(`glReconciliations/find?glReconciliationId=${glReconciliationEntry.glReconciliationId}`)
    },
    reconciledAmount: {type: GraphQLFloat},
    acctgTransEntrySeqId: {type: GraphQLString},
    acctgTrans: {
      type: AcctgTransEntryType,
      args : {acctgTransId: {type: GraphQLString}},
      resolve: (glReconciliationEntry, args, {loaders}) => loaders.ofbiz.load(`acctgTransEntrys/find?acctgTransId=${glReconciliationEntry.acctgTransId}`)
    }
  })
});

export {GlReconciliationEntryType};
    