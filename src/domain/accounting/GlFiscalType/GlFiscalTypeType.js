
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


const GlFiscalTypeType = new GraphQLObjectType({
  name: 'GlFiscalTypeType',
  description: 'Type for GlFiscalType in accounting',

  fields: () => ({
    glFiscalTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {},
      resolve: (glFiscalType, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTranss/find?glFiscalTypeId=${glFiscalType.glFiscalTypeId}`)
    }
  })
});

export {GlFiscalTypeType};
    