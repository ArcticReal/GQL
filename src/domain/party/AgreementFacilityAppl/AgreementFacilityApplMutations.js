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
import {AgreementFacilityApplInputType} from '../../party/AgreementFacilityAppl/AgreementFacilityApplInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createAgreementFacilityAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAgreementFacilityAppl method',
  args:{agreementFacilityApplToBeAdded: {type: AgreementFacilityApplInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementFacilityAppls/add?`, args.agreementFacilityApplToBeAdded, req);
  }
};
export {createAgreementFacilityAppl};


const deleteAgreementFacilityApplByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementFacilityApplByIdUpdated method',
  args:{agreementFacilityApplId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementFacilityAppls/${args.agreementFacilityApplId}?`, null, req);
  }
};
export {deleteAgreementFacilityApplByIdUpdated};


const updateAgreementFacilityAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementFacilityAppl method',
  args:{agreementFacilityApplToBeUpdated: {type: AgreementFacilityApplInputType},agreementItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementFacilityAppls/${args.agreementItemSeqId}?`, args.agreementFacilityApplToBeUpdated, req);
  }
};
export {updateAgreementFacilityAppl};
