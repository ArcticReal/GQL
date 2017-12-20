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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAgreementContentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createAgreementContentType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/agreement/agreementContentTypes/add?`, null, req);
  }
};
export {createAgreementContentType};


const updateAgreementContentType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateAgreementContentType method',
  args:{agreementContentTypeToBeUpdated: {type: AgreementContentTypeInputType},agreementContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/agreement/agreementContentTypes/${args.agreementContentTypeId}?`, args.agreementContentTypeToBeUpdated, req);
  }
};
export {updateAgreementContentType};


const deleteAgreementContentTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteAgreementContentTypeByIdUpdated method',
  args:{agreementContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/agreement/agreementContentTypes/${args.agreementContentTypeId}?`, null, req);
  }
};
export {deleteAgreementContentTypeByIdUpdated};
