
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
    




const GlFiscalTypeInputType = new GraphQLInputObjectType({
  name: 'GlFiscalTypeInputType',
  description: 'input type for GlFiscalType in accounting',

  fields: () => ({
    glFiscalTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {GlFiscalTypeInputType};
    