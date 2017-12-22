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
import {SettlementTermResponseType} from '../../accounting/SettlementTerm/SettlementTermResponseType.js';
import {SettlementTermInputType} from '../../accounting/SettlementTerm/SettlementTermInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSettlementTerm = {
  type: SettlementTermResponseType,
  description: 'mutation for ofbiz createSettlementTerm method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/settlementTerms/add?`, null, req);
  }
};
export {createSettlementTerm};


const updateSettlementTerm = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSettlementTerm method',
  args:{settlementTermToBeUpdated: {type: SettlementTermInputType},settlementTermId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/settlementTerms/${args.settlementTermId}?`, args.settlementTermToBeUpdated, req);
  }
};
export {updateSettlementTerm};


const deleteSettlementTermByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSettlementTermByIdUpdated method',
  args:{settlementTermId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/settlementTerms/${args.settlementTermId}?`, null, req);
  }
};
export {deleteSettlementTermByIdUpdated};
