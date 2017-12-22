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

const GlAccountCategoryTypeResponseType = new GraphQLObjectType({
  name: 'GlAccountCategoryTypeResponseType',
  description: 'response type for GlAccountCategoryType',

  fields: () => ({
    description: {type: GraphQLString},
    glAccountCategoryTypeId: {type: GraphQLString}
  })
});

export {GlAccountCategoryTypeResponseType};
    