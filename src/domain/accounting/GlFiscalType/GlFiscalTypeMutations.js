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
import {GlFiscalTypeInputType} from '../../accounting/GlFiscalType/GlFiscalTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGlFiscalType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createGlFiscalType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glFiscalTypes/add?`, null, req);
  }
};
export {createGlFiscalType};


const updateGlFiscalType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateGlFiscalType method',
  args:{glFiscalTypeToBeUpdated: {type: GlFiscalTypeInputType},glFiscalTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glFiscalTypes/${args.glFiscalTypeId}?`, args.glFiscalTypeToBeUpdated, req);
  }
};
export {updateGlFiscalType};


const deleteGlFiscalTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteGlFiscalTypeByIdUpdated method',
  args:{glFiscalTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glFiscalTypes/${args.glFiscalTypeId}?`, null, req);
  }
};
export {deleteGlFiscalTypeByIdUpdated};
