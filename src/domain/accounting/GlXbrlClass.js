
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

import {GlAccountType} from '../accounting/GlAccount.js';


const GlXbrlClassType = new GraphQLObjectType({
  name: 'GlXbrlClassType',
  description: 'Type for GlXbrlClass in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    glXbrlClassId: {type: GraphQLString},
    glAccounts: {
      type: new GraphQLList(GlAccountType),
      args : {},
      resolve: (glXbrlClass, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccounts/find?glXbrlClassId=${glXbrlClass.glXbrlClassId}`)
    }
  })
});

export {GlXbrlClassType};
    




const GlXbrlClassInputType = new GraphQLInputObjectType({
  name: 'GlXbrlClassInputType',
  description: 'input type for GlXbrlClass in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    glXbrlClassId: {type: GraphQLString}
  })
});

export {GlXbrlClassInputType};
    