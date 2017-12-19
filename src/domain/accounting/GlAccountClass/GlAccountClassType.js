
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

import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';


const GlAccountClassType = new GraphQLObjectType({
  name: 'GlAccountClassType',
  description: 'Type for GlAccountClass in accounting',

  fields: () => ({
    parentClass: {
      type: GlAccountClassType,
      args : {parentClassId: {type: GraphQLString}},
      resolve: (glAccountClass, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccount/glAccountClasss/find?glAccountClassId=${glAccountClass.parentClassId}`)
    },
    glAccountClassId: {type: GraphQLString},
    description: {type: GraphQLString},
    isAssetClass: {type: GraphQLBoolean},
    glAccounts: {
      type: new GraphQLList(GlAccountType),
      args : {},
      resolve: (glAccountClass, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccounts/find?glAccountClassId=${glAccountClass.glAccountClassId}`)
    },
    glAccountClasses: {
      type: new GraphQLList(GlAccountClassType),
      args : {},
      resolve: (glAccountClass, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/glAccountClasss/find?glAccountClassId=${glAccountClass.glAccountClassId}`)
    }
  })
});

export {GlAccountClassType};
    