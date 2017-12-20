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
import {TaxAuthorityRateTypeInputType} from '../../accounting/TaxAuthorityRateType/TaxAuthorityRateTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTaxAuthorityRateType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createTaxAuthorityRateType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/taxAuthority/taxAuthorityRateTypes/add?`, null, req);
  }
};
export {createTaxAuthorityRateType};


const updateTaxAuthorityRateType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateTaxAuthorityRateType method',
  args:{taxAuthorityRateTypeToBeUpdated: {type: TaxAuthorityRateTypeInputType},taxAuthorityRateTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/taxAuthority/taxAuthorityRateTypes/${args.taxAuthorityRateTypeId}?`, args.taxAuthorityRateTypeToBeUpdated, req);
  }
};
export {updateTaxAuthorityRateType};


const deleteTaxAuthorityRateTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteTaxAuthorityRateTypeByIdUpdated method',
  args:{taxAuthorityRateTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/taxAuthority/taxAuthorityRateTypes/${args.taxAuthorityRateTypeId}?`, null, req);
  }
};
export {deleteTaxAuthorityRateTypeByIdUpdated};
