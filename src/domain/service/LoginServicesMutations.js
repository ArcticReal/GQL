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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../framework/helpTypes.js';


const registerUserAccount = {
  type: ResopnseType,
  description: 'mutation for ofbiz registerUserAccount method',
  args:{userDetails: {type: UserDetailsDTOInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`register?`, args.userDetails, req);
  }
};
export {registerUserAccount};


const updateUserDetails = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateUserDetails method',
  args:{partyId: {type: GraphQLString},userDetails: {type: UserDetailsDTOInputType}},
  resolve: (root, args, {req}) => {
    return putToUrl(`userDetails/update/${args.partyId}?`, args.userDetails, req);
  }
};
export {updateUserDetails};
