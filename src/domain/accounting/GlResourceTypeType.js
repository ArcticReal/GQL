
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


const GlResourceTypeType = new GraphQLObjectType({
  name: 'GlResourceTypeType',
  description: 'Type for GlResourceType in accounting',

  fields: () => ({
    glResourceTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    glAccount: {
      type: new GraphQLList(GlAccountType),
      args : {glResourceTypeId: {type: GraphQLString}},
      resolve: (glResourceType, args, {loaders}) => loaders.ofbizArray.load(`glAccounts/find?glResourceTypeId=${glResourceType.glResourceTypeId}`)
    }
  })
});

export {GlResourceTypeType};
    