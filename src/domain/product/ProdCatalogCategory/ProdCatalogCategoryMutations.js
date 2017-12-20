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
import {ProdCatalogCategoryInputType} from '../../product/ProdCatalogCategory/ProdCatalogCategoryInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProdCatalogCategory = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProdCatalogCategory method',
  args:{prodCatalogCategoryToBeAdded: {type: ProdCatalogCategoryInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/prodCatalog/prodCatalogCategorys/add?`, args.prodCatalogCategoryToBeAdded, req);
  }
};
export {createProdCatalogCategory};


const updateProdCatalogCategory = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProdCatalogCategory method',
  args:{prodCatalogCategoryToBeUpdated: {type: ProdCatalogCategoryInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/prodCatalog/prodCatalogCategorys/${args.nullVal}?`, args.prodCatalogCategoryToBeUpdated, req);
  }
};
export {updateProdCatalogCategory};


const deleteProdCatalogCategoryByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProdCatalogCategoryByIdUpdated method',
  args:{prodCatalogCategoryId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/prodCatalog/prodCatalogCategorys/${args.prodCatalogCategoryId}?`, null, req);
  }
};
export {deleteProdCatalogCategoryByIdUpdated};
