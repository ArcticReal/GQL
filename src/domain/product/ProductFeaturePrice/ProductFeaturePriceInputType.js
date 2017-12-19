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

const ProductFeaturePriceInputType = new GraphQLInputObjectType({
  name: 'ProductFeaturePriceInputType',
  description: 'input type for ProductFeaturePrice',

  fields: () => ({
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    price: {type: GraphQLFloat},
    productFeatureId: {type: GraphQLString},
    productPriceTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeaturePriceInputType};
    