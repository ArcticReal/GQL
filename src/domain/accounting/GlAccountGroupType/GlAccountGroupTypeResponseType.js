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

const GlAccountGroupTypeResponseType = new GraphQLObjectType({
  name: 'GlAccountGroupTypeResponseType',
  description: 'response type for GlAccountGroupType',

  fields: () => ({
    description: {type: GraphQLString},
    glAccountGroupTypeId: {type: GraphQLString}
  })
});

export {GlAccountGroupTypeResponseType};
    