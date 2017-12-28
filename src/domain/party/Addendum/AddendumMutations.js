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
import {AddendumInputType} from '../../party/Addendum/AddendumInputType.js';
import {AddendumResponseType} from '../../party/Addendum/AddendumResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createAddendum = {
  type: AddendumResponseType,
  description: 'mutation for ofbiz createAddendum method',
  args:{addendumToBeAdded: {type: AddendumInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/addendums/add?`, args.addendumToBeAdded, req);
  }
};
export {createAddendum};


const updateAddendum = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateAddendum method',
  args:{addendumToBeUpdated: {type: AddendumInputType},addendumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/addendums/${args.addendumId}?`, args.addendumToBeUpdated, req);
  }
};
export {updateAddendum};


const deleteAddendumByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteAddendumByIdUpdated method',
  args:{addendumId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/addendums/${args.addendumId}?`, null, req);
  }
};
export {deleteAddendumByIdUpdated};
