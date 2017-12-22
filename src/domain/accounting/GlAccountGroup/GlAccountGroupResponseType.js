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

const GlAccountGroupResponseType = new GraphQLObjectType({
  name: 'GlAccountGroupResponseType',
  description: 'response type for GlAccountGroup',

  fields: () => ({
    description: {type: GraphQLString},
    glAccountGroupId: {type: GraphQLString},
    glAccountGroupTypeId: {type: GraphQLString}
  })
});

export {GlAccountGroupResponseType};
    