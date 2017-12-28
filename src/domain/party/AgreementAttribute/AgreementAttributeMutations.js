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
import {AgreementAttributeResponseType} from '../../party/AgreementAttribute/AgreementAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAgreementAttribute = {
  type: AgreementAttributeResponseType,
  description: 'mutation for ofbiz createAgreementAttribute method',
  args:{agreementAttributeToBeAdded: {type: AgreementAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementAttributes/add?`, args.agreementAttributeToBeAdded, req);
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
