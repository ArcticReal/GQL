
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

import {AcctgTransTypeType} from '../../accounting/AcctgTransType/AcctgTransTypeType.js';


const AcctgTransTypeAttrType = new GraphQLObjectType({
  name: 'AcctgTransTypeAttrType',
  description: 'Type for AcctgTransTypeAttr in accounting',

  fields: () => ({
    acctgTransType: {
      type: AcctgTransTypeType,
      args : {acctgTransTypeId: {type: GraphQLString}},
      resolve: (acctgTransTypeAttr, args, {loaders}) => loaders.ofbiz.load(`accounting/acctgTrans/acctgTransTypes/find?acctgTransTypeId=${acctgTransTypeAttr.acctgTransTypeId}`)
    },
    description: {type: GraphQLString},
    attrName: {type: GraphQLString}
  })
});

export {AcctgTransTypeAttrType};
    