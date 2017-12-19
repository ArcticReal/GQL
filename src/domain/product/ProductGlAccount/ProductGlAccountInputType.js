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

const ProductGlAccountInputType = new GraphQLInputObjectType({
  name: 'ProductGlAccountInputType',
  description: 'input type for ProductGlAccount',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    glAccountTypeId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {ProductGlAccountInputType};
    