
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
    glAccounts: {
      type: new GraphQLList(GlAccountType),
      args : {glAccountClassId: {type: GraphQLString}},
      resolve: (glAccountClass, args, {loaders}) => loaders.ofbizArray.load(`glAccounts/find?glAccountClassId=${glAccountClass.glAccountClassId}`)
    },
    glAccountClasses: {
      type: new GraphQLList(GlAccountClassType),
      args : {glAccountClassId: {type: GraphQLString}},
      resolve: (glAccountClass, args, {loaders}) => loaders.ofbizArray.load(`glAccountClasss/find?glAccountClassId=${glAccountClass.glAccountClassId}`)
    }
  })
});

export {GlAccountClassType};
    




const GlAccountClassInputType = new GraphQLInputObjectType({
  name: 'GlAccountClassInputType',
  description: 'input type for GlAccountClass in accounting',

  fields: () => ({
    parentClassId: {type: GraphQLString},
    glAccountClassId: {type: GraphQLString},
    description: {type: GraphQLString},
    isAssetClass: {type: GraphQLBoolean}
  })
});

export {GlAccountClassInputType};
    