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
import {AgreementTermInputType} from '../../party/AgreementTerm/AgreementTermInputType.js';
import {AgreementTermResponseType} from '../../party/AgreementTerm/AgreementTermResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAgreementTerm = {
  type: AgreementTermResponseType,
  description: 'mutation for ofbiz createAgreementTerm method',
  args:{agreementTermToBeAdded: {type: AgreementTermInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementTerms/add?`, args.agreementTermToBeAdded, req);
  }
};
export {createAgreementTerm};


const updateAgreementTerm = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementTerm method',
  args:{agreementTermToBeUpdated: {type: AgreementTermInputType},agreementTermId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementTerms/${args.agreementTermId}?`, args.agreementTermToBeUpdated, req);
  }
};
export {updateAgreementTerm};


const deleteAgreementTermByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementTermByIdUpdated method',
  args:{agreementTermId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementTerms/${args.agreementTermId}?`, null, req);
  }
};
export {deleteAgreementTermByIdUpdated};
