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
import {ProdCatalogInvFacilityResponseType} from '../../product/ProdCatalogInvFacility/ProdCatalogInvFacilityResponseType.js';
import {ProdCatalogInvFacilityInputType} from '../../product/ProdCatalogInvFacility/ProdCatalogInvFacilityInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProdCatalogInvFacility = {
  type: ProdCatalogInvFacilityResponseType,
  description: 'mutation for ofbiz createProdCatalogInvFacility method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/prodCatalog/prodCatalogInvFacilitys/add?`, null, req);
  }
};
export {createProdCatalogInvFacility};


const updateProdCatalogInvFacility = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProdCatalogInvFacility method',
  args:{prodCatalogInvFacilityToBeUpdated: {type: ProdCatalogInvFacilityInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/prodCatalog/prodCatalogInvFacilitys/${args.nullVal}?`, args.prodCatalogInvFacilityToBeUpdated, req);
  }
};
export {updateProdCatalogInvFacility};


const deleteProdCatalogInvFacilityByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProdCatalogInvFacilityByIdUpdated method',
  args:{prodCatalogInvFacilityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/prodCatalog/prodCatalogInvFacilitys/${args.prodCatalogInvFacilityId}?`, null, req);
  }
};
export {deleteProdCatalogInvFacilityByIdUpdated};
