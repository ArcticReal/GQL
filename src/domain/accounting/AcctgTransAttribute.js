
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

import {AcctgTransType} from '../accounting/AcctgTrans.js';


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
    




const AcctgTransAttributeInputType = new GraphQLInputObjectType({
  name: 'AcctgTransAttributeInputType',
  description: 'input type for AcctgTransAttribute in accounting',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    acctgTransId: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {AcctgTransAttributeInputType};
    