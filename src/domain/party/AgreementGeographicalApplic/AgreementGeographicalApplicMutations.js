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
import {AgreementGeographicalApplicInputType} from '../../party/AgreementGeographicalApplic/AgreementGeographicalApplicInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createAgreementGeographicalApplic = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAgreementGeographicalApplic method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementGeographicalApplics/add?`, null, req);
  }
};
export {createAgreementGeographicalApplic};


const deleteAgreementGeographicalApplicByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementGeographicalApplicByIdUpdated method',
  args:{agreementGeographicalApplicId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementGeographicalApplics/${args.agreementGeographicalApplicId}?`, null, req);
  }
};
export {deleteAgreementGeographicalApplicByIdUpdated};


const updateAgreementGeographicalApplic = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementGeographicalApplic method',
  args:{agreementGeographicalApplicToBeUpdated: {type: AgreementGeographicalApplicInputType},agreementItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementGeographicalApplics/${args.agreementItemSeqId}?`, args.agreementGeographicalApplicToBeUpdated, req);
  }
};
export {updateAgreementGeographicalApplic};
