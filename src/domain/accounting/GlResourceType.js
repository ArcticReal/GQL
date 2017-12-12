
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


const GlResourceTypeType = new GraphQLObjectType({
  name: 'GlResourceTypeType',
  description: 'Type for GlResourceType in accounting',

  fields: () => ({
    glResourceTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    glAccounts: {
      type: new GraphQLList(GlAccountType),
      args : {},
      resolve: (glResourceType, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccounts/find?glResourceTypeId=${glResourceType.glResourceTypeId}`)
    }
  })
});

export {GlResourceTypeType};
    




const GlResourceTypeInputType = new GraphQLInputObjectType({
  name: 'GlResourceTypeInputType',
  description: 'input type for GlResourceType in accounting',

  fields: () => ({
    glResourceTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {GlResourceTypeInputType};
    