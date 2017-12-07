
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AcctgTransEntryType} from '../accounting/AcctgTransEntryType.js';


const SettlementTermType = new GraphQLObjectType({
  name: 'SettlementTermType',
  description: 'Type for SettlementTerm in accounting',

  fields: () => ({
    settlementTermId: {type: GraphQLString},
    uomId: {type: GraphQLString},
    termName: {type: GraphQLString},
    termValue: {type: GraphQLInt},
    acctgTransEntry: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {settlementTermId: {type: GraphQLString}},
      resolve: (settlementTerm, args, {loaders}) => loaders.ofbizArray.load(`acctgTransEntrys/find?settlementTermId=${settlementTerm.settlementTermId}`)
    }
  })
});

export {SettlementTermType};
    