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
import {ProductStoreCatalogInputType} from '../../product/ProductStoreCatalog/ProductStoreCatalogInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreCatalog = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductStoreCatalog method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreCatalogs/add?`, null, req);
  }
};
export {createProductStoreCatalog};


const updateProductStoreCatalog = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductStoreCatalog method',
  args:{productStoreCatalogToBeUpdated: {type: ProductStoreCatalogInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreCatalogs/${args.nullVal}?`, args.productStoreCatalogToBeUpdated, req);
  }
};
export {updateProductStoreCatalog};


const deleteProductStoreCatalogByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductStoreCatalogByIdUpdated method',
  args:{productStoreCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreCatalogs/${args.productStoreCatalogId}?`, null, req);
  }
};
export {deleteProductStoreCatalogByIdUpdated};
