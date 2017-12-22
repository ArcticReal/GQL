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
import {GlXbrlClassResponseType} from '../../accounting/GlXbrlClass/GlXbrlClassResponseType.js';
import {GlXbrlClassInputType} from '../../accounting/GlXbrlClass/GlXbrlClassInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGlXbrlClass = {
  type: GlXbrlClassResponseType,
  description: 'mutation for ofbiz createGlXbrlClass method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glXbrlClasss/add?`, null, req);
  }
};
export {createGlXbrlClass};


const updateGlXbrlClass = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlXbrlClass method',
  args:{glXbrlClassToBeUpdated: {type: GlXbrlClassInputType},glXbrlClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glXbrlClasss/${args.glXbrlClassId}?`, args.glXbrlClassToBeUpdated, req);
  }
};
export {updateGlXbrlClass};


const deleteGlXbrlClassByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlXbrlClassByIdUpdated method',
  args:{glXbrlClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glXbrlClasss/${args.glXbrlClassId}?`, null, req);
  }
};
export {deleteGlXbrlClassByIdUpdated};
