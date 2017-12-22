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

const ProductPriceTypeResponseType = new GraphQLObjectType({
  name: 'ProductPriceTypeResponseType',
  description: 'response type for ProductPriceType',

  fields: () => ({
    description: {type: GraphQLString},
    productPriceTypeId: {type: GraphQLString}
  })
});

export {ProductPriceTypeResponseType};
    