
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {AcctgTransType} from '../accounting/AcctgTransType.js';


const AcctgTransAttributeType = new GraphQLObjectType({
  name: 'AcctgTransAttributeType',
  description: 'Type for AcctgTransAttribute in accounting',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    acctgTrans: {
      type: AcctgTransType,
      args : {acctgTransId: {type: GraphQLString}},
      resolve: (acctgTransAttribute, args, {loaders}) => loaders.ofbiz.load(`acctgTranss/find?acctgTransId=${acctgTransAttribute.acctgTransId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {AcctgTransAttributeType};
    