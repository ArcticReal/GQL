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

const ProductPriceInputType = new GraphQLInputObjectType({
  name: 'ProductPriceInputType',
  description: 'input type for ProductPrice',

  fields: () => ({
    createdByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    customPriceCalcService: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    price: {type: GraphQLFloat},
    priceWithTax: {type: GraphQLFloat},
    priceWithoutTax: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    productPricePurposeId: {type: GraphQLString},
    productPriceTypeId: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    taxAmount: {type: GraphQLFloat},
    taxAuthGeoId: {type: GraphQLString},
    taxAuthPartyId: {type: GraphQLString},
    taxInPrice: {type: GraphQLBoolean},
    taxPercentage: {type: GraphQLFloat},
    termUomId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductPriceInputType};
    