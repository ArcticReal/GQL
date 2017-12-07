
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


const AcctgTransEntryTypeType = new GraphQLObjectType({
  name: 'AcctgTransEntryTypeType',
  description: 'Type for AcctgTransEntryType in accounting',

  fields: () => ({
    parentType: {
      type: AcctgTransEntryTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (acctgTransEntryType, args, {loaders}) => loaders.ofbiz.load(`acctgTransEntryTypes/find?acctgTransEntryTypeId=${acctgTransEntryType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    acctgTransEntryTypeId: {type: GraphQLString},
    acctgTransEntry: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {acctgTransEntryTypeId: {type: GraphQLString}},
      resolve: (acctgTransEntryType, args, {loaders}) => loaders.ofbizArray.load(`acctgTransEntrys/find?acctgTransEntryTypeId=${acctgTransEntryType.acctgTransEntryTypeId}`)
    },
    acctgTransEntryType: {
      type: new GraphQLList(AcctgTransEntryTypeType),
      args : {acctgTransEntryTypeId: {type: GraphQLString}},
      resolve: (acctgTransEntryType, args, {loaders}) => loaders.ofbizArray.load(`acctgTransEntryTypes/find?acctgTransEntryTypeId=${acctgTransEntryType.acctgTransEntryTypeId}`)
    }
  })
});

export {AcctgTransEntryTypeType};
    