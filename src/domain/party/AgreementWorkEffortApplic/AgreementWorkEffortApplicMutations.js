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
import {AgreementWorkEffortApplicInputType} from '../../party/AgreementWorkEffortApplic/AgreementWorkEffortApplicInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createAgreementWorkEffortApplic = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAgreementWorkEffortApplic method',
  args:{agreementWorkEffortApplicToBeAdded: {type: AgreementWorkEffortApplicInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementWorkEffortApplics/add?`, args.agreementWorkEffortApplicToBeAdded, req);
  }
};
export {createAgreementWorkEffortApplic};


const updateAgreementWorkEffortApplic = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementWorkEffortApplic method',
  args:{agreementWorkEffortApplicToBeUpdated: {type: AgreementWorkEffortApplicInputType},agreementItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementWorkEffortApplics/${args.agreementItemSeqId}?`, args.agreementWorkEffortApplicToBeUpdated, req);
  }
};
export {updateAgreementWorkEffortApplic};


const deleteAgreementWorkEffortApplicByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementWorkEffortApplicByIdUpdated method',
  args:{agreementWorkEffortApplicId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementWorkEffortApplics/${args.agreementWorkEffortApplicId}?`, null, req);
  }
};
export {deleteAgreementWorkEffortApplicByIdUpdated};
