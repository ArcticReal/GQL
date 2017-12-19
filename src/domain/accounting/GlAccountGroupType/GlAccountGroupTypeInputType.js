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

const GlAccountGroupTypeInputType = new GraphQLInputObjectType({
  name: 'GlAccountGroupTypeInputType',
  description: 'input type for GlAccountGroupType',

  fields: () => ({
    description: {type: GraphQLString},
    glAccountGroupTypeId: {type: GraphQLString}
  })
});

export {GlAccountGroupTypeInputType};
    