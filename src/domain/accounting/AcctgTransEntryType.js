
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
    acctgTransEntries: {
      type: new GraphQLList(AcctgTransEntryType),
      args : {acctgTransEntryTypeId: {type: GraphQLString}},
      resolve: (acctgTransEntryType, args, {loaders}) => loaders.ofbizArray.load(`acctgTransEntrys/find?acctgTransEntryTypeId=${acctgTransEntryType.acctgTransEntryTypeId}`)
    },
    acctgTransEntryTypes: {
      type: new GraphQLList(AcctgTransEntryTypeType),
      args : {acctgTransEntryTypeId: {type: GraphQLString}},
      resolve: (acctgTransEntryType, args, {loaders}) => loaders.ofbizArray.load(`acctgTransEntryTypes/find?acctgTransEntryTypeId=${acctgTransEntryType.acctgTransEntryTypeId}`)
    }
  })
});

export {AcctgTransEntryTypeType};
    




const AcctgTransEntryTypeInputType = new GraphQLInputObjectType({
  name: 'AcctgTransEntryTypeInputType',
  description: 'input type for AcctgTransEntryType in accounting',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    acctgTransEntryTypeId: {type: GraphQLString}
  })
});

export {AcctgTransEntryTypeInputType};
    