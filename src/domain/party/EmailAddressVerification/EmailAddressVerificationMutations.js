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
import {EmailAddressVerificationInputType} from '../../party/EmailAddressVerification/EmailAddressVerificationInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createEmailAddressVerification = {
  type: ResopnseType,
  description: 'mutation for ofbiz createEmailAddressVerification method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/emailAddressVerifications/add?`, null, req);
  }
};
export {createEmailAddressVerification};


const updateEmailAddressVerification = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateEmailAddressVerification method',
  args:{emailAddressVerificationToBeUpdated: {type: EmailAddressVerificationInputType},emailAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/emailAddressVerifications/${args.emailAddress}?`, args.emailAddressVerificationToBeUpdated, req);
  }
};
export {updateEmailAddressVerification};


const deleteEmailAddressVerificationByHash = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteEmailAddressVerificationByHash method',
  args:{hash: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/emailAddressVerifications/${args.hash}?`, null, req);
  }
};
export {deleteEmailAddressVerificationByHash};
