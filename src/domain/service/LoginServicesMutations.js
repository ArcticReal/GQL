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
import {UserDetailsDTOInputType} from '../dto/UserDetailsDTOInputType.js';
import {UserDetailsDTOResponseType} from '../dto/UserDetailsDTOResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const registerUserAccount = {
  type: UserDetailsDTOResponseType,
  description: 'mutation for ofbiz registerUserAccount method',
  args:{userDetails: {type: UserDetailsDTOInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`register?`, args.userDetails, req);
  }
};
export {registerUserAccount};


const updateUserDetails = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateUserDetails method',
  args:{partyId: {type: GraphQLString},userDetails: {type: UserDetailsDTOInputType}},
  resolve: (root, args, {req}) => {
    return putToUrl(`userDetails/update/${args.partyId}?`, args.userDetails, req);
  }
};
export {updateUserDetails};
