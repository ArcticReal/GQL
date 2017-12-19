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
import {AgreementEmploymentApplInputType} from '../../party/AgreementEmploymentAppl/AgreementEmploymentApplInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createAgreementEmploymentAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAgreementEmploymentAppl method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementEmploymentAppls/add?`, null, req);
  }
};
export {createAgreementEmploymentAppl};


const deleteAgreementEmploymentApplByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementEmploymentApplByIdUpdated method',
  args:{agreementEmploymentApplId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementEmploymentAppls/${args.agreementEmploymentApplId}?`, null, req);
  }
};
export {deleteAgreementEmploymentApplByIdUpdated};


const updateAgreementEmploymentAppl = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementEmploymentAppl method',
  args:{agreementEmploymentApplToBeUpdated: {type: AgreementEmploymentApplInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementEmploymentAppls/${args.nullVal}?`, args.agreementEmploymentApplToBeUpdated, req);
  }
};
export {updateAgreementEmploymentAppl};
