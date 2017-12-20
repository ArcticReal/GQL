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
import {GlXbrlClassInputType} from '../../accounting/GlXbrlClass/GlXbrlClassInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGlXbrlClass = {
  type: ResopnseType,
  description: 'mutation for ofbiz createGlXbrlClass method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glXbrlClasss/add?`, null, req);
  }
};
export {createGlXbrlClass};


const updateGlXbrlClass = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateGlXbrlClass method',
  args:{glXbrlClassToBeUpdated: {type: GlXbrlClassInputType},glXbrlClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glXbrlClasss/${args.glXbrlClassId}?`, args.glXbrlClassToBeUpdated, req);
  }
};
export {updateGlXbrlClass};


const deleteGlXbrlClassByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteGlXbrlClassByIdUpdated method',
  args:{glXbrlClassId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glXbrlClasss/${args.glXbrlClassId}?`, null, req);
  }
};
export {deleteGlXbrlClassByIdUpdated};
