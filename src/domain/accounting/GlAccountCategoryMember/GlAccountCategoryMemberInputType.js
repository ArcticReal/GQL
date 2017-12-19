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

const GlAccountCategoryMemberInputType = new GraphQLInputObjectType({
  name: 'GlAccountCategoryMemberInputType',
  description: 'input type for GlAccountCategoryMember',

  fields: () => ({
    amountPercentage: {type: GraphQLFloat},
    fromDate: {type: GraphQLString},
    glAccountCategoryId: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {GlAccountCategoryMemberInputType};
    