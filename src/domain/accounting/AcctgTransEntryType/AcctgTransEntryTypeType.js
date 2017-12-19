
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

import {AcctgTransEntryType} from '../../accounting/AcctgTransEntry/AcctgTransEntryType.js';


const AcctgTransEntryTypeType = new GraphQLObjectType({
  name: 'AcctgTransEntryTypeType',
  description: 'Type for AcctgTransEntryType in accounting',

  fields: () => ({
    parentType: {
      type: AcctgTransEntryTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (acctgTransEntryType, args, {loaders}) => loaders.ofbiz.load(`accounting/acctgTrans/acctgTransEntryTypes/find?acctgTransEntryTypeId=${acctgTransEntryType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    acctgTransEntryTypeId: {type: GraphQLString},
    acctgTransEntries: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {},
      resolve: (acctgTransEntryType, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTrans/acctgTransEntrys/find?acctgTransEntryTypeId=${acctgTransEntryType.acctgTransEntryTypeId}`)
    },
    acctgTransEntryTypes: {
      type: new GraphQLList(AcctgTransEntryTypeType),
      args : {},
      resolve: (acctgTransEntryType, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTrans/acctgTransEntryTypes/find?acctgTransEntryTypeId=${acctgTransEntryType.acctgTransEntryTypeId}`)
    }
  })
});

export {AcctgTransEntryTypeType};
    