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
import {AgreementContentTypeInputType} from '../../party/AgreementContentType/AgreementContentTypeInputType.js';
import {AgreementContentTypeResponseType} from '../../party/AgreementContentType/AgreementContentTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAgreementContentType = {
  type: AgreementContentTypeResponseType,
  description: 'mutation for ofbiz createAgreementContentType method',
  args:{agreementContentTypeToBeAdded: {type: AgreementContentTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementContentTypes/add?`, args.agreementContentTypeToBeAdded, req);
  }
};
export {createAgreementContentType};


const updateAgreementContentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAgreementContentType method',
  args:{agreementContentTypeToBeUpdated: {type: AgreementContentTypeInputType},agreementContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementContentTypes/${args.agreementContentTypeId}?`, args.agreementContentTypeToBeUpdated, req);
  }
};
export {updateAgreementContentType};


const deleteAgreementContentTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAgreementContentTypeByIdUpdated method',
  args:{agreementContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementContentTypes/${args.agreementContentTypeId}?`, null, req);
  }
};
export {deleteAgreementContentTypeByIdUpdated};
