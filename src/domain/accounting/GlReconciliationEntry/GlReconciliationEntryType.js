
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

import {GlReconciliationType} from '../../accounting/GlReconciliation/GlReconciliationType.js';
import {AcctgTransEntryType} from '../../accounting/AcctgTransEntry/AcctgTransEntryType.js';


const GlReconciliationEntryType = new GraphQLObjectType({
  name: 'GlReconciliationEntryType',
  description: 'Type for GlReconciliationEntry in accounting',

  fields: () => ({
    glReconciliation: {
      type: GlReconciliationType,
      args : {glReconciliationId: {type: GraphQLString}},
      resolve: (glReconciliationEntry, args, {loaders}) => loaders.ofbiz.load(`accounting/glReconciliations/find?glReconciliationId=${glReconciliationEntry.glReconciliationId}`)
    },
    reconciledAmount: {type: GraphQLFloat},
    acctgTransEntrySeqId: {type: GraphQLString},
    acctgTrans: {
      type: AcctgTransEntryType,
      args : {acctgTransId: {type: GraphQLString}},
      resolve: (glReconciliationEntry, args, {loaders}) => loaders.ofbiz.load(`accounting/acctgTrans/acctgTransEntrys/find?acctgTransId=${glReconciliationEntry.acctgTransId}`)
    }
  })
});

export {GlReconciliationEntryType};
    