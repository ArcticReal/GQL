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

const ProductCategoryGlAccountInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryGlAccountInputType',
  description: 'input type for ProductCategoryGlAccount',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    glAccountTypeId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString}
  })
});

export {ProductCategoryGlAccountInputType};
    