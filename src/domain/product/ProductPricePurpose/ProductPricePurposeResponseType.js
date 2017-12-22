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

const ProductPricePurposeResponseType = new GraphQLObjectType({
  name: 'ProductPricePurposeResponseType',
  description: 'response type for ProductPricePurpose',

  fields: () => ({
    description: {type: GraphQLString},
    productPricePurposeId: {type: GraphQLString}
  })
});

export {ProductPricePurposeResponseType};
    