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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';


const createProductPricePurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductPricePurpose method',
  args:{description: {type: GraphQLString},productPricePurposeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPrice/createProductPricePurpose?description=${args.description}productPricePurposeId=${args.productPricePurposeId}`, null, req);
  }
};
export {createProductPricePurpose};


const createProductPriceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductPriceType method',
  args:{description: {type: GraphQLString},productPriceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPrice/createProductPriceType?description=${args.description}productPriceTypeId=${args.productPriceTypeId}`, null, req);
  }
};
export {createProductPriceType};


const createQuantityBreakType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createQuantityBreakType method',
  args:{quantityBreakTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPrice/createQuantityBreakType?quantityBreakTypeId=${args.quantityBreakTypeId}description=${args.description}`, null, req);
  }
};
export {createQuantityBreakType};


const createSaleType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSaleType method',
  args:{saleTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPrice/createSaleType?saleTypeId=${args.saleTypeId}description=${args.description}`, null, req);
  }
};
export {createSaleType};


const deleteProductPricePurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPricePurpose method',
  args:{productPricePurposeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPrice/deleteProductPricePurpose?productPricePurposeId=${args.productPricePurposeId}`, null, req);
  }
};
export {deleteProductPricePurpose};


const deleteProductPriceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPriceType method',
  args:{productPriceTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPrice/deleteProductPriceType?productPriceTypeId=${args.productPriceTypeId}`, null, req);
  }
};
export {deleteProductPriceType};


const deleteQuantityBreakType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteQuantityBreakType method',
  args:{quantityBreakTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPrice/deleteQuantityBreakType?quantityBreakTypeId=${args.quantityBreakTypeId}`, null, req);
  }
};
export {deleteQuantityBreakType};


const deleteSaleType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSaleType method',
  args:{saleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPrice/deleteSaleType?saleTypeId=${args.saleTypeId}`, null, req);
  }
};
export {deleteSaleType};


const updateProductPricePurpose = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPricePurpose method',
  args:{productPricePurposeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPrice/updateProductPricePurpose?productPricePurposeId=${args.productPricePurposeId}description=${args.description}`, null, req);
  }
};
export {updateProductPricePurpose};


const updateProductPriceType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPriceType method',
  args:{productPriceTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPrice/updateProductPriceType?productPriceTypeId=${args.productPriceTypeId}description=${args.description}`, null, req);
  }
};
export {updateProductPriceType};


const updateQuantityBreakType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateQuantityBreakType method',
  args:{quantityBreakTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPrice/updateQuantityBreakType?quantityBreakTypeId=${args.quantityBreakTypeId}description=${args.description}`, null, req);
  }
};
export {updateQuantityBreakType};


const updateSaleType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSaleType method',
  args:{saleTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productPrice/updateSaleType?saleTypeId=${args.saleTypeId}description=${args.description}`, null, req);
  }
};
export {updateSaleType};
