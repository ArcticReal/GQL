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

const GlAccountCategoryMemberResponseType = new GraphQLObjectType({
  name: 'GlAccountCategoryMemberResponseType',
  description: 'response type for GlAccountCategoryMember',

  fields: () => ({
    amountPercentage: {type: GraphQLFloat},
    fromDate: {type: GraphQLString},
    glAccountCategoryId: {type: GraphQLString},
    glAccountId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {GlAccountCategoryMemberResponseType};
    