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
import {AgreementAttributeInputType} from '../../party/AgreementAttribute/AgreementAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createAgreementAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAgreementAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementAttributes/add?`, null, req);
  }
};
export {createAgreementAttribute};


const deleteAgreementAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementAttributeByIdUpdated method',
  args:{agreementAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementAttributes/${args.agreementAttributeId}?`, null, req);
  }
};
export {deleteAgreementAttributeByIdUpdated};


const updateAgreementAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementAttribute method',
  args:{agreementAttributeToBeUpdated: {type: AgreementAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementAttributes/${args.attrName}?`, args.agreementAttributeToBeUpdated, req);
  }
};
export {updateAgreementAttribute};
