
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

import {ProductCategoryType} from '../../product/ProductCategory/ProductCategoryType.js';


const ProductCategoryLinkType = new GraphQLObjectType({
  name: 'ProductCategoryLinkType',
  description: 'Type for ProductCategoryLink in product',

  fields: () => ({
    linkInfo: {type: GraphQLString},
    comments: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    detailText: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    detailSubScreen: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (productCategoryLink, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategorys/find?productCategoryId=${productCategoryLink.productCategoryId}`)
    },
    titleText: {type: GraphQLString},
    imageUrl: {type: GraphQLString},
    imageTwoUrl: {type: GraphQLString},
    linkTypeEnumId: {type: GraphQLString},
    linkSeqId: {type: GraphQLString}
  })
});

export {ProductCategoryLinkType};
    