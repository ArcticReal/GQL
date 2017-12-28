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
import {AgreementEmploymentApplResponseType} from '../../party/AgreementEmploymentAppl/AgreementEmploymentApplResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAgreementEmploymentAppl = {
  type: AgreementEmploymentApplResponseType,
  description: 'mutation for ofbiz createAgreementEmploymentAppl method',
  args:{agreementEmploymentApplToBeAdded: {type: AgreementEmploymentApplInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementEmploymentAppls/add?`, args.agreementEmploymentApplToBeAdded, req);
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
