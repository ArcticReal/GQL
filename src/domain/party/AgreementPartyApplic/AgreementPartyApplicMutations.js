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
import {AgreementPartyApplicResponseType} from '../../party/AgreementPartyApplic/AgreementPartyApplicResponseType.js';
import {AgreementPartyApplicInputType} from '../../party/AgreementPartyApplic/AgreementPartyApplicInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAgreementPartyApplic = {
  type: AgreementPartyApplicResponseType,
  description: 'mutation for ofbiz createAgreementPartyApplic method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementPartyApplics/add?`, null, req);
  }
};
export {createAgreementPartyApplic};


const updateAgreementPartyApplic = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementPartyApplic method',
  args:{agreementPartyApplicToBeUpdated: {type: AgreementPartyApplicInputType},agreementItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementPartyApplics/${args.agreementItemSeqId}?`, args.agreementPartyApplicToBeUpdated, req);
  }
};
export {updateAgreementPartyApplic};


const deleteAgreementPartyApplicByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementPartyApplicByIdUpdated method',
  args:{agreementPartyApplicId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementPartyApplics/${args.agreementPartyApplicId}?`, null, req);
  }
};
export {deleteAgreementPartyApplicByIdUpdated};
