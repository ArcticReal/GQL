'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProduct = exports.ProductCategoryType = exports.ProductPriceTypeType = exports.ProductPricePurposeType = exports.ProductPriceType = exports.ProductAttributeType = exports.ProductType = exports.ProductListItemType = undefined;

var _graphql = require('graphql');

var _ofbizCon = require('../framework/ofbizCon.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProductListItemType = new _graphql.GraphQLObjectType({
  name: 'ProductListItem',
  description: '...',

  fields: function fields() {
    return {
      productId: { type: _graphql.GraphQLString },
      productName: { type: _graphql.GraphQLString },
      author: { type: _graphql.GraphQLString },
      price: { type: _graphql.GraphQLString },
      publishingDate: { type: _graphql.GraphQLString },
      mediumImageUrl: { type: _graphql.GraphQLString }

    };
  }
});

var ProductType = new _graphql.GraphQLObjectType({
  name: 'Product',
  description: '...',

  fields: function fields() {
    var _ref8;

    return _ref8 = {
      author: {
        type: ProductAttributeType,
        resolve: function resolve(product, args, _ref) {
          var loaders = _ref.loaders;
          return loaders.ofbiz.load('productAttributes/find?productId=' + product.productId + '&attrName=author');
        }
      },
      publisher: {
        type: ProductAttributeType,
        resolve: function resolve(product, args, _ref2) {
          var loaders = _ref2.loaders;
          return loaders.ofbiz.load('productAttributes/find?productId=' + product.productId + '&attrName=publisher');
        }
      },
      publishingDate: {
        type: ProductAttributeType,
        resolve: function resolve(product, args, _ref3) {
          var loaders = _ref3.loaders;
          return loaders.ofbiz.load('productAttributes/find?productId=' + product.productId + '&attrName=publishingDate');
        }
      },
      isbn: {
        type: ProductAttributeType,
        resolve: function resolve(product, args, _ref4) {
          var loaders = _ref4.loaders;
          return loaders.ofbiz.load('productAttributes/find?productId=' + product.productId + '&attrName=ISBN');
        }
      },
      categoryMembers: {
        type: new _graphql.GraphQLList(ProductCategoryMemberType),
        resolve: function resolve(product, args, _ref5) {
          var loaders = _ref5.loaders;
          return loaders.ofbiz.load('productCategoryMembers/find?productId=' + product.productId);
        }
      },
      price: {
        type: ProductPriceType,
        resolve: function resolve(product, args, _ref6) {
          var loaders = _ref6.loaders;
          return loaders.ofbiz.load('productPrices/' + product.productId);
        }
      }
    }, _defineProperty(_ref8, 'publishingDate', {
      type: ProductAttributeType,
      resolve: function resolve(product, args, _ref7) {
        var loaders = _ref7.loaders;
        return loaders.ofbiz.load('productAttributes/find?productId=' + product.productId + '&attrName=publishingDate');
      }
    }), _defineProperty(_ref8, 'productId', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'productName', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'description', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'longDescription', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'mediumImageUrl', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'primaryProductCategoryId', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'manufacturerPartyId', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'facilityId', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'introductionDate', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'releaseDate', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'supportDiscontinuationDate', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'salesDiscontinuationDate', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'salesDiscWhenNotAvail', { type: _graphql.GraphQLBoolean }), _defineProperty(_ref8, 'internalName', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'brandName', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'comments', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'priceDetailText', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'smallImageUrl', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'largeImageUrl', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'detailImageUrl', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'originalImageUrl', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'detailScreen', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'inventoryMessage', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'inventoryItemTypeId', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'requireInventory', { type: _graphql.GraphQLBoolean }), _defineProperty(_ref8, 'quantityUomId', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'quantityIncluded', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'piecesIncluded', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'requireAmount', { type: _graphql.GraphQLBoolean }), _defineProperty(_ref8, 'fixedAmount', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'amountUomTypeId', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'weightUomId', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'shippingWeight', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'productWeight', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'heightUomId', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'productHeight', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'shippingHeight', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'widthUomId', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'productWidth', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'shippingWidth', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'depthUomId', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'productDepth', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'shippingDepth', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'diameterUomId', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'productDiameter', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'productRating', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'ratingTypeEnum', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'returnable', { type: _graphql.GraphQLBoolean }), _defineProperty(_ref8, 'taxable', { type: _graphql.GraphQLBoolean }), _defineProperty(_ref8, 'chargeShipping', { type: _graphql.GraphQLBoolean }), _defineProperty(_ref8, 'autoCreateKeywords', { type: _graphql.GraphQLBoolean }), _defineProperty(_ref8, 'includeInPromotions', { type: _graphql.GraphQLBoolean }), _defineProperty(_ref8, 'isVirtual', { type: _graphql.GraphQLBoolean }), _defineProperty(_ref8, 'isVariant', { type: _graphql.GraphQLBoolean }), _defineProperty(_ref8, 'virtualVariantMethodEnum', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'originGeoId', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'requirementMethodEnumId', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'billOfMaterialLevel', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'reservMaxPersons', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'reserv2ndPPPerc', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'reservNthPPPerc', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'configId', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'createdDate', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'createdByUserLogin', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'lastModifiedDate', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'lastModifiedByUserLogin', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'inShippingBox', { type: _graphql.GraphQLBoolean }), _defineProperty(_ref8, 'defaultShipmentBoxTypeId', { type: _graphql.GraphQLString }), _defineProperty(_ref8, 'lotIdFilledIn', { type: _graphql.GraphQLString }), _ref8;
  }
});

var ProductAttributeType = new _graphql.GraphQLObjectType({
  name: 'ProductAttribute',
  description: '...',

  fields: function fields() {
    return {
      attrName: {
        type: _graphql.GraphQLString
      },
      attrValue: {
        type: _graphql.GraphQLString
      },
      attrType: {
        type: _graphql.GraphQLString
      }
    };
  }

});

var ProductPriceType = new _graphql.GraphQLObjectType({
  name: 'ProductPrice',
  description: '...',

  fields: function fields() {
    return {
      productId: { type: _graphql.GraphQLString },
      productPriceType: {
        type: ProductPriceTypeType,
        resolve: function resolve(productPrice) {
          return fetchFromUrl('productPriceTypes/' + productPrice.productPriceTypeId);
        }
      },
      productPricePurpose: {
        type: ProductPricePurposeType,
        resolve: function resolve(productPrice) {
          return fetchFromUrl('productPricePurposes/' + productPrice.productPricePurposeId);
        }
      },
      currencyUomId: { type: _graphql.GraphQLString },
      productStoreGroupId: { type: _graphql.GraphQLString },
      price: { type: _graphql.GraphQLString },

      fromDate: { type: _graphql.GraphQLString }

    };
  }
});

var ProductPricePurposeType = new _graphql.GraphQLObjectType({
  name: 'ProductPricePurpose',
  description: 'pricePurposes',

  fields: function fields() {
    return {
      productPricePurposeId: { type: _graphql.GraphQLString },
      description: { type: _graphql.GraphQLString }

    };
  }

});

var ProductPriceTypeType = new _graphql.GraphQLObjectType({
  name: 'ProductPriceType',
  description: 'Types of productPrices',

  fields: function fields() {
    return {
      productPriceTypeId: { type: _graphql.GraphQLString },
      description: { type: _graphql.GraphQLString }
    };
  }

});

var ProductCategoryType = new _graphql.GraphQLObjectType({
  name: 'ProductCategory',
  description: '...',

  fields: function fields() {
    return {
      productCategoryId: { type: _graphql.GraphQLString },
      productCategoryTypeId: { type: _graphql.GraphQLString },
      primaryParentCategoryId: { type: _graphql.GraphQLString },
      categoryName: { type: _graphql.GraphQLString },
      description: { type: _graphql.GraphQLString },
      categoryMembers: {
        type: new _graphql.GraphQLList(ProductCategoryMemberType),
        resolve: function resolve(productCategory, args, _ref9) {
          var loaders = _ref9.loaders;
          return loaders.ofbiz.load('productCategoryMembers/find?productCategoryId=' + productCategory.productCategoryId);
        }
      }
    };
  }

});

var ProductCategoryMemberType = new _graphql.GraphQLObjectType({
  name: 'CategoryMembers',
  description: '...',

  fields: function fields() {
    return {

      productCategory: {
        type: ProductCategoryType,
        resolve: function resolve(categoryMember, args, _ref10) {
          var loaders = _ref10.loaders;
          return loaders.ofbiz.load('productCategorys/' + categoryMember.productCategoryId);
        }
      },
      product: {
        type: ProductType,
        resolve: function resolve(categoryMember, args, _ref11) {
          var loaders = _ref11.loaders;
          return loaders.ofbiz.load('products/' + categoryMember.productId);
        }
      },
      fromDate: { type: _graphql.GraphQLString },
      thruDate: { type: _graphql.GraphQLString },
      comments: { type: _graphql.GraphQLString },
      sequenceNum: { type: _graphql.GraphQLString },
      quantity: { type: _graphql.GraphQLString }

    };
  }
});

var createProduct = {

  type: ProductType,
  description: 'adds a product to ofbiz db',

  args: {
    productName: { type: _graphql.GraphQLString }
  },
  resolve: function resolve(root, args, _ref12) {
    var req = _ref12.req;
    return (0, _ofbizCon.postToUrl)('products/add', args, req);
  }

};

exports.ProductListItemType = ProductListItemType;
exports.ProductType = ProductType;
exports.ProductAttributeType = ProductAttributeType;
exports.ProductPriceType = ProductPriceType;
exports.ProductPricePurposeType = ProductPricePurposeType;
exports.ProductPriceTypeType = ProductPriceTypeType;
exports.ProductCategoryType = ProductCategoryType;
exports.createProduct = createProduct;