
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


const GlFiscalTypeType = new GraphQLObjectType({
  name: 'GlFiscalTypeType',
  description: 'Type for GlFiscalType in accounting',

  fields: () => ({
    glFiscalTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    acctgTrans: {
      type: new GraphQLList(AcctgTransType),
      args : {glFiscalTypeId: {type: GraphQLString}},
      resolve: (glFiscalType, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?glFiscalTypeId=${glFiscalType.glFiscalTypeId}`)
    }
  })
});

export {GlFiscalTypeType};
    