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
import {GlAccountClassInputType} from '../../accounting/GlAccountClass/GlAccountClassInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createGlAccountClass = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGlAccountClass method',
  args:{glAccountClassToBeAdded: {type: GlAccountClassInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/glAccountClasss/add?`, args.glAccountClassToBeAdded, req);
  }
};
export {createGlAccountClass};


const updateGlAccountClass = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountClass method',
  args:{glAccountClassToBeUpdated: {type: GlAccountClassInputType},glAccountClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/glAccountClasss/${args.glAccountClassId}?`, args.glAccountClassToBeUpdated, req);
  }
};
export {updateGlAccountClass};


const deleteGlAccountClassByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountClassByIdUpdated method',
  args:{glAccountClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/glAccountClasss/${args.glAccountClassId}?`, null, req);
  }
};
export {deleteGlAccountClassByIdUpdated};
