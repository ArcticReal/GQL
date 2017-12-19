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
import {AgreementTermAttributeInputType} from '../../party/AgreementTermAttribute/AgreementTermAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createAgreementTermAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createAgreementTermAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementTermAttributes/add?`, null, req);
  }
};
export {createAgreementTermAttribute};


const deleteAgreementTermAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementTermAttributeByIdUpdated method',
  args:{agreementTermAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementTermAttributes/${args.agreementTermAttributeId}?`, null, req);
  }
};
export {deleteAgreementTermAttributeByIdUpdated};


const updateAgreementTermAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementTermAttribute method',
  args:{agreementTermAttributeToBeUpdated: {type: AgreementTermAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementTermAttributes/${args.attrName}?`, args.agreementTermAttributeToBeUpdated, req);
  }
};
export {updateAgreementTermAttribute};
