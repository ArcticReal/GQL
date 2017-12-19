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

const GlAccountGroupInputType = new GraphQLInputObjectType({
  name: 'GlAccountGroupInputType',
  description: 'input type for GlAccountGroup',

  fields: () => ({
    description: {type: GraphQLString},
    glAccountGroupId: {type: GraphQLString},
    glAccountGroupTypeId: {type: GraphQLString}
  })
});

export {GlAccountGroupInputType};
    