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

const GlAccountCategoryResponseType = new GraphQLObjectType({
  name: 'GlAccountCategoryResponseType',
  description: 'response type for GlAccountCategory',

  fields: () => ({
    description: {type: GraphQLString},
    glAccountCategoryId: {type: GraphQLString},
    glAccountCategoryTypeId: {type: GraphQLString}
  })
});

export {GlAccountCategoryResponseType};
    