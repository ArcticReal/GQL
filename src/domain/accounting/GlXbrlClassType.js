
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {GlAccountType} from '../accounting/GlAccountType.js';


const GlXbrlClassType = new GraphQLObjectType({
  name: 'GlXbrlClassType',
  description: 'Type for GlXbrlClass in accounting',

  fields: () => ({
    description: {type: GraphQLString},
    glXbrlClassId: {type: GraphQLString},
    glAccount: {
      type: new GraphQLList(GlAccountType),
      args : {glXbrlClassId: {type: GraphQLString}},
      resolve: (glXbrlClass, args, {loaders}) => loaders.ofbizArray.load(`glAccounts/find?glXbrlClassId=${glXbrlClass.glXbrlClassId}`)
    }
  })
});

export {GlXbrlClassType};
    