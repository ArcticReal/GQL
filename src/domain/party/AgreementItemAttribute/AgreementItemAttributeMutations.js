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
import {AgreementItemAttributeInputType} from '../../party/AgreementItemAttribute/AgreementItemAttributeInputType.js';
import {AgreementItemAttributeResponseType} from '../../party/AgreementItemAttribute/AgreementItemAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAgreementItemAttribute = {
  type: AgreementItemAttributeResponseType,
  description: 'mutation for ofbiz createAgreementItemAttribute method',
  args:{agreementItemAttributeToBeAdded: {type: AgreementItemAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementItemAttributes/add?`, args.agreementItemAttributeToBeAdded, req);
  }
};
export {createAgreementItemAttribute};


const deleteAgreementItemAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementItemAttributeByIdUpdated method',
  args:{agreementItemAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementItemAttributes/${args.agreementItemAttributeId}?`, null, req);
  }
};
export {deleteAgreementItemAttributeByIdUpdated};


const updateAgreementItemAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementItemAttribute method',
  args:{agreementItemAttributeToBeUpdated: {type: AgreementItemAttributeInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementItemAttributes/${args.nullVal}?`, args.agreementItemAttributeToBeUpdated, req);
  }
};
export {updateAgreementItemAttribute};
