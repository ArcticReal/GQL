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
import {TaxAuthorityRateProductInputType} from '../../accounting/TaxAuthorityRateProduct/TaxAuthorityRateProductInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createTaxAuthorityRateProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTaxAuthorityRateProduct method',
  args:{taxAuthorityRateProductToBeAdded: {type: TaxAuthorityRateProductInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/taxAuthority/taxAuthorityRateProducts/add?`, args.taxAuthorityRateProductToBeAdded, req);
  }
};
export {createTaxAuthorityRateProduct};


const deleteTaxAuthorityRateProductByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTaxAuthorityRateProductByIdUpdated method',
  args:{taxAuthorityRateProductId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/taxAuthority/taxAuthorityRateProducts/${args.taxAuthorityRateProductId}?`, null, req);
  }
};
export {deleteTaxAuthorityRateProductByIdUpdated};


const updateTaxAuthorityRateProduct = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTaxAuthorityRateProduct method',
  args:{taxAuthorityRateProductToBeUpdated: {type: TaxAuthorityRateProductInputType},taxAuthorityRateSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/taxAuthority/taxAuthorityRateProducts/${args.taxAuthorityRateSeqId}?`, args.taxAuthorityRateProductToBeUpdated, req);
  }
};
export {updateTaxAuthorityRateProduct};
