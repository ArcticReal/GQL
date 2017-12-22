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
import {ProductStoreCatalogResponseType} from '../../product/ProductStoreCatalog/ProductStoreCatalogResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreCatalog = {
  type: ProductStoreCatalogResponseType,
  description: 'mutation for ofbiz createProductStoreCatalog method',
  args:{productStoreCatalogToBeAdded: {type: ProductStoreCatalogInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreCatalogs/add?`, args.productStoreCatalogToBeAdded, req);
  }
};
export {createProductStoreCatalog};


const updateProductStoreCatalog = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreCatalog method',
  args:{productStoreCatalogToBeUpdated: {type: ProductStoreCatalogInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreCatalogs/${args.nullVal}?`, args.productStoreCatalogToBeUpdated, req);
  }
};
export {updateProductStoreCatalog};


const deleteProductStoreCatalogByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreCatalogByIdUpdated method',
  args:{productStoreCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreCatalogs/${args.productStoreCatalogId}?`, null, req);
  }
};
export {deleteProductStoreCatalogByIdUpdated};
