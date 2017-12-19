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

const ProductPriceTypeInputType = new GraphQLInputObjectType({
  name: 'ProductPriceTypeInputType',
  description: 'input type for ProductPriceType',

  fields: () => ({
    description: {type: GraphQLString},
    productPriceTypeId: {type: GraphQLString}
  })
});

export {ProductPriceTypeInputType};
    