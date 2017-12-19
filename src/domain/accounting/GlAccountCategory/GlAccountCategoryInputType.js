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

const GlAccountCategoryInputType = new GraphQLInputObjectType({
  name: 'GlAccountCategoryInputType',
  description: 'input type for GlAccountCategory',

  fields: () => ({
    description: {type: GraphQLString},
    glAccountCategoryId: {type: GraphQLString},
    glAccountCategoryTypeId: {type: GraphQLString}
  })
});

export {GlAccountCategoryInputType};
    