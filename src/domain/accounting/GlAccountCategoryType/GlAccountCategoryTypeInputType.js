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

const GlAccountCategoryTypeInputType = new GraphQLInputObjectType({
  name: 'GlAccountCategoryTypeInputType',
  description: 'input type for GlAccountCategoryType',

  fields: () => ({
    description: {type: GraphQLString},
    glAccountCategoryTypeId: {type: GraphQLString}
  })
});

export {GlAccountCategoryTypeInputType};
    