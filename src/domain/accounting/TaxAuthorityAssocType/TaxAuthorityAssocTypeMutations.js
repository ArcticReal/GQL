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
import {TaxAuthorityAssocTypeInputType} from '../../accounting/TaxAuthorityAssocType/TaxAuthorityAssocTypeInputType.js';
import {TaxAuthorityAssocTypeResponseType} from '../../accounting/TaxAuthorityAssocType/TaxAuthorityAssocTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTaxAuthorityAssocType = {
  type: TaxAuthorityAssocTypeResponseType,
  description: 'mutation for ofbiz createTaxAuthorityAssocType method',
  args:{taxAuthorityAssocTypeToBeAdded: {type: TaxAuthorityAssocTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/taxAuthority/taxAuthorityAssocTypes/add?`, args.taxAuthorityAssocTypeToBeAdded, req);
  }
};
export {createTaxAuthorityAssocType};


const updateTaxAuthorityAssocType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTaxAuthorityAssocType method',
  args:{taxAuthorityAssocTypeToBeUpdated: {type: TaxAuthorityAssocTypeInputType},taxAuthorityAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/taxAuthority/taxAuthorityAssocTypes/${args.taxAuthorityAssocTypeId}?`, args.taxAuthorityAssocTypeToBeUpdated, req);
  }
};
export {updateTaxAuthorityAssocType};


const deleteTaxAuthorityAssocTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTaxAuthorityAssocTypeByIdUpdated method',
  args:{taxAuthorityAssocTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/taxAuthority/taxAuthorityAssocTypes/${args.taxAuthorityAssocTypeId}?`, null, req);
  }
};
export {deleteTaxAuthorityAssocTypeByIdUpdated};
