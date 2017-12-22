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

const GlAccountTypeResponseType = new GraphQLObjectType({
  name: 'GlAccountTypeResponseType',
  description: 'response type for GlAccountType',

  fields: () => ({
    description: {type: GraphQLString},
    glAccountTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {GlAccountTypeResponseType};
    