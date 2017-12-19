
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

import {AcctgTransType} from '../../accounting/AcctgTrans/AcctgTransType.js';


const AcctgTransAttributeType = new GraphQLObjectType({
  name: 'AcctgTransAttributeType',
  description: 'Type for AcctgTransAttribute in accounting',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    acctgTrans: {
      type: AcctgTransType,
      args : {acctgTransId: {type: GraphQLString}},
      resolve: (acctgTransAttribute, args, {loaders}) => loaders.ofbiz.load(`accounting/acctgTranss/find?acctgTransId=${acctgTransAttribute.acctgTransId}`)
    },
    attrName: {type: GraphQLString}
  })
});

export {AcctgTransAttributeType};
    