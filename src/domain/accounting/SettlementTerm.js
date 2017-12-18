
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

import {AcctgTransEntryType} from '../accounting/AcctgTransEntry.js';


const SettlementTermType = new GraphQLObjectType({
  name: 'SettlementTermType',
  description: 'Type for SettlementTerm in accounting',

  fields: () => ({
    settlementTermId: {type: GraphQLString},
    uomId: {type: GraphQLString},
    termName: {type: GraphQLString},
    termValue: {type: GraphQLInt},
    acctgTransEntries: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {},
      resolve: (settlementTerm, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTrans/acctgTransEntrys/find?settlementTermId=${settlementTerm.settlementTermId}`)
    }
  })
});

export {SettlementTermType};
    




const SettlementTermInputType = new GraphQLInputObjectType({
  name: 'SettlementTermInputType',
  description: 'input type for SettlementTerm',

  fields: () => ({
    settlementTermId: {type: GraphQLString},
    termName: {type: GraphQLString},
    termValue: {type: GraphQLInt},
    uomId: {type: GraphQLString}
  })
});

export {SettlementTermInputType};
    