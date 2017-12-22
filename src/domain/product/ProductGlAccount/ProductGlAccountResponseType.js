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

const ProductGlAccountResponseType = new GraphQLObjectType({
  name: 'ProductGlAccountResponseType',
  description: 'response type for ProductGlAccount',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    glAccountTypeId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {ProductGlAccountResponseType};
    