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
import {ProdCatalogInputType} from '../../product/ProdCatalog/ProdCatalogInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProdCatalog = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProdCatalog method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/prodCatalogs/add?`, null, req);
  }
};
export {createProdCatalog};


const updateProdCatalog = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProdCatalog method',
  args:{prodCatalogToBeUpdated: {type: ProdCatalogInputType},prodCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/prodCatalogs/${args.prodCatalogId}?`, args.prodCatalogToBeUpdated, req);
  }
};
export {updateProdCatalog};


const deleteProdCatalogByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProdCatalogByIdUpdated method',
  args:{prodCatalogId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/prodCatalogs/${args.prodCatalogId}?`, null, req);
  }
};
export {deleteProdCatalogByIdUpdated};
