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

const GlAccountTypeInputType = new GraphQLInputObjectType({
  name: 'GlAccountTypeInputType',
  description: 'input type for GlAccountType',

  fields: () => ({
    description: {type: GraphQLString},
    glAccountTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {GlAccountTypeInputType};
    