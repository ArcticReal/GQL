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
import {ProdCatalogRoleResponseType} from '../../product/ProdCatalogRole/ProdCatalogRoleResponseType.js';
import {ProdCatalogRoleInputType} from '../../product/ProdCatalogRole/ProdCatalogRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProdCatalogRole = {
  type: ProdCatalogRoleResponseType,
  description: 'mutation for ofbiz createProdCatalogRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/prodCatalog/prodCatalogRoles/add?`, null, req);
  }
};
export {createProdCatalogRole};


const deleteProdCatalogRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProdCatalogRoleByIdUpdated method',
  args:{prodCatalogRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/prodCatalog/prodCatalogRoles/${args.prodCatalogRoleId}?`, null, req);
  }
};
export {deleteProdCatalogRoleByIdUpdated};


const updateProdCatalogRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProdCatalogRole method',
  args:{prodCatalogRoleToBeUpdated: {type: ProdCatalogRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/prodCatalog/prodCatalogRoles/${args.roleTypeId}?`, args.prodCatalogRoleToBeUpdated, req);
  }
};
export {updateProdCatalogRole};
