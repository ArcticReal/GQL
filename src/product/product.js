import{
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLBoolean,
} from 'graphql';

import {postToUrl, deleteToUrl} from '../framework/ofbizCon.js';

const ProductListItemType = new GraphQLObjectType({
  name: 'ProductListItem',
  description: '...',

  fields: () => ({
    productId: {type: GraphQLString},
    productName: {type: GraphQLString},
    author: {type: GraphQLString},
    price: {type: GraphQLString},
    publishingDate: {type: GraphQLString},
    mediumImageUrl: {type: GraphQLString},

  })
});

const ProductType = new GraphQLObjectType({
  name: 'Product',
  description: '...',

  fields: () => ({
    author: {
      type: ProductAttributeType,
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`productAttributes/find?productId=${product.productId}&attrName=author`)
    },
    publisher: {
        type: ProductAttributeType,
        resolve: (product, args, {loaders}) => loaders.ofbiz.load(`productAttributes/find?productId=${product.productId}&attrName=publisher`)
    },
    isbn: {
        type: ProductAttributeType,
        resolve: (product, args, {loaders}) => loaders.ofbiz.load(`productAttributes/find?productId=${product.productId}&attrName=ISBN`)
    },
    categoryMembers: {
      type: new GraphQLList(ProductCategoryMemberType),
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`productCategoryMembers/find?productId=${product.productId}`)
    },
    price: {
      type: ProductPriceType,
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`productPrices/${product.productId}`)
    },
    publishingDate: {
      type: ProductAttributeType,
      resolve: (product, args, {loaders}) => loaders.ofbiz.load(`productAttributes/find?productId=${product.productId}&attrName=publishingDate`)
    },
    productId: {type: GraphQLString},
    productName: {type: GraphQLString},
    description: {type: GraphQLString},
    longDescription: {type: GraphQLString},
    mediumImageUrl: {type: GraphQLString},
    primaryProductCategoryId: {type: GraphQLString},
    manufacturerPartyId: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    introductionDate: {type: GraphQLString},
    releaseDate: {type: GraphQLString},
    supportDiscontinuationDate: {type: GraphQLString},
    salesDiscontinuationDate: {type: GraphQLString},
    salesDiscWhenNotAvail: {type: GraphQLBoolean},
    internalName: {type: GraphQLString},
    brandName: {type: GraphQLString},
    comments: {type: GraphQLString},
    priceDetailText: {type: GraphQLString},
    smallImageUrl: {type: GraphQLString},
    largeImageUrl: {type: GraphQLString},
    detailImageUrl: {type: GraphQLString},
    originalImageUrl: {type: GraphQLString},
    detailScreen: {type: GraphQLString},
    inventoryMessage: {type: GraphQLString},
    inventoryItemTypeId: {type: GraphQLString},
    requireInventory: {type: GraphQLBoolean},
    quantityUomId: {type: GraphQLString},
    quantityIncluded: {type: GraphQLString},
    piecesIncluded: {type: GraphQLString},
    requireAmount: {type: GraphQLBoolean},
    fixedAmount: {type: GraphQLString},
    amountUomTypeId: {type: GraphQLString},
    weightUomId: {type: GraphQLString},
    shippingWeight: {type: GraphQLString},
    productWeight: {type: GraphQLString},
    heightUomId: {type: GraphQLString},
    productHeight: {type: GraphQLString},
    shippingHeight: {type: GraphQLString},
    widthUomId: {type: GraphQLString},
    productWidth: {type: GraphQLString},
    shippingWidth: {type: GraphQLString},
    depthUomId: {type: GraphQLString},
    productDepth: {type: GraphQLString},
    shippingDepth: {type: GraphQLString},
    diameterUomId: {type: GraphQLString},
    productDiameter: {type: GraphQLString},
    productRating: {type: GraphQLString},
    ratingTypeEnum: {type: GraphQLString},
    returnable: {type: GraphQLBoolean},
    taxable: {type: GraphQLBoolean},
    chargeShipping: {type: GraphQLBoolean},
    autoCreateKeywords: {type: GraphQLBoolean},
    includeInPromotions: {type: GraphQLBoolean},
    isVirtual: {type: GraphQLBoolean},
    isVariant: {type: GraphQLBoolean},
    virtualVariantMethodEnum: {type: GraphQLString},
    originGeoId: {type: GraphQLString},
    requirementMethodEnumId: {type: GraphQLString},
    billOfMaterialLevel: {type: GraphQLString},
    reservMaxPersons: {type: GraphQLString},
    reserv2ndPPPerc: {type: GraphQLString},
    reservNthPPPerc: {type: GraphQLString},
    configId: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    lastModifiedDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    inShippingBox: {type: GraphQLBoolean},
    defaultShipmentBoxTypeId: {type: GraphQLString},
    lotIdFilledIn: {type: GraphQLString},
  })
});

const ProductAttributeType = new GraphQLObjectType({
  name: 'ProductAttribute',
  description: '...',

  fields: () => ({
    attrName: {
      type: GraphQLString
    },
    attrValue: {
      type: GraphQLString
    },
    attrType: {
      type: GraphQLString
    },
  })
});

const ProductPriceType = new GraphQLObjectType({
  name: 'ProductPrice',
  description: '...',

  fields: () => ({
    productId: {type: GraphQLString},
    productPriceType: {
      type: ProductPriceTypeType,
      resolve: (productPrice) => fetchFromUrl(`productPriceTypes/${productPrice.productPriceTypeId}`)
    },
    productPricePurpose: {
      type: ProductPricePurposeType,
      resolve: (productPrice) => fetchFromUrl(`productPricePurposes/${productPrice.productPricePurposeId}`)
    },
    currencyUomId: {type: GraphQLString},
    productStoreGroupId: {type: GraphQLString},
    price: {type: GraphQLString},

    fromDate: {type: GraphQLString},

  })
});

const ProductPricePurposeType = new GraphQLObjectType({
  name: 'ProductPricePurpose',
  description: 'pricePurposes',

  fields: () => ({
    productPricePurposeId: {type: GraphQLString},
    description: {type: GraphQLString},

  })

});

const ProductPriceTypeType = new GraphQLObjectType({
  name: 'ProductPriceType',
  description: 'Types of productPrices',

  fields: () => ({
    productPriceTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
  })

});

const ProductCategoryType = new GraphQLObjectType({
  name: 'ProductCategory',
  description: '...',

  fields: () => ({
    productCategoryId: {type: GraphQLString},
    productCategoryTypeId: {type: GraphQLString},
    primaryParentCategoryId: {type: GraphQLString},
    categoryName: {type: GraphQLString},
    description: {type: GraphQLString},
    categoryMembers: {
      type: new GraphQLList(ProductCategoryMemberType),
      resolve: (productCategory, args, {loaders}) => loaders.ofbiz.load(`productCategoryMembers/find?productCategoryId=${productCategory.productCategoryId}`)
    },
  })

});

const ProductCategoryMemberType = new GraphQLObjectType({
  name:  'CategoryMembers',
  description: '...',

  fields: () => ({

    productCategory: {
      type: ProductCategoryType,
      resolve: (categoryMember, args, {loaders}) => loaders.ofbiz.load(`productCategorys/${categoryMember.productCategoryId}`)
    },
    product: {
      type: ProductType,
      resolve: (categoryMember, args, {loaders}) => loaders.ofbiz.load(`products/${categoryMember.productId}`)
    },
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    comments: {type: GraphQLString},
    sequenceNum: {type: GraphQLString},
    quantity: {type: GraphQLString},

  })
});

const createProduct = {

  type: ProductType,
  description: 'adds a Product to ofbiz db',

  args: {
    productName: {type: GraphQLString},
  },
  resolve: (root, args, {req}) => postToUrl(`products/add`, args, req)

};

const createProductCategory = {
  type: ProductCategoryType,
  description: 'adds a ProductCategory to the ofbiz db',
  args: {
    categoryName: {
      type: GraphQLString
    }
  },
  resolve: (root, args, {req}) => postToUrl(`productCategorys/add`, args, req)
};

const editProductCategory = {
  type: ProductCategoryType,
  description: 'edits a ProductCategory in the ofbiz db',
  args: {
    productCategoryId: {
      type: GraphQLString
    },
    categoryName: {
      type: GraphQLString
    }
  },
resolve: (root, args, {req}) => putToUrl(`productCategorys/${args.productCategoryId}`, args, req)
};

const deleteProductCategory = {
  type: ProductCategoryType,
  description: 'removes a ProductCategory from the ofbiz db',
  args: {
    productCategoryId: {
      type: GraphQLString
    },
  },
  resolve: (root, args, {req}) => deleteToUrl(`productCategorys/${args.productCategoryId}`, args, req)
};


const deleteProduct = {
  type: ProductType,
  description: 'adds a product to ofbiz db',

  args: {
    productId: {type: GraphQLString},
  },
  resolve: (root, args, {req}) => deleteToUrl(`products/${args.productId}`, null, req)

};

const productMutations = ({
  createProduct: createProduct,
  deleteProduct: deleteProduct,
  createProductCategory: createProductCategory,
  editProductCategory: editProductCategory,
  deleteProductCategory: deleteProductCategory,


});

export {
  ProductListItemType,
  ProductType,
  ProductAttributeType,
  ProductPriceType,
  ProductPricePurposeType,
  ProductPriceTypeType,
  ProductCategoryType,
  productMutations
};
