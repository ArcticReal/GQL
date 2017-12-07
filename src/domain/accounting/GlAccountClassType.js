
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


const GlAccountClassType = new GraphQLObjectType({
  name: 'GlAccountClassType',
  description: 'Type for GlAccountClass in accounting',

  fields: () => ({
    parentClass: {
      type: GlAccountClassType,
      args : {parentClassId: {type: GraphQLString}},
      resolve: (glAccountClass, args, {loaders}) => loaders.ofbiz.load(`glAccountClasss/find?glAccountClassId=${glAccountClass.parentClassId}`)
    },
    glAccountClassId: {type: GraphQLString},
    description: {type: GraphQLString},
    isAssetClass: {type: GraphQLBoolean},
    glAccount: {
      type: new GraphQLList(GlAccountType),
      args : {glAccountClassId: {type: GraphQLString}},
      resolve: (glAccountClass, args, {loaders}) => loaders.ofbizArray.load(`glAccounts/find?glAccountClassId=${glAccountClass.glAccountClassId}`)
    },
    glAccountClass: {
      type: new GraphQLList(GlAccountClassType),
      args : {glAccountClassId: {type: GraphQLString}},
      resolve: (glAccountClass, args, {loaders}) => loaders.ofbizArray.load(`glAccountClasss/find?glAccountClassId=${glAccountClass.glAccountClassId}`)
    }
  })
});

export {GlAccountClassType};
    