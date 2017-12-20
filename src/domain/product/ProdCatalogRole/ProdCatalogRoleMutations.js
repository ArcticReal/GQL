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
import {ProdCatalogRoleInputType} from '../../product/ProdCatalogRole/ProdCatalogRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProdCatalogRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProdCatalogRole method',
  args:{prodCatalogRoleToBeAdded: {type: ProdCatalogRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/prodCatalog/prodCatalogRoles/add?`, args.prodCatalogRoleToBeAdded, req);
  }
};
export {createProdCatalogRole};


const deleteProdCatalogRoleByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProdCatalogRoleByIdUpdated method',
  args:{prodCatalogRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/prodCatalog/prodCatalogRoles/${args.prodCatalogRoleId}?`, null, req);
  }
};
export {deleteProdCatalogRoleByIdUpdated};


const updateProdCatalogRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProdCatalogRole method',
  args:{prodCatalogRoleToBeUpdated: {type: ProdCatalogRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/prodCatalog/prodCatalogRoles/${args.roleTypeId}?`, args.prodCatalogRoleToBeUpdated, req);
  }
};
export {updateProdCatalogRole};
