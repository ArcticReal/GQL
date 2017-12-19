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
import {ProdCatalogCategoryTypeInputType} from '../../product/ProdCatalogCategoryType/ProdCatalogCategoryTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProdCatalogCategoryType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProdCatalogCategoryType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/prodCatalog/prodCatalogCategoryTypes/add?`, null, req);
  }
};
export {createProdCatalogCategoryType};


const updateProdCatalogCategoryType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProdCatalogCategoryType method',
  args:{prodCatalogCategoryTypeToBeUpdated: {type: ProdCatalogCategoryTypeInputType},prodCatalogCategoryTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/prodCatalog/prodCatalogCategoryTypes/${args.prodCatalogCategoryTypeId}?`, args.prodCatalogCategoryTypeToBeUpdated, req);
  }
};
export {updateProdCatalogCategoryType};


const deleteProdCatalogCategoryTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProdCatalogCategoryTypeByIdUpdated method',
  args:{prodCatalogCategoryTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/prodCatalog/prodCatalogCategoryTypes/${args.prodCatalogCategoryTypeId}?`, null, req);
  }
};
export {deleteProdCatalogCategoryTypeByIdUpdated};
